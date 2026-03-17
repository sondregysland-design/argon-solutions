import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Argon Solutions — Softwareløsninger for energisektoren",
  description:
    "Skreddersydd software og systemintegrasjon for norsk olje og gass. Vi bygger løsninger som forenkler arbeidshverdagen.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={`${inter.className} bg-white text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
