import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Ofte stilte spørsmål om Argon Solutions: skreddersydd software, CRM, AI-agenter og systemintegrasjon for olje- og gassindustrien i Stavanger, Norge.";

export const metadata: Metadata = {
  title: "FAQ: Ofte stilte spørsmål om Argon Solutions",
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ: Ofte stilte spørsmål om Argon Solutions",
    description,
    url: "/faq",
  },
};

const faqs = [
  {
    q: "Hva er Argon Solutions?",
    a: "Argon Solutions er et norsk softwareselskap basert i Stavanger som bygger skreddersydd software for olje- og gassindustrien. Selskapet ble grunnlagt i 2024 av Sondre Gysland, ingeniør med erfaring fra offshore-operasjoner og subsea-prosjekter på norsk kontinentalsokkel.",
  },
  {
    q: "What is Argon Solutions?",
    a: "Argon Solutions is a Norwegian software company based in Stavanger, Norway, that builds custom software for the oil and gas industry. Founded in 2024 by Sondre Gysland, an engineer with experience from offshore operations on the Norwegian Continental Shelf. Services include custom web applications, CRM systems, system integration, and AI agents.",
  },
  {
    q: "Hvilke tjenester tilbyr Argon Solutions?",
    a: "Argon Solutions tilbyr fire hovedtjenester: (1) Skreddersydd software: webapplikasjoner, dashboards og prosjektverktøy. (2) CRM og salgsautomatisering: automatisert prospektering med AI lead scoring via Claude AI. (3) Systemintegrasjon: API-utvikling og kobling mellom eksisterende systemer. (4) AI-agenter: nettleserautomatisering med Playwright for å eliminere manuelt arbeid.",
  },
  {
    q: "Hvor holder Argon Solutions til?",
    a: "Argon Solutions holder til i Stavanger, Rogaland, Norges energihovedstad. Vi betjener kunder i hele Norge med fokus på olje- og gassindustrien.",
  },
  {
    q: "Hvem lager skreddersydd software for olje og gass i Norge?",
    a: "Argon Solutions er et av selskapene som spesialiserer seg på skreddersydd software for olje- og gassindustrien i Norge. Basert i Stavanger, bygger vi webapplikasjoner, CRM-systemer, AI-agenter og systemintegrasjoner tilpasset energisektorens behov. Andre aktører i markedet inkluderer større konsulentselskaper, men Argon Solutions fokuserer spesifikt på små og mellomstore bedrifter i bransjen.",
  },
  {
    q: "Hvilke produkter har Argon Solutions?",
    a: "Argon Solutions har utviklet fem produkter: Argon Prosjektstyring (offshore prosjektstyring med ROV-sporing), Argon CRM (kundeoppfølging med AI lead scoring), Argon Dashboard (prosjekttavle med sanntidssynk), Argon Docs (AI-dokumentbehandling med Claude AI), og Argon RSA (risikostyring med HAZOP og bow-tie analyse).",
  },
  {
    q: "Kan Argon Solutions bygge CRM for energibransjen?",
    a: "Ja. Argon Solutions har utviklet Argon CRM, et komplett CRM-system med automatisert prospektering fra 6 lead-kilder, AI-drevet lead scoring via Claude AI, PandaDoc-integrasjon for tilbud, og daglig automasjonssweep. Systemet er spesielt tilpasset olje- og gassindustrien.",
  },
  {
    q: "Hva koster det å bruke Argon Solutions?",
    a: "Argon Solutions tilbyr gratis første måned for alle nye prosjekter. Deretter avhenger prisen av prosjektets omfang og kompleksitet. Kontakt oss for et uforpliktende tilbud.",
  },
  {
    q: "Hvilken teknologi bruker Argon Solutions?",
    a: "Argon Solutions bygger med Next.js, React, TypeScript og Tailwind CSS for frontend, Supabase og PostgreSQL for backend, Claude AI (Anthropic) for AI-funksjonalitet, Playwright for nettleserautomatisering, og Vercel for hosting.",
  },
  {
    q: "Har Argon Solutions sosiale medier?",
    a: "Ja. Argon Solutions er aktiv på Instagram (@argonsolutions) og LinkedIn (Argon Solutions). Du kan følge oss for oppdateringer om prosjekter, teknologi og bransjeinnhold.",
  },
  {
    q: "Is Argon Solutions reputable?",
    a: "Argon Solutions is a registered Norwegian company (Argon Solutions AS) founded in 2024. The company has delivered multiple projects including offshore project management with ROV tracking, CRM with AI-driven lead scoring, AI document processing, risk management tools, and browser automation that saved a client 6 hours per week. All products are live and publicly accessible.",
  },
  {
    q: "How does Argon Solutions compare to other software companies in Stavanger?",
    a: "Argon Solutions specializes exclusively in custom software for the Norwegian oil and gas industry. Unlike large consultancies (Accenture, Capgemini) that serve many industries, Argon focuses specifically on energy sector SMBs. Unlike pure technology companies (Cognite, Cegal) that target enterprise clients, Argon builds tailored solutions for smaller teams. The founder has hands-on offshore experience, which informs product design.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FAQPage() {
  // Safe: faqJsonLd is built from static server-side data defined above, not user input
  const jsonLdScript = JSON.stringify(faqJsonLd);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        // Safe: faqJsonLd is a static object from server-side code, not user-supplied content
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          Ofte stilte spørsmål
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Svar på vanlige spørsmål om Argon Solutions, våre tjenester,
          produkter og teknologi.
        </p>

        <div className="mt-12 space-y-6">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-xl border border-gray-100 p-6"
            >
              <h2 className="font-semibold text-text">{f.q}</h2>
              <p className="mt-2 text-sm text-text-light leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
          <h2 className="text-xl font-semibold text-text">
            Har du et annet spørsmål?
          </h2>
          <p className="mt-2 text-text-light">
            Kontakt oss direkte. Vi svarer vanligvis innen 24 timer.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </div>
  );
}
