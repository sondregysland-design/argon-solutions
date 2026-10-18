import { NextRequest } from "next/server";
import { createBooking, getAvailability, isValidSlotTime } from "@/lib/google-calendar";
import { sendClientConfirmation, sendHostNotification } from "@/lib/booking-email";
import { EMAIL_RE, isBot, tooLong } from "@/lib/form-guard";
import { pushLead } from "@/lib/crm";
import { addDays, format } from "date-fns";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ugyldig forespørsel" }, { status: 400 });
  }

  // Bots får et vanlig suksess-svar, men ingen booking eller e-post
  if (isBot(body)) {
    return Response.json({ success: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const date = str(body.date);
  const time = str(body.time);
  const name = str(body.name);
  const email = str(body.email);
  const company = str(body.company) || undefined;
  const topic = str(body.topic) || undefined;

  if (!date || !time || !name || !email) {
    return Response.json({ error: "Dato, tid, navn og e-post er påkrevd" }, { status: 400 });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Ugyldig dato" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Ugyldig e-postadresse" }, { status: 400 });
  }

  const longField = tooLong({ name, email, company, topic });
  if (longField) {
    return Response.json({ error: `Feltet "${longField}" er for langt` }, { status: 400 });
  }

  if (!isValidSlotTime(time)) {
    return Response.json({ error: "Ugyldig tidspunkt" }, { status: 400 });
  }

  const earliest = format(addDays(new Date(), 2), "yyyy-MM-dd");
  if (date < earliest) {
    return Response.json({ error: "Du må booke minst 2 dager i forveien" }, { status: 400 });
  }

  try {
    const availability = await getAvailability(date, date);
    const slotsForDate = availability[date] || [];
    if (!slotsForDate.includes(time)) {
      return Response.json({ error: "Tidspunktet er dessverre ikke lenger tilgjengelig" }, { status: 409 });
    }
  } catch (error) {
    console.error("Failed to verify availability:", error);
    return Response.json({ error: "Kunne ikke verifisere tilgjengelighet" }, { status: 500 });
  }

  const booking = { date, time, name, email, company, topic };

  try {
    await createBooking(booking);
  } catch (error) {
    console.error("Failed to create booking:", error);
    return Response.json({ error: "Kunne ikke opprette booking" }, { status: 500 });
  }

  try {
    await Promise.all([
      sendClientConfirmation(booking),
      sendHostNotification(booking),
    ]);
  } catch (error) {
    console.error("Failed to send emails:", error);
  }

  pushLead({
    name,
    email,
    company,
    source: "calendar",
    metadata: { bookingDate: date, bookingTime: time, topic },
  });

  return Response.json({ success: true });
}
