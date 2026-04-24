import type { Metadata } from "next";

const description =
  "Argon Solutions leverer skreddersydd software, CRM-systemer, systemintegrasjon og AI-agenter for olje- og gassindustrien i Stavanger, Norge.";

export const metadata: Metadata = {
  title: "Tjenester — Software for olje og gass",
  description,
  alternates: { canonical: "/tjenester" },
  openGraph: {
    title: "Tjenester — Software for olje og gass",
    description,
    url: "/tjenester",
  },
};

function ClaudeCodeIllustration() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-200 bg-[#1e1e2e] p-0 font-mono text-sm shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-gray-400">claude — argon-solutions</span>
      </div>
      {/* Terminal content */}
      <div className="flex-1 space-y-3 p-4 text-[13px] leading-relaxed">
        <div>
          <span className="text-gray-500">$</span>{" "}
          <span className="text-[#cba6f7]">claude</span>{" "}
          <span className="text-gray-300">Build a dashboard for offshore job tracking</span>
        </div>
        <div className="space-y-1.5">
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Creating project structure...
          </div>
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Setting up Supabase integration
          </div>
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Building real-time data pipeline
          </div>
          <div className="text-[#89b4fa]">
            <span className="mr-1.5">{">"}</span>Generating components...
          </div>
        </div>
        <div className="mt-2 rounded border border-gray-700 bg-[#181825] p-3">
          <div className="text-gray-500">// src/components/JobTracker.tsx</div>
          <div>
            <span className="text-[#cba6f7]">export function</span>{" "}
            <span className="text-[#89b4fa]">JobTracker</span>
            <span className="text-gray-400">() {"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-[#cba6f7]">const</span>{" "}
            <span className="text-gray-300">jobs</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-[#89b4fa]">useRealtimeJobs</span>
            <span className="text-gray-400">()</span>
          </div>
          <div className="text-gray-400">{"}"}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#a6e3a1]" />
          <span className="text-gray-400">Ready to deploy</span>
        </div>
      </div>
    </div>
  );
}

function AIAgentIllustration() {
  return (
    <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="w-full max-w-[300px] space-y-3">
        {/* Trigger */}
        <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
          <div className="text-xs font-medium text-primary">Oppgave</div>
          <div className="text-[10px] text-text-light">&quot;Hent sertifikater fra leverandørportal&quot;</div>
        </div>

        <div className="flex justify-center">
          <div className="h-4 w-0.5 bg-primary-light/40" />
        </div>

        {/* Agent hub */}
        <div className="flex justify-center">
          <div className="rounded-xl border-2 border-primary bg-white px-5 py-4 text-center shadow-md">
            <div className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.411a2.25 2.25 0 01-2.133 1.589H8.603a2.25 2.25 0 01-2.133-1.589L5 14.5m14 0H5" />
              </svg>
              <div className="text-sm font-bold text-primary">AI Agent</div>
            </div>
            <div className="mt-1 flex justify-center gap-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1]" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.2s]" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.4s]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-4 w-0.5 bg-primary-light/40" />
        </div>

        {/* Steps */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
            <svg className="h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-green-800">Åpnet nettleser, logget inn</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
            <svg className="h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-green-800">47 leverandører behandlet</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
            <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-blue-300 border-t-blue-600" />
            <span className="text-xs text-blue-800">Eksporterer rapport...</span>
          </div>
        </div>

        {/* Time saved */}
        <div className="rounded-lg bg-primary/5 px-4 py-2 text-center">
          <span className="text-xs font-medium text-primary">3 min i stedet for 6 timer manuelt</span>
        </div>
      </div>
    </div>
  );
}

function ClaudeStartupIllustration() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-200 bg-[#1a1b26] p-0 font-mono text-sm shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-gray-400">PowerShell — claude</span>
      </div>
      {/* Terminal content */}
      <div className="flex-1 space-y-4 p-5 text-[13px] leading-relaxed">
        <div>
          <span className="text-[#7aa2f7]">PS C:\Users\dev&gt;</span>{" "}
          <span className="text-gray-300">claude</span>
        </div>
        <div className="flex gap-6">
          {/* Mascot */}
          <div className="text-[11px] leading-[1.1]">
            <div className="text-amber-600">{"  ╭──────╮"}</div>
            <div className="text-amber-600">{"  │"}<span className="text-white">▪</span>{"  "}<span className="text-white">▪</span>{"│"}</div>
            <div className="text-amber-600">{"  │  ──  │"}</div>
            <div className="text-amber-600">{"  ╰┬────┬╯"}</div>
            <div className="text-amber-600">{"   │    │"}</div>
          </div>
          {/* Version info */}
          <div className="space-y-1">
            <div className="text-lg font-bold text-gray-200">Claude Code <span className="text-gray-500">v2.1.86</span></div>
            <div className="text-gray-400">Opus 4.6 (1M context) · Claude Max</div>
            <div className="text-gray-500">~/project</div>
          </div>
        </div>
        <div className="text-[#7aa2f7]">
          ↑ Opus now defaults to 1M context · 5x more room
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-300">{">"}</span>
          <div className="h-4 w-1.5 animate-pulse bg-gray-400" />
        </div>
        {/* Status bar */}
        <div className="mt-auto flex items-center gap-3 pt-4 text-[11px]">
          <span className="text-gray-500">[Opus 4.6 (1M context)]</span>
          <div className="h-1.5 flex-1 rounded-full bg-gray-700">
            <div className="h-1.5 w-[3%] rounded-full bg-[#7aa2f7]" />
          </div>
          <span className="text-gray-500">0% context</span>
        </div>
      </div>
    </div>
  );
}

