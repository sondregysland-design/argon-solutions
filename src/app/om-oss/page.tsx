import type { Metadata } from "next";
import { OmOssContent } from "./OmOssContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions er et AI-byrå i Stavanger grunnlagt av ingeniører med erfaring fra olje- og gassindustrien. Vi leverer AI-tjenester, Claude Code-oppsett og skreddersydd software for energisektoren.";

export const metadata: Metadata = {
  title: "Om Argon Solutions: Softwareselskap i Stavanger for olje og gass",
  description,
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: "Om Argon Solutions: Softwareselskap i Stavanger for olje og gass",
    description,
    url: "/om-oss",
  },
};

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Om Argon Solutions",
  url: "https://argonsolutions.no/om-oss",
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
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: speakableScript }} />
      <OmOssContent />
    </div>
  );
}
