import type { Metadata } from "next";
import { OmOssContent } from "./OmOssContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions er et AI-byrå i Stavanger grunnlagt av en ingeniør med erfaring fra olje- og gassindustrien. Vi leverer AI-tjenester, Claude Code-oppsett og skreddersydd software for energisektoren.";

export const metadata: Metadata = {
  title: "Om oss: AI-byrå og softwareselskap i Stavanger",
  description,
  alternates: { canonical: "/om-oss" },
  openGraph: { images: ["/og-image.png"],
    title: "Om oss: AI-byrå og softwareselskap i Stavanger",
    description,
    url: "/om-oss",
  },
};

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Om Argon Solutions",
  url: "https://www.argonsolutions.no/om-oss",
  about: { "@id": "https://www.argonsolutions.no/#organization" },
  mainEntity: { "@id": "https://www.argonsolutions.no/#organization" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#company-summary", "#technology-stack", "#key-facts"],
  },
};

export default function OmOssPage() {
  const speakableScript = JSON.stringify([
    speakableJsonLd,
    breadcrumbJsonLd([
      { name: "Hjem", url: SITE_URL },
      { name: "Om oss", url: `${SITE_URL}/om-oss` },
    ]),
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: speakableScript }} />
      <OmOssContent />
    </div>
  );
}