const tjenester = [
  {
    id: "skreddersydd-software",
    title: "Skreddersydd Software",
    description:
      "Vi utvikler spesialtilpassede applikasjoner som løser deres unike utfordringer. Fra dashboards og overvåkningssystemer til komplett arbeidsflytstyring, vi bygger det dere trenger.",
    features: [
      "Webapplikasjoner og dashboards",
      "Mobilvenlige løsninger",
      "Sanntids datavisualisering",
      "Offline-støtte for feltarbeid",
    ],
  },
  {
    id: "systemintegrasjon",
    title: "Systemintegrasjon",
    description:
      "Vi kobler sammen eksisterende systemer og bygger skreddersydde integrasjoner som gjør at data flyter automatisk mellom plattformer. API-utvikling, AI-drevet rapportering og automatiserte arbeidsflyter.",
    features: [
      "API-utvikling og integrasjon",
      "AI-drevet rapportgenerering",
      "Automatisk dataflyt mellom systemer",
      "Kobling mot eksisterende databaser",
    ],
  },
  {
    id: "ai-agenter",
    title: "AI-agenter",
    description:
      "Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser. Spar timer hver dag på manuelt arbeid.",
    features: [
      "Nettleserautomatisering",
      "Automatisk datainnhenting",
      "Skjemautfylling og rapportering",
      "Integrasjon med eksisterende systemer",
    ],
  },
  {
    id: "claude-code",
    title: "Claude Code opplæring",
    description:
      "Lær å bruke Claude Code for å akselerere utviklingen. Vi tilbyr opplæring og workshops som gjør teamet deres mer produktive med AI-assistert koding.",
    features: [
      "Hands-on workshops",
      "Tilpasset opplæring for deres stack",
      "Best practices og arbeidsflyter",
      "Integrasjon i eksisterende utviklingsprosesser",
    ],
  },
];

const illustrations = [
  <ClaudeCodeIllustration key="claude" />,
  <div key="systemintegrasjon" className="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
    <img
      src="/products/ai-report-system.png"
      alt="AI rapportgenerering — dataflyt fra database via API og ChatGPT til Word-dokument"
      className="w-full rounded-lg"
    />
  </div>,
  <AIAgentIllustration key="ai-agent" />,
  <div key="claude-screenshot" className="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-gray-200 bg-[#1a1b26] p-4 shadow-lg">
    <img src="/products/claude-code-preview.png" alt="Claude Code terminal" className="rounded-lg" />
  </div>,
];

