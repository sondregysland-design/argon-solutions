// Felles validering for skjemaene som sender e-post fra argonsolutions.no.
// Alt brukerinput som havner i HTML-e-post skal gjennom esc().

export const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// Skjult felt i skjemaene. Mennesker ser det ikke, bots fyller det ut.
export const HONEYPOT_FIELD = "website";

export const LIMITS = {
  name: 100,
  email: 200,
  company: 120,
  topic: 200,
  message: 5000,
} as const;

export function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isBot(body: Record<string, unknown>): boolean {
  const v = body[HONEYPOT_FIELD];
  return typeof v === "string" && v.trim().length > 0;
}

/** Returnerer navnet på første felt som er for langt, ellers null. */
export function tooLong(
  fields: Partial<Record<keyof typeof LIMITS, unknown>>
): keyof typeof LIMITS | null {
  for (const [key, value] of Object.entries(fields)) {
    if (value == null) continue;
    if (String(value).length > LIMITS[key as keyof typeof LIMITS]) {
      return key as keyof typeof LIMITS;
    }
  }
  return null;
}
