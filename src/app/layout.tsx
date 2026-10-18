import type { Metadata, Viewport } from "next";
import { Figtree, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });

const siteUrl = "https://www.argonsolutions.no";
const siteName = "Argon Solutions";
const siteDescription =
  "Argon Solutions er et AI-byrå i Stavanger. Vi setter opp Claude for bedrifter, bygger AI-agenter og skreddersydd software, og holder praktiske AI-kurs for team i olje og gass.";

// Rustfargen fra --color-primary. Fargelegger adresselinjen på mobil.
// viewportFit: "cover" gjør env(safe-area-inset-*) tilgjengelig.
export const viewport: Viewport = {
  themeColor: "#B4400C",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Argon Solutions | AI-byrå og kurs i Stavanger",
    template: "%s | Argon Solutions",
  },
  description: siteDescription,
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "nb-NO": "/",
      en: "/en/ai-agency-stavanger",
      "x-default": "/",
    },
  },
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
    alternateName: ["Argon Industri", "Argon Kurs", "Argon Kurs Stavanger"],
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
    // Ingen streetAddress eller postalCode her før vi har en ekte
    // besøksadresse. "Stavanger" som gate og "4000" som postnummer var
    // plassholdere, og falsk adressedata diskvalifiserer oss fra
    // Google Business Profile-match i stedet for å hjelpe.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stavanger",
      addressRegion: "Rogaland",
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
    // Organisasjonsnummeret er det som knytter nettstedet til den juridiske
    // enheten i Brreg. Uten det hviler entitetsoppslaget for navnet
    // "Argon Solutions" på en enkelt LinkedIn-URL.
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Organisasjonsnummer",
      value: "938033072",
    },
    taxID: "938033072",
    vatID: "NO938033072MVA",
    sameAs: [
      "https://www.linkedin.com/company/argonsolutions/",
      "https://virksomhet.brreg.no/nb/oppslag/enheter/938033072",
      "https://www.proff.no/selskap/argon-solutions-as/stavanger/-/938033072",
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
    <html lang="nb">
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
