import { after } from "next/server";

type Lead = {
  name: string;
  email: string;
  company?: string;
  message?: string;
  source: "calendar" | "contact-form";
  metadata?: { bookingDate?: string; bookingTime?: string; topic?: string };
};

/**
 * Sender leadet til Argon CRM (argon-crm-live, /api/leads/ingest) etter at
 * svaret er sendt til brukeren. CRM-en krever Bearer-token (API_SECRET der,
 * ARGON_CRM_API_TOKEN her). Feil logges, men stopper aldri skjemaet.
 */
export function pushLead(lead: Lead) {
  const baseUrl = process.env.ARGON_CRM_BASE_URL?.trim();
  const token = process.env.ARGON_CRM_API_TOKEN?.trim();
  if (!baseUrl) return;
  if (!token) {
    console.error("CRM-push hoppet over: ARGON_CRM_API_TOKEN mangler");
    return;
  }

  after(async () => {
    try {
      const res = await fetch(`${baseUrl}/api/leads/ingest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error(`CRM-push feilet: HTTP ${res.status} ${await res.text()}`);
      }
    } catch (err) {
      console.error("CRM-push feilet:", err);
    }
  });
}
