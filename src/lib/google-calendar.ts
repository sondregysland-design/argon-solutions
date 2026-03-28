import { google } from "googleapis";
import { addMinutes, format, parseISO } from "date-fns";
import { toZonedTime, fromZonedTime } from "date-fns-tz";

const SLOT_TIMES = ["10:00", "10:30", "11:00", "11:30"] as const;
const SLOT_DURATION_MINUTES = 30;
const TZ = "Europe/Oslo";

function envTrimmed(key: string): string {
  return (process.env[key] || "").trim();
}

function getAuth() {
  return new google.auth.OAuth2(
    envTrimmed("GOOGLE_CLIENT_ID"),
    envTrimmed("GOOGLE_CLIENT_SECRET")
  );
}

function getCalendar() {
  const auth = getAuth();
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

  // Use timezone-aware date strings for the query
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
      const available: string[] = [];

      for (const time of SLOT_TIMES) {
        const [hours, minutes] = time.split(":").map(Number);
        // Create slot times in Oslo timezone
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

  // Create event times in Oslo timezone
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
      attendees: [{ email }],
    },
  });

  return event.data;
}

export function isValidSlotTime(time: string): boolean {
  return (SLOT_TIMES as readonly string[]).includes(time);
}
