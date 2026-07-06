"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "Systemintegrasjon",
  h1: "Systemintegrasjon",
  intro:
    "Vi kobler sammen eksisterende systemer og bygger skreddersydde integrasjoner som gjør at data flyter automatisk mellom plattformer, slik at teamet ditt slipper manuelt dobbelarbeid.",
  features: [
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
  ],
  integrationsTitle: "Vanlige integrasjoner",
  integrationsIntro: "Vi har erfaring med integrasjoner mot disse og mange andre plattformer.",
  commonIntegrations: [
    "SAP og ERP-systemer",
    "SharePoint og Microsoft 365",
    "Maximo og vedlikeholdssystemer",
    "PandaDoc og e-signering",
    "Leverandørportaler",
    "Offentlige registre og databaser",
  ],
  ctaTitle: "Har du systemer som burde snakke sammen?",
  ctaText: "Kontakt oss for en gratis vurdering av integrasjonsmulighetene i din organisasjon.",
  ctaButton: "Kontakt oss for en gratis konsultasjon",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "System integration",
  h1: "System integration",
  intro:
    "We connect existing systems and build tailored integrations that let data flow automatically between platforms, so your team avoids manual double work.",
  features: [
    {
      title: "API development and integration",
      desc: "We build robust REST and GraphQL APIs that connect your systems to third-party platforms, supplier portals and industry-standard systems.",
    },
    {
      title: "AI-driven report generation",
      desc: "Automatic generation of Word and PDF reports from existing data, with Claude AI analysing and formatting the content.",
    },
    {
      title: "Automatic data flow between systems",
      desc: "Set up automated pipelines that synchronise data between ERP, CRM, spreadsheets and other systems without manual intervention.",
    },
    {
      title: "Connection to existing databases",
      desc: "We integrate with SQL databases, SAP, SharePoint, Maximo and other legacy systems that already exist in your organisation.",
    },
  ],
  integrationsTitle: "Common integrations",
  integrationsIntro: "We have experience with integrations to these and many other platforms.",
  commonIntegrations: [
    "SAP and ERP systems",
    "SharePoint and Microsoft 365",
    "Maximo and maintenance systems",
    "PandaDoc and e-signing",
    "Supplier portals",
    "Public registries and databases",
  ],
  ctaTitle: "Do you have systems that should talk to each other?",
  ctaText: "Contact us for a free assessment of the integration opportunities in your organisation.",
  ctaButton: "Contact us for a free consultation",
};

export default function SystemintegrasjonContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/tjenester" className="hover:text-primary">{m.breadcrumbServices}</Link>
        <span>/</span>
        <span className="text-text">{m.breadcrumbCurrent}</span>
      </nav>

      <h1 className="text-4xl font-display font-medium text-text">
        {m.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">
        {m.intro}
      </p>

      {/* Features */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {m.features.map((f) => (
          <div key={f.title} className="rounded-xl border border-text/10 p-6">
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
        <h2 className="text-2xl font-display font-medium text-text">
          {m.integrationsTitle}
        </h2>
        <p className="mt-3 text-text-light">
          {m.integrationsIntro}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {m.commonIntegrations.map((item) => (
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
        <h2 className="text-2xl font-display font-medium text-text">
          {m.ctaTitle}
        </h2>
        <p className="mt-3 text-text-light">
          {m.ctaText}
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
        >
          {m.ctaButton}
        </Link>
      </div>
    </div>
  );
}
