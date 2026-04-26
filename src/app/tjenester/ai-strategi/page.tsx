import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Argon Solutions tilbyr AI-strategi og rådgivning for energisektoren. AI readiness-vurdering, automatiseringskartlegging, ROI-modellering og implementeringsveikart for beslutningstakere.";

export const metadata: Metadata = {
  title: "AI-strategi og rådgivning — Veikart for AI-implementering",
  description,
  keywords: ["AI strategi", "AI rådgivning", "AI konsulent", "AI implementering energisektoren", "AI veikart"],
  alternates: { canonical: "/tjenester/ai-strategi" },
  openGraph: {
    title: "AI-strategi og rådgivning — Veikart for AI-implementering",
    description,
    url: "/tjenester/ai-strategi",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Strategy and Advisory",
  name: "AI-strategi og rådgivning",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const offerings = [
  {
    title: "AI readiness-vurdering",
    desc: "En strukturert gjennomgang av din organisasjons nåværende systemer, data og prosesser for å kartlegge beredskapen for AI-implementering.",
  },
  {
    title: "Arbeidsflyt- og automatiseringskartlegging",
    desc: "Identifisering av konkrete prosesser og oppgaver der AI og automatisering gir størst effekt og raskest ROI.",
  },
  {
    title: "ROI-modellering",
    desc: "Konkrete beregninger av forventet inntjening, tidsbesparelse og kostnadsreduksjon fra AI-investeringer — slik at ledelsen kan ta datadrevne beslutninger.",
  },
  {
    title: "Implementeringsveikart",
    desc: "En prioritert plan med konkrete steg, tidslinje og ressursbehov for å gå fra nåsituasjon til full AI-implementering.",
  },
  {
    title: "Løpende rådgivning",
    desc: "Månedlig eller kvartalsvis rådgivning for å følge opp implementering, justere kurs og holde seg oppdatert på nye AI-muligheter.",
  },
];

const targetGroups = [
  { role: "CEO og daglig leder", desc: "Ønsker forståelse for AI-mulighetene og en klar plan for konkurransedyktighet." },
  { role: "CTO og IT-leder", desc: "Trenger en teknisk vurdering av hvilke AI-verktøy som passer i eksisterende infrastruktur." },
  { role: "Driftsleder", desc: "Vil identifisere hvilke operasjonelle prosesser som kan automatiseres for å frigjøre kapasitet." },
];

export default function AIStrategiPage() {
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
          <span className="text-text">AI-strategi og rådgivning</span>
        </nav>

        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          AI-strategi og rådgivning
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          For beslutningstakere som ønsker en strukturert tilnærming til AI — ikke bare buzzwords, men konkrete veikart og ROI-beregninger tilpasset energisektoren.
        </p>

        {/* Offerings */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Hva vi tilbyr
          </h2>
          <div className="mt-6 space-y-4">
            {offerings.map((o, i) => (
              <div key={o.title} className="rounded-xl border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text">{o.title}</h3>
                    <p className="mt-1 text-sm text-text-light leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who is this for */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Hvem er dette for?
          </h2>
          <p className="mt-3 text-text-light">
            AI-strategi og rådgivning er spesielt relevant for:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {targetGroups.map((t) => (
              <div key={t.role} className="rounded-xl bg-surface p-6">
                <h3 className="font-semibold text-text">{t.role}</h3>
                <p className="mt-2 text-sm text-text-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Start med en gratis AI-vurdering
          </h2>
          <p className="mt-3 text-text-light">
            Book en 30-minutters samtale der vi gir deg en innledende vurdering av AI-mulighetene i din organisasjon.
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
