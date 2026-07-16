import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });

const siteUrl = "https://argonsolutions.no";
const siteName = "Argon Solutions";
const siteDescription =
  "Argon Solutions er et AI-byrå i Stavanger. Vi setter opp Claude for bedrifter, bygger AI-agenter og skreddersydd software, og holder praktiske AI-kurs for team i olje og gass.";

export const metadata: Metadata = {
  title: {
    default: "Argon Solutions | AI-byrå og kurs i Stavanger",
    template: "%s | Argon Solutions",
  },
  description: siteDescription,
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    siteName,
    title: "Argon Solutions | AI-byrå og kurs i Stavanger",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argon Solutions, AI-byrå og kurs i Stavanger, Norge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argon Solutions | AI-byrå og kurs i Stavanger",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName: "Argon Solutions AS",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    image: `${siteUrl}/og-image.png`,
    alternateName: ["Argon Kurs", "Argon Industri", "Argon Kurs Stavanger"],
    description: siteDescription,
    foundingLocation: {
      "@type": "Place",
      name: "Stavanger, Norge",
    },
    founder: [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#founder`,
        name: "Sondre Gysland",
        jobTitle: "Grunder og daglig leder",
        description: "Ingeniør med erfaring fra offshore-operasjoner og subsea-prosjekter på norsk kontinentalsokkel. Grunnla Argon Solutions for å bygge skreddersydd software for olje- og gassindustrien.",
        worksFor: { "@id": `${siteUrl}/#organization` },
        knowsAbout: [
          "Offshore operations",
          "Subsea systems",
          "ROV operations",
          "Software development",
          "AI and machine learning",
          "Claude AI",
          "Norwegian Continental Shelf",
        ],
        sameAs: [
          "https://www.linkedin.com/company/argonsolutions/",
        ],
      },
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Stavanger",
      addressLocality: "Stavanger",
      addressRegion: "Rogaland",
      postalCode: "4000",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 58.97,
      longitude: 5.73,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-452-09-979",
      email: "post@argonsolutions.no",
      contactType: "customer service",
      availableLanguage: ["Norwegian", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/argonsolutions/",
    ],
    knowsAbout: [
      "Skreddersydd software for olje og gass",
      "CRM-systemer for energisektoren",
      "Systemintegrasjon og API-utvikling",
      "AI-agenter og nettleserautomatisering",
      "Digitalisering av olje- og gassindustrien",
      "Claude Code opplæring og workshops",
      "AI-tjenester",
      "AI-byrå Stavanger",
      "Claude Code oppsett",
      "Digital transformasjon energisektoren",
      "Maskinlæring for olje og gass",
      "NORSOK-kompatibel software",
      "HMS-dokumenthåndtering",
      "HAZOP og bow-tie risikoanalyse",
      "Prediktivt vedlikehold offshore",
    ],
    areaServed: {
      "@type": "Country",
      name: "Norway",
    },
    priceRange: "$$",
    isicV4: "6201",
    naics: "541511",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "nb-NO",
  };

  const allJsonLd = [jsonLd, websiteJsonLd];

  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          // Safe: allJsonLd is a static array of objects defined in server-side code, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
        />
      </head>
      <body className={`${figtree.className} ${figtree.variable} ${plexMono.variable} bg-paper text-text antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
