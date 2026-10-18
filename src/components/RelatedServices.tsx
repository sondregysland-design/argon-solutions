import Link from "next/link";

const SERVICES = [
  { href: "/tjenester/ai-automatisering", title: "AI-automatisering", body: "Automatiser dokumenthåndtering, rapportering og repetitive prosesser." },
  { href: "/tjenester/ai-agenter", title: "AI-agenter", body: "Agenter som tar nettleseroppgaver, datainnhenting og repetitivt arbeid." },
  { href: "/tjenester/claude-code", title: "Claude Code", body: "Claude Code satt opp med skills, MCP-servere og arbeidsflyter." },
  { href: "/tjenester/skreddersydd-software", title: "Skreddersydd software", body: "Webapplikasjoner og dashbord for energisektoren, også for feltarbeid." },
  { href: "/tjenester/systemintegrasjon", title: "Systemintegrasjon", body: "Koble sammen eksisterende systemer med skreddersydde API-integrasjoner." },
  { href: "/tjenester/ai-chatbot", title: "AI-chatbot", body: "Chatbot koblet mot kunnskapsbase og CRM, på norsk og engelsk." },
  { href: "/tjenester/ai-strategi", title: "AI-strategi", body: "Kartlegg hvor AI lønner seg, med ROI-modell og veikart." },
];

/**
 * Lenker mellom tjenestesidene. Før denne fantes hadde /tjenester/ai-automatisering
 * bare én intern lenke inn (målt 2026-10-18), som gjør en side vanskelig å finne
 * for både søk og lesere.
 */
export function RelatedServices({ current }: { current: string }) {
  const others = SERVICES.filter((s) => s.href !== current);
  return (
    <nav aria-labelledby="andre-tjenester" className="mx-auto mt-20 max-w-6xl px-6">
      <h2 id="andre-tjenester" className="font-display text-2xl font-medium tracking-tight text-text">
        Andre tjenester
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block h-full rounded-xl bg-surface p-5 transition hover:bg-text/5"
            >
              <span className="font-semibold text-text">{s.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-text-light">{s.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
