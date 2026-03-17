import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — Argon Solutions",
  description: "Hvem vi er og hvorfor vi gjør det vi gjør.",
};

const verdier = [
  {
    title: "Kvalitet",
    description: "Vi leverer robust software som tåler produksjon. Ingen snarveier.",
  },
  {
    title: "Nærhet",
    description: "Som et mindre selskap er vi tett på kundene våre. Dere snakker direkte med de som bygger.",
  },
  {
    title: "Bransjekunnskap",
    description: "Vi kjenner olje og gass-næringen og forstår de unike kravene til sikkerhet, compliance og pålitelighet.",
  },
];

export default function OmOssPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Om Argon Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi er et norsk systemutvikler-selskap med fokus på energisektoren.
        </p>

        {/* Misjon */}
        <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-bold text-text">Vår misjon</h2>
          <p className="mt-4 text-text-light">
            Argon Solutions ble startet med én klar ambisjon: å gjøre hverdagen
            enklere for norske olje og gass-selskaper gjennom smartere software.
            Vi tror at teknologi skal jobbe for mennesker — ikke motsatt.
          </p>
          <p className="mt-3 text-text-light">
            Med erfaring fra bransjen vet vi at mange selskaper sitter med
            utdaterte systemer, manuelle prosesser og dårlig integrerte
            plattformer. Det fikser vi.
          </p>
        </div>

        {/* Verdier */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text">Våre verdier</h2>
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
            Argon er en edelgass — stabil, pålitelig og essensiell i
            industrielle prosesser. Akkurat som gassen, leverer vi løsninger
            som bare virker. Stabilt, trygt og tilpasset deres behov.
          </p>
        </div>
      </div>
    </div>
  );
}
