import type { Metadata } from "next";
import KursContent from "./Content";
import { COHORTS } from "@/lib/cohorts";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Claude Dagskurs er et praktisk AI-kurs for private i Stavanger. Én dag, liten gruppe, egen laptop. Lær å bygge apper, verktøy og automatiseringer i Claude-appen, uten kodekunnskaper. 5 900 kr per plass.";

export const metadata: Metadata = {
  title: "Claude Dagskurs, praktisk AI-kurs for private i Stavanger",
  description,
  keywords: ["AI-kurs Stavanger", "Claude kurs", "Claude Dagskurs", "AI-opplæring", "AI-kurs for private", "Argon Kurs"],
  alternates: { canonical: "/kurs" },
  openGraph: {
    title: "Claude Dagskurs, praktisk AI-kurs for private i Stavanger",
    description,
    url: "/kurs",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://argonsolutions.no/kurs#course",
  name: "Claude Dagskurs",
  description,
  url: "https://argonsolutions.no/kurs",
  inLanguage: "nb-NO",
  provider: { "@type": "Organization", "@id": "https://argonsolutions.no/#organization", name: "Argon Solutions" },
  offers: {
    "@type": "Offer",
    price: "5900",
    priceCurrency: "NOK",
    availability: "https://schema.org/InStock",
    url: "https://argonsolutions.no/kurs#pamelding",
    category: "Åpen kohort, per plass",
  },
  hasCourseInstance: COHORTS.map((c) => ({
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "P1D",
    startDate: c.id,
    endDate: c.id,
    location: {
      "@type": "Place",
      name: "Stavanger",
      address: { "@type": "PostalAddress", addressLocality: "Stavanger", addressRegion: "Rogaland", addressCountry: "NO" },
    },
  })),
  audience: { "@type": "Audience", audienceType: "Privatpersoner og enkeltdeltakere uten utviklerbakgrunn" },
  teaches: [
    "Prompting og kontekst i Claude",
    "Bygge verktøy og automatiseringer i Claude-appen",
    "Automatisere egne arbeidsoppgaver med AI",
  ],
};

const jsonLd = [
  courseJsonLd,
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Kurs", url: `${SITE_URL}/kurs` },
  ]),
];

export default function KursPage() {
  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <KursContent />
    </div>
  );
}
