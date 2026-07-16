// Små hjelpere for JSON-LD på kurs-landingssidene.
// Holder @id-referansene konsistente med layout.tsx
// (#organization, #website) på ett sted.

export const SITE_URL = "https://argonsolutions.no";
export const ORG_REF = { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Argon Solutions" } as const;

export function faqPageJsonLd(pageUrl: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "nb-NO",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function stavangerPlace() {
  return {
    "@type": "Place",
    name: "Stavanger",
    address: { "@type": "PostalAddress", addressLocality: "Stavanger", addressRegion: "Rogaland", addressCountry: "NO" },
  } as const;
}
