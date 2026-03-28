import { NextRequest } from "next/server";
import { createBooking, getAvailability, isValidSlotTime } from "@/lib/google-calendar";
import { sendClientConfirmation, sendHostNotification } from "@/lib/booking-email";
import { addDays, format } from "date-fns";

export async function POST(request: NextRequest) {
  let body: {
    date: string;
    time: string;
    name: string;
    email: string;
    company?: string;
    topic?: string;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ugyldig forespørsel" }, { status: 400 });
  }

  const { date, time, name, email, company, topic } = body;

  if (!date || !time || !name || !email) {
    return Response.json({ error: "Dato, tid, navn og e-post er påkrevd" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Ugyldig e-postadresse" }, { status: 400 });
  }

  if (!isValidSlotTime(time)) {
    return Response.json({ error: "Ugyldig tidspunkt" }, { status: 400 });
  }

  const earliest = format(addDays(new Date(), 2), "yyyy-MM-dd");
  if (date < earliest) {
    return Response.json({ error: "Du må booke minst 2 dager i forveien" }, { status: 400 });
  }

  if (topic && topic.length > 200) {
    return Response.json({ error: "Tema kan ikke være lengre enn 200 tegn" }, { status: 400 });
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

  try {
    await createBooking({ date, time, name, email, company, topic });
  } catch (error) {
    console.error("Failed to create booking:", error);
    return Response.json({ error: "Kunne ikke opprette booking" }, { status: 500 });
  }

  try {
    await Promise.all([
      sendClientConfirmation({ date, time, name, email, company, topic }),
      sendHostNotification({ date, time, name, email, company, topic }),
    ]);
  } catch (error) {
    console.error("Failed to send emails:", error);
  }

  return Response.json({ success: true });
}
