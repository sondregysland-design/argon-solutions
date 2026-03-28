import { google } from "googleapis";
import { addMinutes, format, parseISO } from "date-fns";

const SLOT_TIMES = ["10:00", "10:30", "11:00", "11:30"] as const;
const SLOT_DURATION_MINUTES = 30;

function getAuth() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
}

function getCalendar() {
  const auth = getAuth();
  auth.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  return google.calendar({ version: "v3", auth });
}

export async function getAvailability(
  startDate: string,
  endDate: string
): Promise<Record<string, string[]>> {
  const calendar = getCalendar();
  const calendarId = process.env.GOOGLE_CALENDAR_EMAIL!;

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: `${startDate}T00:00:00+02:00`,
      timeMax: `${endDate}T23:59:59+02:00`,
      timeZone: "Europe/Oslo",
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
        const slotStart = new Date(current);
        slotStart.setHours(hours, minutes, 0, 0);
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
  const calendarId = process.env.GOOGLE_CALENDAR_EMAIL!;
  const { date, time, name, email, company, topic } = params;

  const [hours, minutes] = time.split(":").map(Number);
  const start = parseISO(date);
  start.setHours(hours, minutes, 0, 0);
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
        timeZone: "Europe/Oslo",
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: "Europe/Oslo",
      },
      attendees: [{ email }],
    },
  });

  return event.data;
}

export function isValidSlotTime(time: string): boolean {
  return (SLOT_TIMES as readonly string[]).includes(time);
}
