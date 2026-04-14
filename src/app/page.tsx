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
    title: "CRM & Salgsautomatisering",
    expandable: "crm" as const,
    description:
      "Automatisert prospektering, databerikelse og salgspipeline. Fra lead til kunde uten manuelt arbeid.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
    expandable: "ai-agents" as const,
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <button
                key={s.title}
                type="button"
                onClick={() =>
                  setExpandedSection(
                    expandedSection === s.expandable ? null : s.expandable
                  )
                }
                className="text-left cursor-pointer"
              >
                <ServiceCard {...s} />
              </button>
            ))}
          </div>

          {/* Expandable Skreddersydd Software section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "software" ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              {/* Architecture diagram */}
              <div className="mb-10">
                <img
                  src="/products/dashboard-architecture.png"
                  alt="Arkitekturdiagram — Project Dashboard med rollebasert tilgang, delt database, AI-rapportgenerering"
                  className="mx-auto w-full max-w-2xl rounded-xl"
                />
              </div>

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

          {/* Expandable CRM & Salgsautomatisering section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "crm" ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              {/* Section intro */}
              <div className="mb-10 space-y-3">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                  CRM med full salgsautomatisering
                </h3>
                <p className="max-w-2xl text-text-light leading-relaxed">
                  Et komplett CRM-system med automatisert prospektering,
                  AI-drevet lead scoring, og en salgspipeline som driver seg
                  selv — fra første scrape til signert kunde.
                </p>
              </div>

              {/* Part 1: Full CRM Flow — diagram left, text right */}
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex-1">
                  <img
                    src="/products/crm-full-flow.png"
                    alt="CRM komplett flyt — fra 6 lead-kilder via auto-scrape, berikelse og AI scoring til salgspipeline"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    Fra lead-kilde til kunde
                  </h4>
                  <p className="text-text-light leading-relaxed">
                    Leads strømmer inn fra 6 kilder — Brreg, Google, Proff,
                    LinkedIn, kontaktskjema og booking. Auto-scrape henter og
                    beriker data automatisk, AI scorer hver lead, og pipelinen
                    fører dem fra ny til signert kunde.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "6 lead-kilder med automatisk import",
                      "Auto-scrape fra Brreg, Google & Proff",
                      "LinkedIn-pipeline via Vayne.io + Hunter.io",
                      "Kontaktskjema og booking → CRM direkte",
                      "E-post-berikelse via AnyMailFinder",
                      "AI lead scoring (fit + interest + Claude)",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-100" />

              {/* Part 2: Daily Automation — text left, diagram right */}
              <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center">
                <div className="flex-1">
                  <img
                    src="/products/crm-daily-automation.png"
                    alt="Daglig automasjon — 6 moduler som kjører automatisk: pipeline, AI score, duplikat, win/loss, AI e-post, rapport"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    Daglig automasjonssweep
                  </h4>
                  <p className="text-text-light leading-relaxed">
                    Hver morgen kjører 6 automatiseringsmoduler som holder
                    pipelinen i bevegelse uten manuell innsats. AI scorer leads,
                    genererer oppfølgings-e-poster, og fanger opp duplikater —
                    mens ukentlige rapporter sendes automatisk.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Automatisk pipeline-progresjon",
                      "AI-genererte oppfølgings-e-poster (Claude)",
                      "Lead scoring med AI-kommentar",
                      "Duplikatdeteksjon med fuzzy matching",
                      "Win/loss-analyse og reaktivering",
                      "Ukentlig pipeline-rapport (mandager)",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-100" />

              {/* Part 3: Live Demo + Outputs */}
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 space-y-4">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    Tilbud, onboarding & outreach
                  </h4>
                  <p className="text-text-light leading-relaxed">
                    Når leads kvalifiseres, genereres tilbud automatisk via
                    PandaDoc. Ved signering sendes velkomst-e-post og
                    onboarding starter. Instantly-integrasjon håndterer
                    auto-reply på kalde kampanjer med AI.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "PandaDoc tilbudsgenerering",
                      "Automatisk onboarding-e-post ved signering",
                      "Instantly auto-reply med knowledge base",
                      "Stale-lead deteksjon (3/7/11 dager)",
                      "Kanban pipeline med drag-and-drop",
                      "Inbound leads fra skjema og booking",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                    <iframe
                      src="https://argon-crm-live.vercel.app/"
                      title="Argon CRM — live demo"
                      className="h-[500px] w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-text-light">
                    Live demo — utforsk salgspipeline og automatisert prospektering
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link
                  href="/kontakt"
                  className="inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Ta kontakt
                </Link>
              </div>
            </div>
          </div>

          {/* Expandable Systemintegrasjon section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "integration" ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              {/* Section intro */}
              <div className="mb-10 space-y-3">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                  AI-drevet systemintegrasjon
                </h3>
                <p className="max-w-2xl text-text-light leading-relaxed">
                  Vi kobler sammen eksisterende systemer og bygger skreddersydde
                  integrasjoner som gjør at data flyter automatisk mellom
                  plattformer — raskt, sømløst og uten manuell innsats.
                </p>
              </div>

              {/* Example 1: AI Rapportgenerering — text left, image right */}
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex-1 space-y-4">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    AI Rapportgenerering
                  </h4>
                  <p className="text-text-light leading-relaxed">
                    Prosjektdata hentes fra databasen, forbedres av ChatGPT API,
                    og genereres som en ferdig Word-rapport, helt automatisk.
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
                </div>
                <div className="flex-1">
                  <img
                    src="/products/ai-report-system.png"
                    alt="AI rapportgenerering — dataflyt fra database via API og ChatGPT til Word-dokument"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-100" />

              {/* Example 2: AI E-posthåndtering — image left, text right (diagonal) */}
              <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center">
                <div className="flex-1 space-y-4">
                  <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text">
                    AI E-posthåndtering
                  </h4>
                  <p className="text-text-light leading-relaxed">
                    AI-agenten leser innkommende e-poster direkte fra Gmail,
                    forstår innholdet, henter relevant data fra
                    prosjektstyringssystemet, kategoriserer saken og sender
                    arbeidsordre til riktig person, på sekunder, ikke timer.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Sømløs Gmail-integrasjon via MCP",
                      "Automatisk kategorisering av henvendelser",
                      "Kobling mot PM-system i sanntid",
                      "Work orders sendes umiddelbart",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img
                    src="/products/ai-email-automation.png"
                    alt="AI e-posthåndtering — Gmail via MCP til AI Agent, PM-system og automatisk work order"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link
                  href="/kontakt"
                  className="inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Ta kontakt
                </Link>
              </div>
            </div>
          </div>

          {/* Expandable AI-agenter section */}
          <div
            className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expandedSection === "ai-agents" ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              {/* Architecture diagram */}
              <div className="mb-10">
                <h4 className="mb-4 text-center font-[family-name:var(--font-playfair)] text-lg font-medium text-text">
                  Slik fungerer det
                </h4>
                <p className="mx-auto mb-6 max-w-2xl text-center text-sm text-text-light leading-relaxed">
                  AI-agenten logger inn på dashboardet, henter data, navigerer til Kabal
                  for å skrape oppdaterte datoer, oppdaterer systemet og genererer en
                  ferdig rapport — helt automatisk, uten manuell innsats.
                </p>
                <img
                  src="/products/ai-browser-automation.png"
                  alt="AI Browser Automation — flytdiagram som viser AI-agent, dashboard, Kabal-scraping, læring og rapportgenerering"
                  className="mx-auto w-full max-w-2xl rounded-xl"
                />
              </div>

              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text">
                    AI-agenter i aksjon
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    Se hvordan våre AI-agenter automatiserer nettleseroppgaver,
                    datainnhenting og repetitive prosesser. Videoen viser en
                    agent som jobber autonomt for å løse oppgaver.
                  </p>
                  <ul className="space-y-2 pt-2">
                    {[
                      "Nettleserautomatisering",
                      "Automatisk datainnhenting",
                      "Skjemautfylling og rapportering",
                      "Integrasjon med eksisterende systemer",
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
                    <video
                      src="/ai-agenter-demo.mp4"
                      controls
                      className="h-auto w-full"
                      preload="metadata"
                    >
                      Nettleseren din støtter ikke videoavspilling.
                    </video>
                  </div>
                  <p className="mt-3 text-center text-xs text-text-light">
                    Se demo — AI-agent som automatiserer oppgaver
                  </p>
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
