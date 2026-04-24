import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500"], variable: "--font-playfair" });

const siteUrl = "https://argonsolutions.no";
const siteName = "Argon Solutions";
const siteDescription =
  "Skreddersydd software og systemintegrasjon for norsk olje og gass. Vi bygger løsninger som forenkler arbeidshverdagen.";

export const metadata: Metadata = {
  title: {
    default: "Argon Solutions — Softwareløsninger for energisektoren",
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
    title: "Argon Solutions — Softwareløsninger for energisektoren",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argon Solutions — Software for energisektoren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argon Solutions — Softwareløsninger for energisektoren",
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
    description:
      "Argon Solutions er et Stavanger-basert softwareselskap som leverer skreddersydd software, CRM-systemer, systemintegrasjon og AI-agenter for olje- og gassindustrien i Norge.",
    foundingDate: "2024",
    founder: [
      { "@type": "Person", name: "Sondre Gysland", jobTitle: "Grunder" },
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
      "https://www.instagram.com/argonsolutions/",
      "https://www.linkedin.com/company/argon-solutions-no/",
    ],
    knowsAbout: [
      "Skreddersydd software for olje og gass",
      "CRM-systemer for energisektoren",
      "Systemintegrasjon og API-utvikling",
      "AI-agenter og nettleserautomatisering",
      "Digitalisering av olje- og gassindustrien",
      "Claude Code opplæring og workshops",
    ],
    areaServed: {
      "@type": "Country",
      name: "Norway",
    },
    priceRange: "$$",
    isicV4: "6201",
    naics: "541511",
  };

  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          // Safe: jsonLd is a static object defined in server-side code, not user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${playfair.variable} bg-white text-text antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
