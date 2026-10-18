// Små hjelpere for JSON-LD på kurs-landingssidene.
// Holder @id-referansene konsistente med layout.tsx
// (#organization, #website) på ett sted.

export const SITE_URL = "https://www.argonsolutions.no";
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

// Bedriftskurset (Argon Industri) som Service. Prisen er per kursdag for
// hele teamet, derfor Service med Offer og ikke Course med sete-pris.
export function bedriftskursServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/kurs#service`,
    name: "Argon Industri, bedriftsinternt AI-kurs",
    description:
      "Bedriftsinternt AI-kurs og Claude-opplæring holdt hos kunden, med datasikkerhet som første tema. Fra 40 000 kr per kursdag for hele teamet.",
    url: `${SITE_URL}/kurs`,
    serviceType: "Bedriftsintern AI-opplæring",
    provider: ORG_REF,
    areaServed: { "@type": "Country", name: "Norway" },
    offers: {
      "@type": "Offer",
      price: "40000",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/kontakt`,
      category: "Per kursdag, hele teamet",
    },
  };
}

export function stavangerPlace() {
  return {
    "@type": "Place",
    name: "Stavanger",
    address: { "@type": "PostalAddress", addressLocality: "Stavanger", addressRegion: "Rogaland", addressCountry: "NO" },
  } as const;
}
