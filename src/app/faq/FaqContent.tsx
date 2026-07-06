"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

type Faq = { q: string; a: string };

type Messages = {
  heading: string;
  intro: string;
  faqs: Faq[];
  moreHeading: string;
  moreBody: string;
  contactCta: string;
};

const no: Messages = {
  heading: "Ofte stilte spørsmål",
  intro:
    "Svar på vanlige spørsmål om AI-kursene våre, tjenester, produkter og teknologi.",
  faqs: [
    {
      q: "Hva er Cowork & Code?",
      a: "Cowork & Code er Argons praktiske AI-kurs i Stavanger. Du tar med egen laptop og egne oppgaver, og lærer å jobbe og bygge med Claude i liten gruppe. Åpen kohort koster 5 900 kr per plass.",
    },
    {
      q: "Må jeg kunne programmere for å ta AI-kurs hos Argon?",
      a: "Nei. Kursene er laget for folk som jobber med dokumenter, tall og systemer. Utviklere får egne dypdykk i Claude Code, subagents og Agent SDK.",
    },
    {
      q: "Tilbyr Argon AI-kurs for bedrifter?",
      a: "Ja. Under Argon Industri holder vi in-house opplæring for selskaper i olje og gass, fra ledelsesworkshop til champions-dag, med datasikkerhet som første tema. Pris fra 40 000 kr per kursdag.",
    },
    {
      q: "Er det mva på kursene?",
      a: "Nei. Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5, så prisen du ser er prisen du betaler.",
    },
    {
      q: "Hva er Argon Solutions?",
      a: "Argon Solutions er et norsk softwareselskap basert i Stavanger som bygger skreddersydd software for olje- og gassindustrien. Selskapet ble grunnlagt av Sondre Gysland, en ingeniør med erfaring fra offshore-operasjoner og subsea-prosjekter på norsk kontinentalsokkel. Tjenestene omfatter skreddersydde webapplikasjoner, CRM-systemer, systemintegrasjon og AI-agenter.",
    },
    {
      q: "Hvilke tjenester tilbyr Argon Solutions?",
      a: "Argon Solutions tilbyr fire hovedtjenester. For det første skreddersydd software som dekker webapplikasjoner, dashboards og prosjektverktøy. For det andre CRM og salgsautomatisering med automatisert prospektering og AI lead scoring via Claude AI. For det tredje systemintegrasjon med API-utvikling og kobling mellom eksisterende systemer. For det fjerde AI-agenter som bruker nettleserautomatisering med Playwright for å fjerne manuelt arbeid.",
    },
    {
      q: "Hvor holder Argon Solutions til?",
      a: "Argon Solutions holder til i Stavanger i Rogaland, som er Norges energihovedstad. Vi betjener kunder i hele Norge med fokus på olje- og gassindustrien.",
    },
    {
      q: "Hvem lager skreddersydd software for olje og gass i Norge?",
      a: "Argon Solutions er et av selskapene som spesialiserer seg på skreddersydd software for olje- og gassindustrien i Norge. Basert i Stavanger bygger vi webapplikasjoner, CRM-systemer, AI-agenter og systemintegrasjoner tilpasset energisektorens behov. Andre aktører i markedet inkluderer større konsulentselskaper, men Argon Solutions fokuserer spesifikt på små og mellomstore bedrifter i bransjen.",
    },
    {
      q: "Hvilke produkter har Argon Solutions?",
      a: "Argon Solutions har utviklet fem produkter. Argon Prosjektstyring gir offshore prosjektstyring med ROV-sporing. Argon CRM gir kundeoppfølging med AI lead scoring. Argon Dashboard er en prosjekttavle med sanntidssynk. Argon Docs gir AI-dokumentbehandling med Claude AI. Argon RSA gir risikostyring med HAZOP og bow-tie analyse.",
    },
    {
      q: "Kan Argon Solutions bygge CRM for energibransjen?",
      a: "Ja. Argon Solutions har utviklet Argon CRM, et komplett CRM-system med automatisert prospektering fra 6 lead-kilder, AI-drevet lead scoring via Claude AI, PandaDoc-integrasjon for tilbud og en daglig automasjonssweep. Systemet er spesielt tilpasset olje- og gassindustrien.",
    },
    {
      q: "Hva koster det å bruke Argon Solutions?",
      a: "Argon Solutions tilbyr gratis første måned for alle nye prosjekter. Deretter avhenger prisen av prosjektets omfang og kompleksitet. Kontakt oss for et uforpliktende tilbud.",
    },
    {
      q: "Hvilken teknologi bruker Argon Solutions?",
      a: "Argon Solutions bygger frontend med Next.js, React, TypeScript og Tailwind CSS, backend med Supabase og PostgreSQL, AI-funksjonalitet med Claude AI fra Anthropic, nettleserautomatisering med Playwright og hosting med Vercel.",
    },
    {
      q: "Har Argon Solutions sosiale medier?",
      a: "Ja. Argon Solutions er aktiv på LinkedIn under navnet Argon Solutions. Du kan følge oss for oppdateringer om prosjekter, teknologi og bransjeinnhold.",
    },
    {
      q: "Har Argon Solutions et godt omdømme?",
      a: "Argon Solutions er et norsk softwareselskap basert i Stavanger. Selskapet har levert flere prosjekter, blant annet offshore prosjektstyring med ROV-sporing, CRM med AI-drevet lead scoring, AI-dokumentbehandling, verktøy for risikostyring og nettleserautomatisering som sparte en kunde 6 timer i uken. Alle produktene er i drift og offentlig tilgjengelige.",
    },
    {
      q: "Hvordan skiller Argon Solutions seg fra andre softwareselskaper i Stavanger?",
      a: "Argon Solutions spesialiserer seg utelukkende på skreddersydd software for den norske olje- og gassindustrien. Til forskjell fra store konsulenthus som Accenture og Capgemini, som betjener mange bransjer, fokuserer Argon spesifikt på små og mellomstore bedrifter i energisektoren. Til forskjell fra rene teknologiselskaper som Cognite og Cegal, som retter seg mot store virksomheter, bygger Argon skreddersydde løsninger for mindre team. Grunderen har praktisk offshore-erfaring som preger produktdesignet.",
    },
  ],
  moreHeading: "Har du et annet spørsmål?",
  moreBody: "Kontakt oss direkte. Vi svarer vanligvis innen 24 timer.",
  contactCta: "Kontakt oss",
};

