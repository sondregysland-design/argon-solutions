import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Argon Solutions utvikler skreddersydde webapplikasjoner og dashboards for energisektoren. Mobilvenlige løsninger, sanntids datavisualisering og offline-støtte for feltarbeid.";

export const metadata: Metadata = {
  title: "Skreddersydd Software: Applikasjoner for energisektoren",
  description,
  keywords: ["skreddersydd software", "webapplikasjoner energisektoren", "dashboard olje gass", "software Stavanger"],
  alternates: { canonical: "/tjenester/skreddersydd-software" },
  openGraph: {
    title: "Skreddersydd Software: Applikasjoner for energisektoren",
    description,
    url: "/tjenester/skreddersydd-software",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  name: "Skreddersydd Software for olje og gass — Argon Solutions, Stavanger",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvem lager skreddersydd software for olje og gass i Stavanger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions AS i Stavanger lager skreddersydd software for olje- og gassindustrien. Selskapet spesialiserer seg på webapplikasjoner, dashboards, prosjektstyringsverktøy og offline-løsninger for feltarbeid, bygget med Next.js, Supabase og Claude AI.",
      },
    },
    {
      "@type": "Question",
      name: "Hva koster skreddersydd software for energisektoren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions tilbyr gratis første måned for alle prosjekter. Etter pilotperioden avhenger prisen av prosjektomfang. Et typisk MVP tar 4-8 uker å utvikle. Kontakt post@argonsolutions.no eller ring +47 452 09 979 for et uforpliktende estimat.",
      },
    },
    {
      "@type": "Question",
      name: "Kan skreddersydd software fungere offline på offshore-plattformer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Argon Solutions bygger progressive web-applikasjoner (PWA) med offline-støtte, slik at feltarbeidere kan registrere data uten internettilgang. Data synkroniseres automatisk når tilkoblingen gjenopprettes.",
      },
    },
  ],
};

const features = [
  {
    title: "Webapplikasjoner og dashboards",
    desc: "Skreddersydde webapplikasjoner med sanntidsdata, interaktive dashboards og intuitivt brukergrensesnitt tilpasset olje- og gassindustriens behov.",
  },
  {
    title: "Mobilvenlige løsninger",
    desc: "Responsivt design som fungerer like godt på nettbrett og mobil som på desktop. Viktig for feltarbeidere med tilgang på farten.",
  },
  {
    title: "Sanntids datavisualisering",
    desc: "Live oppdateringer fra sensorer, databaser og API-er visualisert i oversiktlige grafer og tabeller.",
  },
  {
    title: "Offline-støtte for feltarbeid",
    desc: "Progressive Web Apps med offline-funksjonalitet, slik at feltarbeidere kan jobbe uten internettforbindelse.",
  },
];

const useCases = [
  { title: "Prosjektstyring", desc: "Systemer for å holde oversikt over offshore-prosjekter, milepæler, ressurser og kostnader i sanntid." },
  { title: "Dokumenthåndtering", desc: "Strukturerte systemer for sertifikater, HMS-dokumentasjon og tekniske tegninger med versjonskontroll." },
  { title: "Felt-applikasjoner", desc: "Mobile applikasjoner for inspeksjoner, rapportering og datainnsamling direkte i felt." },
];

const steps = [
  { step: "1", title: "Behovsanalyse", desc: "Vi kartlegger eksisterende systemer, smertepunkter og ønskede arbeidsflyter." },
  { step: "2", title: "Prototyp", desc: "Rask prototyp for å validere design og funksjonalitet før full utvikling." },
  { step: "3", title: "Iterativ utvikling", desc: "Ukentlige demoer og tilbakemelding gjennom hele utviklingsprosessen." },
  { step: "4", title: "Lansering", desc: "Grundig testing og produksjonslansering med opplæring av brukere." },
];

export default function SkreddersyddSoftwarePage() {
  return (
    <div className="py-20">
      {/* Safe: both objects are static server-side constants, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
          <Link href="/tjenester" className="hover:text-primary">Tjenester</Link>
          <span>/</span>
          <span className="text-text">Skreddersydd Software</span>
        </nav>

        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          Skreddersydd Software
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi utvikler spesialtilpassede applikasjoner som løser dine unike utfordringer. Fra enkle dashboards til komplette arbeidsstyringssystemer. Vi bygger det energisektoren faktisk trenger.
        </p>

        {/* Features */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-100 p-6">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h2 className="font-semibold text-text">{f.title}</h2>
                  <p className="mt-1 text-sm text-text-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Typiske bruksområder
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-xl bg-surface p-6">
                <h3 className="font-semibold text-text">{u.title}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Slik jobber vi
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {steps.map((s) => (
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

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Klar for en gratis konsultasjon?
          </h2>
          <p className="mt-3 text-text-light">
            Fortell oss om ditt behov, så gir vi deg en uforpliktende vurdering.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            Kontakt oss for en gratis konsultasjon
          </Link>
        </div>
      </div>
    </div>
  );
}
