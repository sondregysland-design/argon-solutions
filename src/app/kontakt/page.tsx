import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BookingSection } from "@/components/BookingSection";

const description =
  "Kontakt Argon Solutions i Stavanger for skreddersydd software, CRM-systemer og AI-løsninger for olje og gass. Book en gratis konsultasjon.";

export const metadata: Metadata = {
  title: "Kontakt Argon Solutions — Software for olje og gass i Stavanger",
  description,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt Argon Solutions — Software for olje og gass i Stavanger",
    description,
    url: "/kontakt",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt Argon Solutions",
  url: "https://argonsolutions.no/kontakt",
  description:
    "Kontakt Argon Solutions i Stavanger for skreddersydd software, CRM-systemer og AI-løsninger for olje og gass.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+47-452-09-979",
      email: "post@argonsolutions.no",
      contactType: "customer service",
      availableLanguage: ["Norwegian", "English"],
      areaServed: "NO",
    },
  },
};

export default function KontaktPage() {
  // Safe: contactJsonLd is server-side static data, not user input
  const jsonLdScript = JSON.stringify(contactJsonLd);

  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">Kontakt Argon Solutions</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Argon Solutions bygger skreddersydd software, CRM-systemer og AI-agenter
          for olje- og gassindustrien i Norge. Har du et prosjekt eller en
          utfordring vi kan hjelpe med? Send oss en melding, så tar vi kontakt.
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
              <p className="mt-1 text-text-light">+47 452 09 979</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Lokasjon</h3>
              <p className="mt-1 text-text-light">Stavanger, Rogaland, Norge</p>
            </div>
            <div>
              <h3 className="font-semibold text-text">Sosiale medier</h3>
              <div className="mt-1 space-y-1">
                <a href="https://www.instagram.com/argonsolutions/" target="_blank" rel="noopener noreferrer" className="block text-text-light hover:text-primary transition-colors">Instagram: @argonsolutions</a>
                <a href="https://www.linkedin.com/company/argon-solutions-no/" target="_blank" rel="noopener noreferrer" className="block text-text-light hover:text-primary transition-colors">LinkedIn: Argon Solutions</a>
              </div>
            </div>
            <div className="rounded-xl bg-surface p-6">
              <h3 className="font-semibold text-text">Responstid</h3>
              <p className="mt-1 text-sm text-text-light">
                Vi svarer vanligvis innen 24 timer på hverdager.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="mt-20 border-t border-gray-200 pt-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">Begrenset tilgjengelighet</span>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent" />
          </div>
          <h2 className="text-3xl font-[family-name:var(--font-playfair)] font-medium text-text mt-4">Book en konsultasjon</h2>
          <p className="mt-4 max-w-2xl text-text-light">
            Vi tilbyr et begrenset antall konsultasjoner hver uke. Velg en av de ledige tidene for en 30-minutters samtale.
          </p>
          <div className="mt-8 rounded-xl bg-white shadow-sm border border-gray-100 p-6 md:p-8">
            <BookingSection />
          </div>
        </div>
      </div>
    </div>
  );
}