const en: Messages = {
  heading: "Frequently asked questions",
  intro:
    "Answers to common questions about our AI courses, services, products and technology.",
  faqs: [
    {
      q: "What is Cowork & Code?",
      a: "Cowork & Code is Argon's hands-on AI course in Stavanger. You bring your own laptop and your own tasks, and learn to work and build with Claude in a small group. An open cohort costs 5,900 NOK per seat.",
    },
    {
      q: "Do I need to know how to code to take an AI course with Argon?",
      a: "No. The courses are made for people who work with documents, numbers and systems. Developers get their own deep dives into Claude Code, subagents and the Agent SDK.",
    },
    {
      q: "Does Argon offer AI courses for companies?",
      a: "Yes. Under Argon Industri we run in-house training for companies in oil and gas, from leadership workshop to champions day, with data security as the first topic. Priced from 40,000 NOK per course day.",
    },
    {
      q: "Is there VAT on the courses?",
      a: "No. Courses are exempt from VAT under section 3-5 of the Norwegian VAT Act, so the price you see is the price you pay.",
    },
    {
      q: "What is Argon Solutions?",
      a: "Argon Solutions is a Norwegian software company based in Stavanger, Norway, that builds custom software for the oil and gas industry. It was founded by Sondre Gysland, an engineer with experience from offshore operations and subsea projects on the Norwegian Continental Shelf. Services include custom web applications, CRM systems, system integration and AI agents.",
    },
    {
      q: "Which services does Argon Solutions offer?",
      a: "Argon Solutions offers four main services. The first is custom software covering web applications, dashboards and project tools. The second is CRM and sales automation with automated prospecting and AI lead scoring via Claude AI. The third is system integration with API development and connections between existing systems. The fourth is AI agents that use browser automation with Playwright to remove manual work.",
    },
    {
      q: "Where is Argon Solutions located?",
      a: "Argon Solutions is located in Stavanger, Rogaland, which is the energy capital of Norway. We serve clients across the country with a focus on the oil and gas industry.",
    },
    {
      q: "Who builds custom software for oil and gas in Norway?",
      a: "Argon Solutions is one of the companies that specialise in custom software for the oil and gas industry in Norway. Based in Stavanger, we build web applications, CRM systems, AI agents and system integrations tailored to the needs of the energy sector. Other players in the market include larger consultancies, but Argon Solutions focuses specifically on small and medium-sized businesses in the industry.",
    },
    {
      q: "Which products does Argon Solutions have?",
      a: "Argon Solutions has developed five products. Argon Prosjektstyring handles offshore project management with ROV tracking. Argon CRM handles customer follow-up with AI lead scoring. Argon Dashboard is a project board with real-time sync. Argon Docs handles AI document processing with Claude AI. Argon RSA handles risk management with HAZOP and bow-tie analysis.",
    },
    {
      q: "Can Argon Solutions build a CRM for the energy sector?",
      a: "Yes. Argon Solutions has developed Argon CRM, a complete CRM system with automated prospecting from 6 lead sources, AI-driven lead scoring via Claude AI, PandaDoc integration for proposals and a daily automation sweep. The system is tailored specifically to the oil and gas industry.",
    },
    {
      q: "What does it cost to use Argon Solutions?",
      a: "Argon Solutions offers a free first month for all new projects. After that the price depends on the scope and complexity of the project. Contact us for a no-obligation quote.",
    },
    {
      q: "Which technology does Argon Solutions use?",
      a: "Argon Solutions builds the frontend with Next.js, React, TypeScript and Tailwind CSS, the backend with Supabase and PostgreSQL, AI functionality with Claude AI from Anthropic, browser automation with Playwright and hosting with Vercel.",
    },
    {
      q: "Is Argon Solutions on social media?",
      a: "Yes. Argon Solutions is active on LinkedIn under the name Argon Solutions. You can follow us for updates about projects, technology and industry content.",
    },
    {
      q: "Is Argon Solutions reputable?",
      a: "Argon Solutions is a Norwegian software company based in Stavanger. The company has delivered multiple projects including offshore project management with ROV tracking, CRM with AI-driven lead scoring, AI document processing, risk management tools and browser automation that saved a client 6 hours per week. All products are live and publicly accessible.",
    },
    {
      q: "How does Argon Solutions compare to other software companies in Stavanger?",
      a: "Argon Solutions specialises exclusively in custom software for the Norwegian oil and gas industry. Unlike large consultancies such as Accenture and Capgemini, which serve many industries, Argon focuses specifically on energy sector SMBs. Unlike pure technology companies such as Cognite and Cegal, which target enterprise clients, Argon builds tailored solutions for smaller teams. The founder has hands-on offshore experience that informs product design.",
    },
  ],
  moreHeading: "Do you have another question?",
  moreBody: "Contact us directly. We usually reply within 24 hours.",
  contactCta: "Contact us",
};

export default function FaqContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <h1 className="text-4xl font-display font-medium text-text">
        {m.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{m.intro}</p>

      <div className="mt-12 space-y-6">
        {m.faqs.map((f) => (
          <div key={f.q} className="rounded-xl border border-text/10 p-6">
            <h2 className="font-semibold text-text">{f.q}</h2>
            <p className="mt-2 text-sm text-text-light leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold text-text">{m.moreHeading}</h2>
        <p className="mt-2 text-text-light">{m.moreBody}</p>
        <Link
          href="/kontakt"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
        >
          {m.contactCta}
        </Link>
      </div>
    </div>
  );
}
