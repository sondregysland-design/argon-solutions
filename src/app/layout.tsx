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
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stavanger",
      addressCountry: "NO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-901-20-714",
      email: "post@argonsolutions.no",
      contactType: "customer service",
      availableLanguage: ["Norwegian", "English"],
    },
    sameAs: ["https://www.instagram.com/argonsolutions/"],
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
