import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Argon Solutions kobler sammen eksisterende systemer og bygger skreddersydde API-integrasjoner for energisektoren. Automatisk dataflyt, AI-drevet rapportering og effektive arbeidsflyter.";

export const metadata: Metadata = {
  title: "Systemintegrasjon — API-utvikling og dataflyt",
  description,
  keywords: ["systemintegrasjon", "API-utvikling", "dataflyt automatisering", "integrasjon energisektoren"],
  alternates: { canonical: "/tjenester/systemintegrasjon" },
  openGraph: {
    title: "Systemintegrasjon — API-utvikling og dataflyt",
    description,
    url: "/tjenester/systemintegrasjon",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "System Integration",
  name: "Systemintegrasjon",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const features = [
  {
    title: "API-utvikling og integrasjon",
    desc: "Vi bygger robuste REST- og GraphQL-APIer som kobler dine systemer mot tredjepartsplattformer, leverandørportaler og bransjestandard-systemer.",
  },
  {
    title: "AI-drevet rapportgenerering",
    desc: "Automatisk generering av Word- og PDF-rapporter fra eksisterende data med Claude AI som analyserer og formatterer innholdet.",
  },
  {
    title: "Automatisk dataflyt mellom systemer",
    desc: "Sett opp automatiserte pipelines som synkroniserer data mellom ERP, CRM, regneark og andre systemer uten manuell inngripen.",
  },
  {
    title: "Kobling mot eksisterende databaser",
    desc: "Vi integrerer mot SQL-databaser, SAP, SharePoint, Maximo og andre legacy-systemer som allerede finnes i din organisasjon.",
  },
];

const commonIntegrations = [
  "SAP og ERP-systemer",
  "SharePoint og Microsoft 365",
  "Maximo og vedlikeholdssystemer",
  "PandaDoc og e-signering",
  "Leverandørportaler",
  "Offentlige registre og databaser",
];

export default function SystemintegrasjonPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
          <Link href="/tjenester" className="hover:text-primary">Tjenester</Link>
          <span>/</span>
          <span className="text-text">Systemintegrasjon</span>
        </nav>

        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          Systemintegrasjon
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi kobler sammen eksisterende systemer og bygger skreddersydde integrasjoner som gjør at data flyter automatisk mellom plattformer — slik at teamet ditt slipper manuelt dobbelarbeid.
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

        {/* Common integrations */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Vanlige integrasjoner
          </h2>
          <p className="mt-3 text-text-light">
            Vi har erfaring med integrasjoner mot disse og mange andre plattformer:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commonIntegrations.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-surface p-4">
                <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Har du systemer som burde snakke sammen?
          </h2>
          <p className="mt-3 text-text-light">
            Kontakt oss for en gratis vurdering av integrasjonsmulighetene i din organisasjon.
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
