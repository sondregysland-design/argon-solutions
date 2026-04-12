"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { products, automations } from "@/lib/products";
import { AutomationCard } from "@/components/AutomationCard";
import Link from "next/link";

const services = [
  {
    title: "Skreddersydd Software",
    expandable: "software" as const,
    description:
      "Utvikling av spesialtilpassede applikasjoner som løser deres unike utfordringer i energisektoren.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Systemintegrasjon",
    expandable: "integration" as const,
    description:
      "Sømløs kobling mellom eksisterende systemer. API-utvikling, dataflyt og automatisering.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "AI-agenter",
    description:
      "Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.411a2.25 2.25 0 01-2.133 1.589H8.603a2.25 2.25 0 01-2.133-1.589L5 14.5m14 0H5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Års erfaring i olje og gass" },
  { value: "100%", label: "Norsk" },
  { value: "0 kr", label: "Første måneden" },
];

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <>
      <Hero />

      {/* Tjenester */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-medium text-text">
            Hva vi tilbyr
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) =>
              s.expandable ? (
                <button
                  key={s.title}
                  type="button"
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === s.expandable ? null : s.expandable
                    )
                  }
                  className="text-left"
                >
                  <ServiceCard {...s} />
                </button>
              ) : (
                <ServiceCard key={s.title} {...s} />
              )
            )}
          </div>

          {/* Expandable Skreddersydd Software section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "software" ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 space-y-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                    Prosjektstyring for offshore
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    Vi bygger komplette webapplikasjoner tilpasset deres behov.
                    Her er et eksempel — et prosjektstyringssystem med rollebasert
                    tilgang, lagerstyring, AI-rapportgenerering og sanntids
                    verkstedlogg.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Rollebasert tilgang (leder & verksted)",
                      "AI-genererte prosjektrapporter",
                      "Lagerstyring med automatiske bestillinger",
                      "Sanntids verkstedlogg og fremdrift",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="/kontakt"
                      className="inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                    >
                      Ta kontakt
                    </Link>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                    <iframe
                      src="https://project-dashboard-psi-gilt.vercel.app/login"
                      title="Prosjektstyring — demo"
                      className="h-[500px] w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-text-light">
                    Prøv live demo — velg en rolle og utforsk systemet
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Systemintegrasjon section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "integration" ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                    AI-drevet systemintegrasjon
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    Vi kobler sammen eksisterende systemer og bygger skreddersydde
                    integrasjoner som gjør at data flyter automatisk mellom plattformer.
                    Diagrammet viser et eksempel der prosjektdata hentes fra databasen,
                    forbedres av ChatGPT API, og genereres som en ferdig Word-rapport.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "API-utvikling og integrasjon",
                      "AI-drevet rapportgenerering",
                      "Automatisk dataflyt mellom systemer",
                      "Kobling mot eksisterende databaser",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="/kontakt"
                      className="inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                    >
                      Ta kontakt
                    </Link>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="/products/ai-report-system.png"
                    alt="AI rapportgenerering — dataflyt fra database via API og ChatGPT til Word-dokument"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produkter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-medium text-text">
            Våre produkter
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Se noen av løsningene vi har bygget for olje og gass-næringen.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/produkter"
              className="text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              Se alle produkter &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Automatisering */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-medium text-text">
            Automatisering
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-light">
            Spar tid med ferdige automatiseringsløsninger bygget for olje og
            gass-næringen. Våre automatiseringer håndterer repetitive oppgaver
            slik at teamet ditt kan fokusere på det som gir verdi.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {automations.map((a) => (
              <AutomationCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistikk */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-12 px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-text-light">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Dark section for contrast */}
      <section className="bg-primary-dark py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-white">
            Klar for å modernisere systemene?
          </h2>
          <p className="mt-3 text-blue-200">
            Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50"
          >
            Ta kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
