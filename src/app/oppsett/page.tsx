import type { Metadata } from "next";
import OppsettContent from "./Content";

const description =
  "Argon Solutions setter opp Claude i bedriften din: riktig plan og tilganger, data og sikkerhet, integrasjoner via MCP, og enkle skreddersydde agenter som gir verdi fra dag én. AI-byrå i Stavanger.";

export const metadata: Metadata = {
  title: "Sett opp Claude i bedriften: plan, sikkerhet og enkle agenter",
  description,
  keywords: [
    "Claude oppsett",
    "Claude for bedrifter",
    "sette opp Claude",
    "AI-agenter bedrift",
    "MCP integrasjon",
    "AI-byrå Stavanger",
  ],
  alternates: { canonical: "/oppsett" },
  openGraph: {
    title: "Sett opp Claude i bedriften",
    description,
    url: "/oppsett",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Claude business setup and onboarding",
  name: "Sett opp Claude i bedriften",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    { "@type": "Offer", name: "Kartlegging", description: "Gjennomgang av behov, data og egnede oppgaver." },
    { "@type": "Offer", name: "Oppsett", description: "Plan, tilganger, sikkerhet, integrasjoner og de første agentene." },
    { "@type": "Offer", name: "Drift og videreutvikling", description: "Løpende support og nye agenter etter behov." },
  ],
};

export default function OppsettPage() {
  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <OppsettContent />
    </div>
  );
}
