import type { Metadata } from "next";
import AIAgenterContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions bygger AI-agenter og agentic AI-løsninger som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser for energisektoren i Norge.";

export const metadata: Metadata = {
  title: "AI-agenter: Agentic AI og automatisering",
  description,
  keywords: ["AI-agenter", "agentic AI", "automatisering energisektoren", "nettleserautomatisering", "AI agent Norge"],
  alternates: { canonical: "/tjenester/ai-agenter" },
  openGraph: {
    title: "AI-agenter: Agentic AI og automatisering",
    description,
    url: "/tjenester/ai-agenter",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Agents and Automation",
  name: "AI-agenter og agentic AI fra Argon Solutions i Stavanger",
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
      name: "Hva er en AI-agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En AI-agent er et autonomt program som kombinerer nettleserautomatisering (Playwright) med kunstig intelligens (Claude AI) for å utføre oppgaver uten menneskelig inngripen. Argon Solutions bygger AI-agenter for energisektoren i Stavanger som automatiserer datainnhenting, skjemautfylling og leverandørhåndtering.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor mye tid kan en AI-agent spare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I grunnleggernes egen arbeidsflyt i olje og gass reduserte Argon Solutions' AI-agent 6 timer manuelt portalarbeid til 3 minutter per uke, med 47 leverandørportaler behandlet automatisk.",
      },
    },
    {
      "@type": "Question",
      name: "Hvem bygger AI-agenter i Stavanger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions er et AI-byrå i Stavanger som spesialiserer seg på å bygge AI-agenter og agentic AI-løsninger for energisektoren. Selskapet bruker Playwright og Claude AI til å automatisere nettleseroppgaver og repetitive prosesser.",
      },
    },
  ],
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "AI-agenter", url: `${SITE_URL}/tjenester/ai-agenter` },
]);

export default function AIAgenterPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        // Safe: both objects are static server-side constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <AIAgenterContent />
    </div>
  );
}
