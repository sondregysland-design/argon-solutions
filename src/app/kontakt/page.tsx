import type { Metadata } from "next";
import { KontaktContent } from "./KontaktContent";

const description =
  "Kontakt Argon Solutions i Stavanger for skreddersydd software, CRM-systemer og AI-løsninger for olje og gass. Book en gratis konsultasjon.";

export const metadata: Metadata = {
  title: "Kontakt Argon Solutions: Software for olje og gass i Stavanger",
  description,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt Argon Solutions: Software for olje og gass i Stavanger",
    description,
    url: "/kontakt",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt Argon Solutions",
  url: "https://argonsolutions.no/kontakt",
  description:
    "Kontakt Argon Solutions i Stavanger for skreddersydd software, CRM-systemer og AI-løsninger for olje og gass.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-452-09-979",
      email: "post@argonsolutions.no",
      contactType: "customer service",
      availableLanguage: ["Norwegian", "English"],
      areaServed: "NO",
    },
  },
};

export default function KontaktPage() {
  // Safe: contactJsonLd is server-side static data, not user input
  const jsonLdScript = JSON.stringify(contactJsonLd);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />
      <KontaktContent />
    </div>
  );
}
