import type { Metadata } from "next";

const description =
  "Argon Solutions er et AI-byrå i Stavanger grunnlagt av ingeniører med erfaring fra olje- og gassindustrien. Vi leverer AI-tjenester, Claude Code-oppsett og skreddersydd software for energisektoren.";

export const metadata: Metadata = {
  title: "Om Argon Solutions: Softwareselskap i Stavanger for olje og gass",
  description,
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: "Om Argon Solutions: Softwareselskap i Stavanger for olje og gass",
    description,
    url: "/om-oss",
  },
};

const verdier = [
  {
    title: "Bransjekunnskap",
    description: "Vi kommer fra olje og gass-sektoren selv. Vi forstår kravene til sikkerhet, compliance og pålitelighet fordi vi har jobbet med det.",
  },
  {
    title: "Kvalitet",
    description: "Vi leverer robust software som tåler produksjon. Ingen snarveier, ingen halvferdige løsninger.",
  },
  {
    title: "Nærhet",
    description: "Vi er to personer. Dere snakker direkte med de som bygger. Ingen mellomledd, ingen support-køer.",
  },
];

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Om Argon Solutions",
  url: "https://argonsolutions.no/om-oss",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#company-summary", "#technology-stack", "#key-facts"],
  },
};

export default function OmOssPage() {
  const speakableScript = JSON.stringify(speakableJsonLd);

  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: speakableScript }} />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">Om Argon Solutions</h1>
        <p id="company-summary" className="mt-4 max-w-2xl text-lg text-text-light">
          Argon Solutions er et norsk softwareselskap basert i Stavanger som
          spesialiserer seg på skreddersydd software, CRM-systemer,
          systemintegrasjon og AI-agenter for olje- og gassindustrien.
        </p>

        {/* Hvem vi er */}
        <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Hvem vi er</h2>
          <p className="mt-4 text-text-light">
            Argon Solutions ble grunnlagt i 2024 av Sondre Gysland, ingeniør
            med erfaring fra olje- og gassindustrien på norsk kontinentalsokkel. Med bakgrunn
            fra offshore prosjektstyring, subsea-operasjoner og ROV-systemer har vi sett på
            nært hold hvordan bransjen sliter med utdaterte systemer, manuelle
            prosesser og verktøy som ikke snakker sammen.
          </p>
          <p className="mt-3 text-text-light">
            I stedet for å klage over det, bestemte vi oss for å fikse det.
            Vi kombinerer ingeniørbakgrunnen vår med moderne teknologi som
            AI-agenter, automatisering og skreddersydd software for å
            gjøre hverdagen enklere for selskaper i energisektoren. Vi har
            levert prosjekter innen prosjektstyring, CRM, AI-dokumentbehandling,
            risikostyring og nettleserautomatisering for selskaper i olje og gass.
          </p>
        </div>

        {/* AI-operativsystem */}
        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Hvorfor AI-operativsystem?
          </h2>
          <p className="mt-4 text-text-light">
            Vi har implementert Claude Code-miljøer for bedrifter i energisektoren.
            Vår tilnærming: Vi setter opp et komplett AI-operativsystem:
            skreddersydde skills, MCP-servere, og arbeidsflyter, slik at teamet
            ditt får en AI-assistent som faktisk forstår deres systemer, data og
            prosesser.
          </p>
          <p className="mt-3 text-text-light">
            Som AI-byrå i Stavanger kombinerer vi dyp bransjekunnskap fra olje og
            gass med ekspertise innen moderne AI-tjenester. Det betyr at vi ikke
            bare setter opp teknologien. Vi forstår konteksten den skal brukes i.
          </p>
        </div>

        {/* Teknologisk ekspertise */}
        <div id="technology-stack" className="mt-16 rounded-xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Teknologisk ekspertise</h2>
          <p className="mt-4 text-text-light">
            Vi bygger med moderne, velprøvd teknologi. Våre løsninger bruker
            Next.js, React og Tailwind CSS for frontend, Supabase og PostgreSQL
            for backend og datalagring, og Claude AI (Anthropic) for
            AI-funksjonalitet som rapportgenerering, lead scoring og
            dokumentanalyse.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Claude AI", "Playwright", "Vercel", "Node.js"].map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verdier */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Hva vi står for</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {verdier.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-text-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nøkkelfakta */}
        <div id="key-facts" className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Nøkkelfakta</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-text">Selskap</dt>
              <dd className="mt-1 text-text-light">Argon Solutions AS</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text">Lokasjon</dt>
              <dd className="mt-1 text-text-light">Stavanger, Rogaland, Norge</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text">Grunnlagt</dt>
              <dd className="mt-1 text-text-light">2024</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text">Bransje</dt>
              <dd className="mt-1 text-text-light">AI-tjenester og software for energisektoren</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text">Spesialområder</dt>
              <dd className="mt-1 text-text-light">Skreddersydd software, CRM, systemintegrasjon, AI-agenter</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-text">Kontakt</dt>
              <dd className="mt-1 text-text-light">post@argonsolutions.no · +47 452 09 979</dd>
            </div>
          </dl>
        </div>

        {/* Teknologipartnere */}
        <div className="mt-16 rounded-xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Teknologi vi bygger med</h2>
          <p className="mt-4 text-text-light">
            Vi bruker velprøvd, moderne teknologi fra ledende leverandører.
            Alle våre løsninger kjører på skalerbar skyinfrastruktur med
            enterprise-grade sikkerhet.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">Anthropic (Claude AI)</h3>
              <p className="mt-1 text-xs text-text-light">AI-drevet lead scoring, dokumentanalyse og rapportgenerering</p>
            </div>
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">Vercel</h3>
              <p className="mt-1 text-xs text-text-light">Enterprise hosting med edge-nettverk og automatisk deployment</p>
            </div>
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">Supabase</h3>
              <p className="mt-1 text-xs text-text-light">Open-source backend med PostgreSQL, autentisering og sanntids-synk</p>
            </div>
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">Next.js / React</h3>
              <p className="mt-1 text-xs text-text-light">Industriledende frontend-rammeverk for raske, SEO-vennlige webapper</p>
            </div>
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">Playwright</h3>
              <p className="mt-1 text-xs text-text-light">Nettleserautomatisering for AI-agenter og testing</p>
            </div>
            <div className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">PandaDoc</h3>
              <p className="mt-1 text-xs text-text-light">Automatisert tilbuds- og kontraktgenerering</p>
            </div>
          </div>
        </div>

        {/* Hvorfor Argon */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Hvorfor Argon?</h2>
          <p className="mt-4 text-text-light">
            Argon er en edelgass. Stabil, pålitelig og essensiell i
            industrielle prosesser. Akkurat som gassen, leverer vi løsninger
            som bare virker. Stabilt, trygt og tilpasset deres behov.
          </p>
        </div>
      </div>
    </div>
  );
}
