import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester — Argon Solutions",
  description: "Software, systemintegrasjon og API-utvikling for olje og gass.",
};

const tjenester = [
  {
    title: "Skreddersydd Software",
    description:
      "Vi utvikler spesialtilpassede applikasjoner som løser deres unike utfordringer. Fra dashboards og overvåkningssystemer til komplett arbeidsflytstyring — vi bygger det dere trenger.",
    features: [
      "Webapplikasjoner og dashboards",
      "Mobilvenlige løsninger",
      "Sanntids datavisualisering",
      "Offline-støtte for feltarbeid",
    ],
  },
  {
    title: "Systemintegrasjon",
    description:
      "Knytt eksisterende systemer sømløst sammen. Vi sørger for at data flyter fritt mellom plattformer, fjerner manuelle prosesser og reduserer feil.",
    features: [
      "ERP- og SAP-integrasjon",
      "Datamigrasjon mellom systemer",
      "Automatiserte arbeidsflyter",
      "Sanntidssynkronisering",
    ],
  },
  {
    title: "API-utvikling",
    description:
      "Robuste, dokumenterte og sikre API-er som gjør systemene deres tilgjengelige og integrerbare. Vi designer og bygger API-er som tåler produksjonslast.",
    features: [
      "RESTful og GraphQL API-er",
      "Autentisering og autorisasjon",
      "API-dokumentasjon",
      "Ytelses- og sikkerhetstesting",
    ],
  },
];

export default function TjenesterPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Våre tjenester</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi leverer teknologiløsninger skreddersydd for energisektoren.
          Her er hva vi kan hjelpe med.
        </p>

        <div className="mt-16 space-y-16">
          {tjenester.map((t, i) => (
            <div
              key={t.title}
              className={`flex flex-col gap-8 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text">{t.title}</h2>
                <p className="mt-3 text-text-light">{t.description}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-xl bg-surface p-12">
                <div className="text-6xl text-primary opacity-20">0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
