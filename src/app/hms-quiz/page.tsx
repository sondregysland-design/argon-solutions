import type { Metadata } from "next";

const description =
  "Gratis interaktivt HMS-spill fra Argon Solutions for olje- og gassindustrien. Test kunnskap om sikkerhet, prosedyrer og regelverk offshore.";

export const metadata: Metadata = {
  title: "HMS Spill | Gratis sikkerhetsquiz for olje og gass | Argon Solutions",
  description,
  alternates: { canonical: "/hms-quiz" },
  openGraph: {
    title: "HMS Spill | Gratis sikkerhetsquiz for olje og gass | Argon Solutions",
    description,
    url: "/hms-quiz",
  },
};

export default function HmsQuizPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">HMS Spill fra Argon Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Gratis interaktivt HMS-spill for olje- og gassindustrien. Perfekt
          som icebreaker i møter, workshops og opplæring. Bygget av
          Argon Solutions i Stavanger.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <iframe
            src="https://sondregysland-design.github.io/argon-hms-quize/"
            width="100%"
            height="700"
            style={{ border: "none" }}
            title="Argon HMS Quiz"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
