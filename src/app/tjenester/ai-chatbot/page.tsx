import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import AIChatbotContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions bygger skreddersydde AI-chatbots for norske bedrifter. Koblet mot kunnskapsbase, CRM og fagsystemer. Svarer kunder 24/7 på norsk og engelsk. Drevet av Claude AI.";

export const metadata: Metadata = {
  title: "AI-chatbot for bedrifter: Skreddersydd kundeservice og support",
  description,
  keywords: [
    "AI chatbot",
    "AI chatbot bedrift",
    "ChatGPT bedrift",
    "chatbot Norge",
    "kundeservice AI",
    "Claude AI chatbot",
    "AI-byrå Stavanger",
  ],
  alternates: { canonical: "/tjenester/ai-chatbot" },
  openGraph: { images: ["/og-image.png"],
    title: "AI-chatbot for bedrifter: Skreddersydd kundeservice og support",
    description,
    url: "/tjenester/ai-chatbot",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Chatbot Development",
  name: "AI-chatbot for bedrifter",
  provider: {
    "@type": "Organization",
    "@id": "https://www.argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    {
      "@type": "Offer",
      name: "Pilot",
      description:
        "Skreddersydd chatbot for ett konkret use case (FAQ, leadkvalifisering eller dokumentsøk). 2–4 ukers leveranse.",
    },
    {
      "@type": "Offer",
      name: "Integrert",
      description:
        "Chatbot koblet mot CRM, kunnskapsbase og fagsystemer. Eskalering til menneske, audit-logg og analytics.",
    },
    {
      "@type": "Offer",
      name: "Multi-kanal",
      description:
        "Samme chatbot tilgjengelig på nettside, Slack, Teams, e-post og WhatsApp. Felles kunnskapsbase, samme svar overalt.",
    },
  ],
};

export default function AIChatbotPage() {
  // Safe: serviceJsonLd is a static server-side object defined above, no user input — same pattern as /tjenester/claude-code in this codebase
  const serviceJsonLdString = JSON.stringify([
    serviceJsonLd,
    breadcrumbJsonLd([
      { name: "Hjem", url: SITE_URL },
      { name: "Tjenester", url: `${SITE_URL}/tjenester` },
      { name: "AI-chatbot", url: `${SITE_URL}/tjenester/ai-chatbot` },
    ]),
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serviceJsonLdString }}
      />
      <AIChatbotContent />
      <RelatedServices current="/tjenester/ai-chatbot" />
    </div>
  );
}
