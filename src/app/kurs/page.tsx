import type { Metadata } from "next";
import KursContent from "./Content";

const description =
  "Cowork & Code er et praktisk AI-kurs i Stavanger. Liten gruppe, egen laptop, egne oppgaver. Lær å jobbe og bygge med Claude. 5 900 kr per plass, uten mva-påslag.";

export const metadata: Metadata = {
  title: "Cowork & Code, praktisk AI-kurs i Stavanger",
  description,
  keywords: ["AI-kurs Stavanger", "Claude kurs", "Claude Code kurs", "AI-opplæring", "Cowork & Code", "Argon Kurs"],
  alternates: { canonical: "/kurs" },
  openGraph: {
    title: "Cowork & Code, praktisk AI-kurs i Stavanger",
    description,
    url: "/kurs",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Cowork & Code",
  description,
  provider: { "@type": "Organization", "@id": "https://argonsolutions.no/#organization", name: "Argon Solutions" },
  courseMode: "onsite",
  locationCreated: { "@type": "Place", name: "Stavanger, Norge" },
  offers: {
    "@type": "Offer",
    price: "5900",
    priceCurrency: "NOK",
    category: "Åpen kohort, per plass",
  },
};

export default function KursPage() {
  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <KursContent />
    </div>
  );
}
