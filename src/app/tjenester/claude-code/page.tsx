import type { Metadata } from "next";
import ClaudeCodeContent from "./Content";

const description =
  "Argon Solutions setter opp Claude Code som et komplett AI-operativsystem for din bedrift. Skreddersydde skills, MCP-servere, hooks og arbeidsflyter. AI-byrå i Stavanger.";

export const metadata: Metadata = {
  title: "Claude Code for bedrifter: Oppsett, opplæring og rådgivning",
  description,
  keywords: ["Claude Code", "Claude Code oppsett", "Claude Code bedrift", "AI operativsystem", "AI-byrå Stavanger"],
  alternates: { canonical: "/tjenester/claude-code" },
  openGraph: {
    title: "Claude Code for bedrifter: Oppsett, opplæring og rådgivning",
    description,
    url: "/tjenester/claude-code",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Claude Code Setup and Training",
  name: "Claude Code for bedrifter",
  provider: { "@type": "Organization", "@id": "https://argonsolutions.no/#organization", name: "Argon Solutions" },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    { "@type": "Offer", name: "Intro", description: "2-timers introduksjon for enkeltpersoner." },
    { "@type": "Offer", name: "Interactive", description: "Halvdags workshop for utviklerteam." },
    { "@type": "Offer", name: "Interactive+", description: "Heldags dypdykk for tekniske team." },
    { "@type": "Offer", name: "Team Setup", description: "Komplett oppsett + 30 dager support." },
  ],
};

export default function ClaudeCodePage() {
  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ClaudeCodeContent />
    </div>
  );
}