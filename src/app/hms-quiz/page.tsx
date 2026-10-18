import type { Metadata } from "next";

const description =
  "Gratis interaktivt HMS-spill fra Argon Solutions for olje- og gassindustrien. Test kunnskap om sikkerhet, prosedyrer og regelverk offshore.";

export const metadata: Metadata = {
  title: "HMS Spill: Gratis sikkerhetsquiz for olje og gass",
  description,
  alternates: { canonical: "/hms-quiz" },
  openGraph: { images: ["/og-image.png"],
    title: "HMS Spill: Gratis sikkerhetsquiz for olje og gass",
    description,
    url: "/hms-quiz",
  },
};

const quizJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HMS Spill fra Argon Solutions",
  url: "https://www.argonsolutions.no/hms-quiz",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  inLanguage: "nb-NO",
  isAccessibleForFree: true,
  description:
    "Gratis interaktivt HMS-spill for olje- og gassindustrien. Test kunnskap om sikkerhet, prosedyrer og regelverk offshore.",
  creator: { "@type": "Organization", "@id": "https://www.argonsolutions.no/#organization", name: "Argon Solutions" },
};

export default function HmsQuizPage() {
  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: static server-side constant, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">HMS Spill fra Argon Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Gratis interaktivt HMS-spill for olje- og gassindustrien. Perfekt
          som icebreaker i møter, workshops og opplæring. Bygget av
          Argon Solutions i Stavanger.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl border border-text/15 bg-white shadow-sm">
          {/* Fast 700px stakk 106px under folden på iPhone. Høyden følger nå
              skjermen, med 700px som tak på store skjermer. */}
          <iframe
            src="https://sondregysland-design.github.io/argon-hms-quize/"
            width="100%"
            height="700"
            loading="lazy"
            className="block h-[calc(100svh-13rem)] min-h-[420px] w-full max-h-[700px]"
            style={{ border: "none" }}
            title="Argon HMS Quiz"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
