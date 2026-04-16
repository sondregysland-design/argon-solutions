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
          <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {/* Software card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "software" ? null : "software"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard {...services[0]} isExpandable isExpanded={expandedSection === "software"} />
            </button>
            {/* Expandable Skreddersydd Software section */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "software" ? "max-h-[1200px] opacity-100 mb-8" : "max-h-0 opacity-0"
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

            {/* CRM card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "crm" ? null : "crm"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard {...services[1]} isExpandable isExpanded={expandedSection === "crm"} />
            </button>
            {/* Expandable CRM & Salgsautomatisering section */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "crm" ? "max-h-[5000px] opacity-100 mb-8" : "max-h-0 opacity-0"
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
              <div className="flex flex-col gap-8 md:flex-row-reverse md:items-start">
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
                <div className="flex-1" style={{ perspective: "1200px" }}>
                  <div
                    className="overflow-hidden rounded-xl border border-gray-200 shadow-2xl"
                    style={{ transform: "rotateY(-6deg) rotateX(2deg)", transformOrigin: "center center" }}
                  >
                    <img
                      src="/products/crm-screenshot.png"
                      alt="Argon CRM — salgspipeline dashboard"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-text-light">
                    Argon CRM — salgspipeline og automatisert prospektering
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

            {/* Integration card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "integration" ? null : "integration"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard {...services[2]} isExpandable isExpanded={expandedSection === "integration"} />
            </button>
            {/* Expandable Systemintegrasjon section */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "integration" ? "max-h-[3000px] opacity-100 mb-8" : "max-h-0 opacity-0"
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

            {/* AI-agents card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "ai-agents" ? null : "ai-agents"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard {...services[3]} isExpandable isExpanded={expandedSection === "ai-agents"} />
            </button>
            {/* Expandable AI-agenter section */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "ai-agents" ? "max-h-[1200px] opacity-100 mb-8" : "max-h-0 opacity-0"
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
        </div>
      </section>

      {/* Claude Code Tjenester */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-[family-name:var(--font-playfair)] text-3xl font-medium text-text">
            Claude Code
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Praktiske kurs og skreddersydd rådgivning som gjør teamet ditt til eksperter i AI-drevet utvikling.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {/* Kurs Card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "claude-kurs" ? null : "claude-kurs"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                }
                title="Claude Code Kurs"
                description="Praktiske workshops som tar teamet ditt fra nybegynner til ekspert. Fra grunnleggende bruk til avanserte AI-workflows."
                isExpandable
                isExpanded={expandedSection === "claude-kurs"}
              />
            </button>
            {/* Expandable Claude Code Kurs */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "claude-kurs" ? "max-h-[3000px] opacity-100 mb-8" : "max-h-0 opacity-0"
              }`}
            >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              <div className="mb-10">
                <img
                  src="/products/claude-code-kurs.png"
                  alt="Claude Code Kurs — 4 steg fra intro til team setup"
                  className="mx-auto w-full max-w-2xl rounded-xl"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Intro Kurs */}
                <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">2,5 timer</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Intro Kurs</h4>
                  <p className="mt-2 flex-1 text-sm text-text-light leading-relaxed">
                    Grunnleggende AI-teori, installasjon og oppsett av Claude Code. Effektiv prompting og live demonstrasjon av verktøyet i praksis.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {["AI-teori og konsepter", "Installasjon og oppsett", "Effektiv prompting", "Live demonstrasjon"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-light">
                        <svg className="h-3.5 w-3.5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="mt-6 block rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Book intro
                  </Link>
                </div>

                {/* Interaktiv Kurs — 1 dag */}
                <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">1 dag</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Interaktiv Kurs</h4>
                  <p className="mt-2 flex-1 text-sm text-text-light leading-relaxed">
                    Dypdykk i hooks, custom skills og MCP servers. Bygg reelle automatiseringer i workshopformat.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {["Hooks og automatisering", "Custom skills", "MCP servers", "Hands-on workshop"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-light">
                        <svg className="h-3.5 w-3.5 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="mt-6 block rounded-lg bg-amber-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-amber-700"
                  >
                    Book 1-dag
                  </Link>
                </div>

                {/* Interaktiv Kurs — 2 dager */}
                <div className="relative flex flex-col rounded-xl border-2 border-primary bg-white p-6 shadow-[0_4px_20px_rgba(30,64,175,0.1)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">Anbefalt</div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">2 dager</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Interaktiv Kurs+</h4>
                  <p className="mt-2 flex-1 text-sm text-text-light leading-relaxed">
                    Alt fra 1-dagskurset pluss subagents, Agent SDK og avanserte workflows. Inkluderer oppfølging etter kurset.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {["Alt fra 1-dagskurs", "Subagents og Agent SDK", "Avanserte workflows", "Oppfølging etterpå"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-light">
                        <svg className="h-3.5 w-3.5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="mt-6 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Book 2-dager
                  </Link>
                </div>

                {/* Team Setup */}
                <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">1 dag</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Team Setup</h4>
                  <p className="mt-2 flex-1 text-sm text-text-light leading-relaxed">
                    Sett opp Claude Code for hele utviklingsteamet. Felles konvensjoner, sikkerhet og code review workflows.
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {["CLAUDE.md-arkitektur", "Felles konvensjoner", "Sikkerhet og tilgang", "Code review med AI"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-light">
                        <svg className="h-3.5 w-3.5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="mt-6 block rounded-lg bg-green-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Book team setup
                  </Link>
                </div>
              </div>
            </div>
          </div>

            {/* Consulting Card */}
            <button
              type="button"
              onClick={() =>
                setExpandedSection(
                  expandedSection === "claude-consulting" ? null : "claude-consulting"
                )
              }
              className="mb-8 text-left cursor-pointer sm:order-1"
            >
              <ServiceCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Claude Code Consulting"
                description="Vi implementerer Claude Code i bedriftens utviklingsprosess. Skreddersydde skills, integrasjoner og AI-agenter."
                isExpandable
                isExpanded={expandedSection === "claude-consulting"}
              />
            </button>
            {/* Expandable Claude Code Consulting */}
            <div
              className={`col-span-full sm:order-2 overflow-hidden transition-all duration-500 ease-in-out ${
                expandedSection === "claude-consulting" ? "max-h-[3000px] opacity-100 mb-8" : "max-h-0 opacity-0"
              }`}
            >
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-12">
              <div className="mb-10">
                <img
                  src="/products/claude-code-consulting.png"
                  alt="Claude Code Consulting — Custom Setup, Custom Skills, MCP Servers, AI Agenter"
                  className="mx-auto w-full max-w-2xl rounded-xl"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Service 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">1</div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Custom Setup</h4>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">
                    Analyse av eksisterende utviklingsprosesser og skreddersydd Claude Code-oppsett. CLAUDE.md-arkitektur, hooks og workflows tilpasset teamet.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Workflow-analyse", "CLAUDE.md", "Hooks", "Oppsett"].map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-text-light">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Service 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-sm font-bold text-red-600">2</div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">Custom Skills</h4>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">
                    Domene-spesifikke skills tilpasset deres bransje. Automatiser rapportering, HMS-sjekk, kvalitetskontroll og dokumentasjon.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Bransjetilpasset", "Rapportering", "HMS", "QA"].map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-text-light">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Service 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-700">3</div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">MCP Servers</h4>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">
                    Koble Claude Code til interne systemer. CRM, prosjektstyringsverktøy, databaser, Slack og Google Workspace.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["CRM", "API-er", "Databaser", "Slack"].map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-text-light">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Service 4 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-green-700">4</div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text">AI Agenter</h4>
                  </div>
                  <p className="text-sm text-text-light leading-relaxed">
                    Design og implementering av agent-baserte pipelines med Claude Agent SDK. Automatiser repetitive utviklingsoppgaver og CI/CD-workflows.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Agent SDK", "Pipelines", "CI/CD", "Automasjon"].map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-text-light">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-100 pt-6">
                <Link
                  href="/kontakt"
                  className="inline-block rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Ta kontakt
                </Link>
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
            Demo produkter
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
