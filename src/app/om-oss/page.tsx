import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — Argon Solutions",
  description: "To ingeniører fra olje og gass som bygger software for bransjen.",
};

const verdier = [
  {
    title: "Bransjekunnskap",
    description: "Vi kommer fra olje og gass-sektoren selv. Vi forstår kravene til sikkerhet, compliance og pålitelighet fordi vi har jobbet med det.",
  },
  {
    title: "Kvalitet",
    description: "Vi leverer robust software som tåler produksjon. Ingen snarveier, ingen halvferdige løsninger.",
  },
  {
    title: "Nærhet",
    description: "Vi er to personer. Dere snakker direkte med de som bygger — ingen mellomledd, ingen support-køer.",
  },
];

export default function OmOssPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Om Argon Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          To ingeniører fra olje og gass som bygger software for bransjen.
        </p>

        {/* Hvem vi er */}
        <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-bold text-text">Hvem vi er</h2>
          <p className="mt-4 text-text-light">
            Argon Solutions ble startet av to ingeniører med erfaring fra olje
            og gass-sektoren. Vi har sett på nært hold hvordan bransjen
            sliter med utdaterte systemer, manuelle prosesser og verktøy
            som ikke snakker sammen.
          </p>
          <p className="mt-3 text-text-light">
            I stedet for å klage over det, bestemte vi oss for å fikse det.
            Vi kombinerer ingeniørbakgrunnen vår med moderne teknologi som
            AI-agenter, automatisering og skreddersydd software for å
            gjøre hverdagen enklere for selskaper i energisektoren.
          </p>
        </div>

        {/* Verdier */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text">Hva vi står for</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {verdier.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-text-light">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hvorfor Argon */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text">Hvorfor Argon?</h2>
          <p className="mt-4 text-text-light">
            Argon er en edelgass. Stabil, pålitelig og essensiell i
            industrielle prosesser. Akkurat som gassen, leverer vi løsninger
            som bare virker. Stabilt, trygt og tilpasset deres behov.
          </p>
        </div>
      </div>
    </div>
  );
}
