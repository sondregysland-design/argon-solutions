import type { Metadata } from "next";
import AIStrategiContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions tilbyr AI-strategi og rådgivning for energisektoren. AI readiness-vurdering, automatiseringskartlegging, ROI-modellering og implementeringsveikart for beslutningstakere.";

export const metadata: Metadata = {
  title: "AI-strategi og rådgivning: Veikart for AI-implementering",
  description,
  keywords: ["AI strategi", "AI rådgivning", "AI konsulent", "AI implementering energisektoren", "AI veikart"],
  alternates: { canonical: "/tjenester/ai-strategi" },
  openGraph: {
    title: "AI-strategi og rådgivning: Veikart for AI-implementering",
    description,
    url: "/tjenester/ai-strategi",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Strategy and Advisory",
  name: "AI-strategi og rådgivning",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const jsonLd = [
  serviceJsonLd,
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Tjenester", url: `${SITE_URL}/tjenester` },
    { name: "AI-strategi", url: `${SITE_URL}/tjenester/ai-strategi` },
  ]),
];

export default function AIStrategiPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIStrategiContent />
    </div>
  );
}
