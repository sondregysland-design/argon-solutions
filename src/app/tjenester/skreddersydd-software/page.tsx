import type { Metadata } from "next";
import SkreddersyddSoftwareContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions utvikler skreddersydde webapplikasjoner og dashboards for energisektoren. Mobilvenlige løsninger, sanntids datavisualisering og offline-støtte for feltarbeid.";

export const metadata: Metadata = {
  title: "Skreddersydd Software: Applikasjoner for energisektoren",
  description,
  keywords: ["skreddersydd software", "webapplikasjoner energisektoren", "dashboard olje gass", "software Stavanger"],
  alternates: { canonical: "/tjenester/skreddersydd-software" },
  openGraph: {
    title: "Skreddersydd Software: Applikasjoner for energisektoren",
    description,
    url: "/tjenester/skreddersydd-software",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  name: "Skreddersydd Software for olje og gass | Argon Solutions, Stavanger",
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
      name: "Hvem lager skreddersydd software for olje og gass i Stavanger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions i Stavanger lager skreddersydd software for olje- og gassindustrien. Selskapet spesialiserer seg på webapplikasjoner, dashboards, prosjektstyringsverktøy og offline-løsninger for feltarbeid, bygget med Next.js, Supabase og Claude AI.",
      },
    },
    {
      "@type": "Question",
      name: "Hva koster skreddersydd software for energisektoren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions tilbyr gratis første måned for alle prosjekter. Etter pilotperioden avhenger prisen av prosjektomfang. Et typisk MVP tar 4-8 uker å utvikle. Kontakt post@argonsolutions.no eller ring +47 452 09 979 for et uforpliktende estimat.",
      },
    },
    {
      "@type": "Question",
      name: "Kan skreddersydd software fungere offline på offshore-plattformer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Argon Solutions bygger progressive web-applikasjoner (PWA) med offline-støtte, slik at feltarbeidere kan registrere data uten internettilgang. Data synkroniseres automatisk når tilkoblingen gjenopprettes.",
      },
    },
  ],
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "Skreddersydd software", url: `${SITE_URL}/tjenester/skreddersydd-software` },
]);

export default function SkreddersyddSoftwarePage() {
  return (
    <div className="py-20">
      {/* Safe: both objects are static server-side constants, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <SkreddersyddSoftwareContent />
    </div>
  );
}
