import type { Metadata } from "next";
import SystemintegrasjonContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions kobler sammen eksisterende systemer og bygger skreddersydde API-integrasjoner for energisektoren. Automatisk dataflyt, AI-drevet rapportering og effektive arbeidsflyter.";

export const metadata: Metadata = {
  title: "Systemintegrasjon: API-utvikling og dataflyt",
  description,
  keywords: ["systemintegrasjon", "API-utvikling", "dataflyt automatisering", "integrasjon energisektoren"],
  alternates: { canonical: "/tjenester/systemintegrasjon" },
  openGraph: {
    title: "Systemintegrasjon: API-utvikling og dataflyt",
    description,
    url: "/tjenester/systemintegrasjon",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "System Integration",
  name: "Systemintegrasjon og API-utvikling | Argon Solutions, Stavanger",
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
      name: "Hvilke systemer kan Argon Solutions integrere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions integrerer vanlige systemer i energisektoren: SAP, SharePoint, Maximo, PandaDoc, og andre plattformer via REST API-er og webhooks. Vi bygger skreddersydde API-lag som kobler sammen eksisterende systemer med ny software.",
      },
    },
    {
      "@type": "Question",
      name: "Hvem tilbyr systemintegrasjon for olje og gass i Stavanger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions i Stavanger tilbyr systemintegrasjon og API-utvikling for olje- og gassindustrien. Vi kobler sammen eksisterende systemer, bygger automatisert dataflyt, og erstatter manuell dataoverføring med skreddersydde integrasjoner.",
      },
    },
  ],
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "Systemintegrasjon", url: `${SITE_URL}/tjenester/systemintegrasjon` },
]);

export default function SystemintegrasjonPage() {
  return (
    <div className="py-20">
      {/* Safe: static server-side constants from this file, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <SystemintegrasjonContent />
    </div>
  );
}
