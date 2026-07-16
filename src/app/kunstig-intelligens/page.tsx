import type { Metadata } from "next";
import { KunstigIntelligensContent } from "./KunstigIntelligensContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Komplett guide til kunstig intelligens (AI) for norske bedrifter: hva det er, hvordan det brukes i praksis, kostnader, sikkerhet, og hvordan du kommer i gang. Skrevet av Argon Solutions, AI-byrå i Stavanger.";

export const metadata: Metadata = {
  title: "Kunstig intelligens for bedrifter: Komplett guide for 2026",
  description,
  keywords: [
    "kunstig intelligens",
    "AI",
    "AI for bedrifter",
    "kunstig intelligens bedrift",
    "AI implementering",
    "AI Norge",
    "AI tjenester",
    "AI agent",
    "agentic AI",
  ],
  alternates: { canonical: "/kunstig-intelligens" },
  openGraph: {
    title: "Kunstig intelligens for bedrifter: Komplett guide for 2026",
    description,
    url: "/kunstig-intelligens",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kunstig intelligens for bedrifter: Komplett guide for 2026",
  description,
  author: {
    "@type": "Person",
    name: "Sondre Gysland",
    jobTitle: "Grunder, Argon Solutions",
    url: "https://www.linkedin.com/company/argonsolutions/",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
    url: "https://argonsolutions.no",
    logo: {
      "@type": "ImageObject",
      url: "https://argonsolutions.no/favicon.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://argonsolutions.no/kunstig-intelligens",
  },
  about: [
    { "@type": "Thing", name: "Kunstig intelligens" },
    { "@type": "Thing", name: "AI for bedrifter" },
    { "@type": "Thing", name: "AI agenter" },
    { "@type": "Thing", name: "AI implementering" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er kunstig intelligens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kunstig intelligens (AI) er datasystemer som utfører oppgaver som vanligvis krever menneskelig intelligens, som å forstå språk, tolke bilder, ta beslutninger og lære av data. Moderne AI bygger i stor grad på store språkmodeller (LLM) som Claude, GPT og Gemini. For bedrifter betyr det programvare som kan lese dokumenter, svare på e-post, oppsummere møter, automatisere arbeidsflyter, og fungere som en autonom AI-agent.",
      },
    },
    {
      "@type": "Question",
      name: "Hva koster kunstig intelligens for en norsk bedrift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kostnaden varierer fra noen hundre kroner per måned for en chatbot til hundretusenvis av kroner for skreddersydd implementering. Argon Solutions tilbyr AI-agenter fra ca. 3.000 kr/mnd, AI-dashboards fra 5.000 kr/mnd, og full skreddersøm fra 15.000 kr/mnd. Første måneden er gratis. Selve LLM-bruken (Claude, ChatGPT) koster typisk 200–2.000 kr/mnd avhengig av volum.",
      },
    },
    {
      "@type": "Question",
      name: "Er kunstig intelligens trygt for norske bedrifter (GDPR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, hvis det settes opp riktig. Bruk LLM-leverandører som tilbyr enterprise-avtaler (Anthropic, OpenAI, Microsoft, Google) som ikke trener på dine data. Lagre data i EU-regioner. Bygg inn audit-logg, tilgangsstyring og maskering av personopplysninger. For sensitive data finnes også selvhostede modeller. Argon Solutions bruker Anthropic Claude med enterprise-avtale og lagrer all kundedata i Vercel/Supabase EU-regioner.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er forskjellen på en chatbot og en AI-agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En chatbot svarer på spørsmål, og du må selv handle på svaret. En AI-agent tar handling. En chatbot kan fortelle deg hva som er i e-postene dine; en AI-agent kan svare på dem, oppdatere CRM-en, booke møter og varsle deg når noe haster. Argon Solutions bygger primært autonome AI-agenter med Claude Code som kjernen.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor lang tid tar det å implementere AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Et fokusert pilotprosjekt (én konkret arbeidsflyt automatisert) tar typisk 2–6 uker fra start til produksjon. En full bedriftsutrulling med integrasjoner mot CRM, ERP og fagsystemer tar 3–6 måneder. Begynn alltid smalt med én tydelig use case som har målbar ROI før dere skalerer.",
      },
    },
  ],
};

export default function KunstigIntelligensPage() {
  // Safe: articleJsonLd and faqJsonLd are static server-side objects defined above, no user input — same pattern as /faq, /tjenester/claude-code and /blogg/[slug] in this codebase
  const articleJsonLdString = JSON.stringify(articleJsonLd);
  const faqJsonLdString = JSON.stringify([
    faqJsonLd,
    breadcrumbJsonLd([
      { name: "Hjem", url: SITE_URL },
      { name: "Kunstig intelligens", url: `${SITE_URL}/kunstig-intelligens` },
    ]),
  ]);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLdString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
      />

      <KunstigIntelligensContent />
    </div>
  );
}
