import HomeContent from "./HomeContent";
import { no } from "@/i18n/messages/no";
import { bedriftskursServiceJsonLd } from "@/lib/schema";

// Forsiden er en kursside med priser, og er den mest crawlede URL-en.
// Derfor ligger Service-objektet for bedriftskurset her også, med samme
// @id som /kurs, ikke som et eget duplikat.

// FAQPage-schema bygges fra samme i18n-strenger som den synlige FAQ-blokken
// i HomeContent, så schema og synlig innhold alltid er i sync.
const faq = no.home.faq;
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.argonsolutions.no/#faq",
  inLanguage: "nb-NO",
  isPartOf: { "@id": "https://www.argonsolutions.no/#website" },
  mainEntity: ([1, 4, 5, 8] as const).map((n) => ({
    "@type": "Question",
    name: faq[`q${n}`],
    acceptedAnswer: { "@type": "Answer", text: faq[`a${n}`] },
  })),
};

const jsonLd = [
  faqJsonLd,
  bedriftskursServiceJsonLd(),
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Safe: jsonLd is built from static i18n strings and schema-helpere, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