const faqs = [
  {
    question: "Hvem lager skreddersydd software for olje og gass i Norge?",
    answer:
      "Argon Solutions er et Stavanger-basert softwareselskap som spesialiserer seg på skreddersydd software for olje- og gassindustrien. Vi utvikler webapplikasjoner, dashboards, CRM-systemer, systemintegrasjoner og AI-agenter tilpasset energisektorens behov.",
  },
  {
    question: "Hva er Argon Solutions?",
    answer:
      "Argon Solutions er et norsk teknologiselskap basert i Stavanger, grunnlagt av ingeniører med erfaring fra olje- og gassindustrien. Vi bygger skreddersydd software, CRM- og salgsautomatisering, systemintegrasjoner og AI-agenter for små og mellomstore bedrifter i energisektoren.",
  },
  {
    question: "Hvilke tjenester tilbyr Argon Solutions?",
    answer:
      "Argon Solutions tilbyr fire hovedtjenester: (1) Skreddersydd software — webapplikasjoner, dashboards og mobilvenlige løsninger. (2) CRM og salgsautomatisering — automatisert prospektering, AI lead scoring og salgspipeline. (3) Systemintegrasjon — API-utvikling, AI-drevet rapportgenerering og dataflyt mellom systemer. (4) AI-agenter — nettleserautomatisering, datainnhenting og repetitive prosesser.",
  },
  {
    question: "Kan Argon Solutions bygge CRM og automatiseringsverktøy for energibransjen?",
    answer:
      "Ja. Argon Solutions har utviklet et komplett CRM-system med automatisert prospektering, AI-drevet lead scoring via Claude, PandaDoc-integrasjon for tilbud, og daglig automasjonssweep. Systemet håndterer 6 lead-kilder, duplikatdeteksjon, og automatiske oppfølgings-e-poster.",
  },
  {
    question: "Hvor holder Argon Solutions til?",
    answer:
      "Argon Solutions holder til i Stavanger, Norge — Norges energihovedstad. Vi betjener kunder i hele Norge med fokus på olje- og gassindustrien og energisektoren.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description:
    "Argon Solutions leverer skreddersydd software, CRM-systemer, systemintegrasjon og AI-agenter for olje- og gassindustrien i Norge.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjenester",
    itemListElement: tjenester.map((t) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: t.title,
        description: t.description,
      },
    })),
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Slik kommer du i gang med skreddersydd software fra Argon Solutions",
  description:
    "Steg-for-steg prosess for å få utviklet skreddersydd software for olje- og gassindustrien med Argon Solutions.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book en gratis konsultasjon",
      text: "Kontakt Argon Solutions via kontaktskjemaet eller e-post post@argonsolutions.no for å diskutere ditt behov.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Behovsanalyse og kravspesifikasjon",
      text: "Vi kartlegger eksisterende systemer, arbeidsprosesser og smertepunkter for å definere løsningen.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Utvikling med løpende demo",
      text: "Vi bygger løsningen iterativt med ukentlige demoer slik at dere ser fremdriften og kan gi tilbakemelding.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Testing og lansering",
      text: "Grundig testing av funksjonalitet, sikkerhet og ytelse før produksjonslansering.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Gratis første måned",
      text: "Dere prøver løsningen gratis den første måneden uten forpliktelse. Vi justerer basert på tilbakemelding.",
    },
  ],
};

const allTjenesterJsonLd = [faqJsonLd, serviceJsonLd, howToJsonLd];

export default function TjenesterPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allTjenesterJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">Våre tjenester</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Argon Solutions leverer teknologiløsninger skreddersydd for energisektoren i Norge.
          Her er hva vi kan hjelpe med.
        </p>

        <div className="mt-16 space-y-16">
          {tjenester.map((t, i) => (
            <div
              id={t.id}
              key={t.title}
              className={`scroll-mt-24 flex flex-col gap-8 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">{t.title}</h2>
                <p className="mt-3 text-text-light">{t.description}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                {illustrations[i]}
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Slik kommer du i gang
          </h2>
          <p className="mt-4 max-w-2xl text-text-light">
            Fra første samtale til ferdig løsning — slik jobber Argon Solutions.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-5">
            {[
              { step: "1", title: "Gratis konsultasjon", desc: "30-minutters samtale for å forstå deres behov og utfordringer." },
              { step: "2", title: "Behovsanalyse", desc: "Vi kartlegger systemer, prosesser og smertepunkter." },
              { step: "3", title: "Utvikling", desc: "Iterativ utvikling med ukentlige demoer og tilbakemelding." },
              { step: "4", title: "Testing", desc: "Grundig testing av funksjonalitet, sikkerhet og ytelse." },
              { step: "5", title: "Gratis første måned", desc: "Prøv løsningen uten forpliktelse. Vi justerer basert på erfaring." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-text">{s.title}</h3>
                <p className="mt-1 text-xs text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Ofte stilte spørsmål
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
