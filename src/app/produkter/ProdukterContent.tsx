"use client";

import { products, automations } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { AutomationCard } from "@/components/AutomationCard";
import { useLanguage } from "@/i18n/LanguageProvider";

const copy = {
  no: {
    heading: "Skreddersydde AI- og softwareløsninger fra Argon Solutions",
    intro:
      "Våre AI-drevne produkter for energisektoren, bygget med Claude Code og moderne AI-tjenester for å automatisere hverdagen. Vi skreddersyr verktøyet dere trenger, dere prøver det gratis den første måneden uten forpliktelse.",
    automationHeading: "Automatisering",
    automationIntro:
      "Spar tid med ferdige automatiseringsløsninger bygget for olje og gass-næringen. Våre automatiseringer håndterer repetitive oppgaver slik at teamet ditt kan fokusere på det som gir verdi.",
  },
  en: {
    heading: "Tailored AI and software solutions from Argon Solutions",
    intro:
      "Our AI-powered products for the energy sector, built with Claude Code and modern AI services to automate everyday work. We tailor the tool you need, and you try it free for the first month with no commitment.",
    automationHeading: "Automation",
    automationIntro:
      "Save time with ready-made automation solutions built for the oil and gas industry. Our automations handle repetitive tasks so your team can focus on what creates value.",
  },
};

export function ProdukterContent() {
  const { locale } = useLanguage();
  const t = copy[locale];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-4xl font-bold text-text">{t.heading}</h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{t.intro}</p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>

      <h2 className="mt-20 text-3xl font-bold text-text">{t.automationHeading}</h2>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{t.automationIntro}</p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {automations.map((a) => (
          <AutomationCard key={a.slug} {...a} />
        ))}
      </div>
    </div>
  );
}
