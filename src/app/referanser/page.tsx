import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Se prosjektene Argon Solutions har bygget for olje- og gassindustrien: offshore prosjektstyring, CRM, AI-dokumentbehandling, risikostyring og mer.";

export const metadata: Metadata = {
  title: "Referanser og prosjekter | Argon Solutions",
  description,
  alternates: { canonical: "/referanser" },
  openGraph: {
    title: "Referanser og prosjekter | Argon Solutions",
    description,
    url: "/referanser",
  },
};

const prosjekter = [
  {
    title: "Offshore prosjektstyring med ROV-sporing",
    challenge:
      "Et offshore-servicefirma trengte en komplett plattform for å styre prosjekter, prosedyrer, mannskap og utstyr. Eksisterende løsninger var for generelle og manglet støtte for ROV-systemsporing og rollebasert tilgang på tvers av prosjektteam.",
    solution:
      "Argon Solutions utviklet Argon Prosjektstyring, en webapplikasjon bygget med Next.js og Supabase som gir full oversikt over aktive prosjekter, gjøremål, prosedyrer og lagerstyring. Systemet inkluderer rollebasert tilgangskontroll, sanntids statusoppdateringer og spesialmoduler for ROV-systemsporing.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    results: [
      "Full digital oversikt over alle aktive prosjekter",
      "Rollebasert tilgang for feltpersonell, prosjektledere og ledelse",
      "Sanntids statusoppdateringer på tvers av lokasjoner",
    ],
    slug: "prosjektstyring",
  },
  {
    title: "CRM og salgsautomatisering for energisektoren",
    challenge:
      "Manuell prospektering og oppfølging av leads tok for mye tid. Salgsteamet brukte regneark, og viktige leads falt mellom stolene.",
    solution:
      "Argon Solutions bygget Argon CRM med automatisert prospektering fra 6 lead-kilder, AI-drevet lead scoring via Claude AI, og integrasjon med PandaDoc for tilbudsgenerering. Systemet kjører daglige automatiseringssweep som fanger nye leads, beriker data og scorer dem basert på relevans.",
    tech: ["Next.js", "Tailwind CSS", "Claude AI", "PandaDoc API"],
    results: [
      "Automatisk innhenting fra 6 lead-kilder",
      "AI-drevet lead scoring med Claude",
      "Automatiske oppfølgings-e-poster og tilbud",
    ],
    slug: "crm",
  },
  {
    title: "AI-drevet dokumentbehandling (PDF Intelligence)",
    challenge:
      "Bransjen håndterer store mengder dokumenter: fakturaer, sikkerhetsdatablader, sertifikater og rapporter. Manuell gjennomgang er tidkrevende og feilutsatt.",
    solution:
      "Argon Docs bruker Claude AI til å ekstrahere strukturerte data fra PDF-dokumenter. Brukeren laster opp et dokument og får tilbake strukturerte felt på sekunder, uten manuell inntasting.",
    tech: ["Next.js", "Claude AI", "Anthropic API", "TypeScript"],
    results: [
      "Sekunder per dokument i stedet for minutter",
      "Støtte for fakturaer, sertifikater og HMS-dokumenter",
      "Eliminerer manuell inntasting og reduserer feil",
    ],
    slug: "docs",
  },
  {
    title: "Risikostyring med HAZOP og bow-tie analyse",
    challenge:
      "Risikostyringsverktøy for olje og gass er ofte komplekse og dyre. Små og mellomstore selskaper trenger en enklere løsning som fortsatt dekker HAZOP, HAZID og bow-tie analyser.",
    solution:
      "Argon RSA gir en intuitiv webapplikasjon for risikostyring med støtte for HAZOP, HAZID og bow-tie analyser. Brukere kan spore risikoer, tiltak og lessons learned på tvers av prosjekter.",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
    results: [
      "Enkel risikostyring uten komplekse enterprise-verktøy",
      "Sporbarhet av tiltak og lessons learned",
      "Tilgjengelig fra felt og kontor via nettleser",
    ],
    slug: "risk",
  },
  {
    title: "Nettleserautomatisering for sertifikathåndtering",
    challenge:
      "En leverandørbedrift brukte 6 timer per uke på å manuelt logge inn på leverandørportaler, laste ned sertifikater og oppdatere interne systemer.",
    solution:
      "Argon Solutions utviklet en AI-agent med Playwright som automatisk logger inn på portaler, navigerer til riktig side, laster ned sertifikater og oppdaterer kundens system. Agenten kjøres automatisk og varsler ved avvik.",
    tech: ["Playwright", "Node.js", "Claude AI"],
    results: [
      "Fra 6 timer til 3 minutter per uke",
      "47 leverandører behandlet automatisk",
      "Automatisk varsling ved utgående sertifikater",
    ],
    slug: "ai-agent",
  },
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Argon Solutions prosjektreferanser",
  description:
    "Prosjekter og case studies fra Argon Solutions: skreddersydd software for olje- og gassindustrien i Stavanger, Norge.",
  numberOfItems: prosjekter.length,
  itemListElement: prosjekter.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.challenge + " " + p.solution,
      creator: {
        "@type": "Organization",
        "@id": "https://argonsolutions.no/#organization",
        name: "Argon Solutions",
      },
    },
  })),
};

export default function ReferanserPage() {
  // Safe: jsonLdScript is a static JSON object from server-side code, not user input
  const jsonLdScript = JSON.stringify(caseStudyJsonLd);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        // Safe: caseStudyJsonLd is server-side static data, not user-supplied
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          Referanser og prosjekter
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Argon Solutions har bygget skreddersydde løsninger for olje- og
          gassindustrien i Norge. Her er et utvalg av prosjektene vi har levert.
        </p>

        <div className="mt-16 space-y-12">
          {prosjekter.map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl border border-gray-100 bg-white p-8 md:p-10"
            >
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
                {p.title}
              </h2>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Utfordring
                  </h3>
                  <p className="mt-2 text-text-light leading-relaxed">
                    {p.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Løsning
                  </h3>
                  <p className="mt-2 text-text-light leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Resultater
                </h3>
                <ul className="mt-2 space-y-1">
                  {p.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 text-sm text-text-light"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-surface p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Har du et lignende prosjekt?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-light">
            Argon Solutions bygger skreddersydd software for olje- og
            gassindustrien. Book en gratis konsultasjon for å diskutere ditt
            prosjekt.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </div>
  );
}
