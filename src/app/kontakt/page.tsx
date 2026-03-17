import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Argon Solutions",
  description: "Ta kontakt med Argon Solutions for en uforpliktende samtale.",
};

export default function KontaktPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Kontakt oss</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Har du et prosjekt eller en utfordring vi kan hjelpe med? Send oss en
          melding, så tar vi kontakt.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-text">E-post</h3>
              <p className="mt-1 text-text-light">post@argonsolutions.no</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Telefon</h3>
              <p className="mt-1 text-text-light">+47 XXX XX XXX</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Lokasjon</h3>
              <p className="mt-1 text-text-light">Stavanger, Norge</p>
            </div>
            <div className="rounded-xl bg-surface p-6">
              <h3 className="font-semibold text-text">Responstid</h3>
              <p className="mt-1 text-sm text-text-light">
                Vi svarer vanligvis innen 24 timer på hverdager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
