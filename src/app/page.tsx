import HomeContent from "./HomeContent";
import { no } from "@/i18n/messages/no";

// FAQPage-schema bygges fra samme i18n-strenger som den synlige FAQ-blokken
// i HomeContent, så schema og synlig innhold alltid er i sync.
const faq = no.home.faq;
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://argonsolutions.no/#faq",
  inLanguage: "nb-NO",
  isPartOf: { "@id": "https://argonsolutions.no/#website" },
  mainEntity: ([1, 2, 3, 4, 5, 6, 7, 8] as const).map((n) => ({
    "@type": "Question",
    name: faq[`q${n}`],
    acceptedAnswer: { "@type": "Answer", text: faq[`a${n}`] },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Safe: faqJsonLd is built from static i18n strings, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
