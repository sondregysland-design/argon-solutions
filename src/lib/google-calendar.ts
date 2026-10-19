import { google } from "googleapis";
import { addMinutes, format, parseISO } from "date-fns";
import { fromZonedTime } from "date-fns-tz";

// Wider pool of possible times, but only 2-3 shown per day
const ALL_POSSIBLE_TIMES = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
];
const SLOT_DURATION_MINUTES = 30;
const TZ = "Europe/Oslo";

function envTrimmed(key: string): string {
  return (process.env[key] || "").trim();
}

/**
 * Deterministic hash from a date string.
 * Produces consistent "random" slot selection per day.
 */
function dateHash(dateStr: string): number {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash * 31 + dateStr.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Pick 2-3 random slots from the pool for a given date.
 * Deterministic: same date always gets same slots.
 */
function getSlotsForDate(dateStr: string): string[] {
  const hash = dateHash(dateStr);
  const numSlots = (hash % 2) + 2; // 2 or 3 slots

  // Shuffle using the hash as seed
  const pool = [...ALL_POSSIBLE_TIMES];
  let seed = hash;
  for (let i = pool.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 1) | 0;
    const j = Math.abs(seed) % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, numSlots).sort();
}

/**
 * Service account (GOOGLE_SERVICE_ACCOUNT_JSON, rå JSON eller base64) brukes når
 * den er satt. Den kan ikke få invalid_grant slik OAuth-refresh-tokenet har fått
 * gjentatte ganger (juli 2026, og nede fra 27. juli). Kalenderen må deles med
 * service-kontoens e-post med «Gjør endringer i aktiviteter». Uten variabelen
 * brukes OAuth som før.
 */
function serviceAccount(): { client_email: string; private_key: string } | null {
  const raw = envTrimmed("GOOGLE_SERVICE_ACCOUNT_JSON");
  if (!raw) return null;
  const json = raw.startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
  const parsed = JSON.parse(json);
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON mangler client_email eller private_key");
  }
  return parsed;
}

function getCalendar() {
  const sa = serviceAccount();
  if (sa) {
    const auth = new google.auth.JWT({
      email: sa.client_email,
      key: sa.private_key,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });
    return google.calendar({ version: "v3", auth });
  }
  const auth = new google.auth.OAuth2(
    envTrimmed("GOOGLE_CLIENT_ID"),
    envTrimmed("GOOGLE_CLIENT_SECRET")
  );
  auth.setCredentials({
    refresh_token: envTrimmed("GOOGLE_REFRESH_TOKEN"),
  });
  return google.calendar({ version: "v3", auth });
}

export async function getAvailability(
  startDate: string,
  endDate: string
): Promise<Record<string, string[]>> {
  const calendar = getCalendar();
  const calendarId = envTrimmed("GOOGLE_CALENDAR_EMAIL");

  const timeMin = fromZonedTime(`${startDate}T00:00:00`, TZ).toISOString();
  const timeMax = fromZonedTime(`${endDate}T23:59:59`, TZ).toISOString();

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin,
      timeMax,
      timeZone: TZ,
      items: [{ id: calendarId }],
    },
  });

  const busySlots =
    response.data.calendars?.[calendarId]?.busy || [];

  const result: Record<string, string[]> = {};

  let current = parseISO(startDate);
  const end = parseISO(endDate);

  while (current <= end) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const dateStr = format(current, "yyyy-MM-dd");
      const daySlots = getSlotsForDate(dateStr);
      const available: string[] = [];

      for (const time of daySlots) {
        const slotStart = fromZonedTime(`${dateStr}T${time}:00`, TZ);
        const slotEnd = addMinutes(slotStart, SLOT_DURATION_MINUTES);

        const isBusy = busySlots.some((busy) => {
          const busyStart = new Date(busy.start!);
          const busyEnd = new Date(busy.end!);
          return slotStart < busyEnd && slotEnd > busyStart;
        });

        if (!isBusy) {
          available.push(time);
        }
      }

      if (available.length > 0) {
        result[dateStr] = available;
      }
    }

    current = new Date(current);
    current.setDate(current.getDate() + 1);
  }

  return result;
}

export async function createBooking(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  company?: string;
  topic?: string;
}) {
  const calendar = getCalendar();
  const calendarId = envTrimmed("GOOGLE_CALENDAR_EMAIL");
  const { date, time, name, email, company, topic } = params;

  const start = fromZonedTime(`${date}T${time}:00`, TZ);
  const end = addMinutes(start, SLOT_DURATION_MINUTES);

  const summary = `Konsultasjon: ${name}${company ? ` (${company})` : ""}`;
  const description = [
    `Kontakt: ${name}`,
    `E-post: ${email}`,
    company && `Selskap: ${company}`,
    topic && `Tema: ${topic}`,
  ]
    .filter(Boolean)
    .join("\n");

  const event = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary,
      description,
      start: {
        dateTime: start.toISOString(),
        timeZone: TZ,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: TZ,
      },
      // En service account uten domain-wide delegation kan ikke invitere gjester.
      // Gjesten får uansett ICS-invitasjon i bekreftelses-e-posten.
      ...(serviceAccount() ? {} : { attendees: [{ email }] }),
    },
  });

  return event.data;
}

export function isValidSlotTime(time: string): boolean {
  return ALL_POSSIBLE_TIMES.includes(time);
}
