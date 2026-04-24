import type { Metadata } from "next";

const description =
  "Interaktivt HMS-spill for olje og gass. Test kunnskap om sikkerhet, prosedyrer og regelverk.";

export const metadata: Metadata = {
  title: "HMS Spill",
  description,
  alternates: { canonical: "/hms-quiz" },
  openGraph: {
    title: "HMS Spill",
    description,
    url: "/hms-quiz",
  },
};

export default function HmsQuizPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">HMS Spill</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Interaktivt HMS-spill for olje og gass. Perfekt som icebreaker i
          møter, workshops og opplæring.
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
