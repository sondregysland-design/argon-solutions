import type { Metadata } from "next";
import BedriftContent from "./Content";

const description =
  "Argon Industri leverer in-house AI-opplæring for selskaper i olje og gass. Fra ledelsesworkshop til champions-dag, med datasikkerhet først. Fra 40 000 kr per kursdag.";

export const metadata: Metadata = {
  title: "In-house AI-kurs for olje og gass",
  description,
  keywords: ["AI-kurs bedrift", "in-house AI-opplæring", "AI olje og gass", "Claude kurs bedrift", "Argon Industri"],
  alternates: { canonical: "/kurs/bedrift" },
  openGraph: {
    title: "In-house AI-kurs for olje og gass",
    description,
    url: "/kurs/bedrift",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "In-house AI training",
  name: "Argon Industri",
  provider: { "@type": "Organization", "@id": "https://argonsolutions.no/#organization", name: "Argon Solutions" },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    { "@type": "Offer", name: "Ledelsesworkshop", description: "Halvdags workshop for ledergruppen." },
    { "@type": "Offer", name: "Inspirasjonsforedrag", description: "Foredrag for hele organisasjonen." },
    { "@type": "Offer", name: "Heldagskurs nivå 1", description: "Praktisk heldagskurs for ansatte." },
    { "@type": "Offer", name: "Champions-dag", description: "Dypere opplæring for interne ressurspersoner." },
    { "@type": "Offer", name: "Oppfølging", description: "Oppfølgingsbesøk etter kursløpet." },
  ],
};

export default function BedriftPage() {
  return (
    <div className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <BedriftContent />
    </div>
  );
}
