import type { Metadata } from "next";
import FaqContent from "./FaqContent";
import { faqsNo } from "./faqs";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Ofte stilte spørsmål om Argon Solutions: skreddersydd software, CRM, AI-agenter og systemintegrasjon for olje- og gassindustrien i Stavanger, Norge.";

export const metadata: Metadata = {
  title: "FAQ: Ofte stilte spørsmål om Argon Solutions",
  description,
  alternates: { canonical: "/faq" },
  openGraph: { images: ["/og-image.png"],
    title: "FAQ: Ofte stilte spørsmål om Argon Solutions",
    description,
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsNo.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function FAQPage() {
  // Safe: faqJsonLd is built from static server-side data defined above, not user input
  const jsonLdScript = JSON.stringify([
    faqJsonLd,
    breadcrumbJsonLd([
      { name: "Hjem", url: SITE_URL },
      { name: "FAQ", url: `${SITE_URL}/faq` },
    ]),
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: faqJsonLd is a static object from server-side code, not user-supplied content
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />
      <FaqContent />
    </div>
  );
}
