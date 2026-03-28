import { NextRequest } from "next/server";
import { getAvailability } from "@/lib/google-calendar";
import { addDays, format } from "date-fns";

export const dynamic = "force-dynamic";

const MIN_ADVANCE_DAYS = 2;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!from || !to) {
    return Response.json(
      { error: "Parametrene 'from' og 'to' er påkrevd (YYYY-MM-DD)" },
      { status: 400 }
    );
  }

  const earliest = format(addDays(new Date(), MIN_ADVANCE_DAYS), "yyyy-MM-dd");
  const effectiveFrom = from < earliest ? earliest : from;

  if (effectiveFrom > to) {
    return Response.json({ dates: {} });
  }

  try {
    const dates = await getAvailability(effectiveFrom, to);
    return Response.json({ dates });
  } catch (error) {
    console.error("Failed to fetch availability:", error);
    return Response.json(
      { error: "Kunne ikke hente tilgjengelighet" },
      { status: 500 }
    );
  }
}
