export interface Product {
  slug: string;
  title: string;
  description: string;
  demoUrl: string;
  tags: string[];
  image: string;
}

export const products: Product[] = [
  {
    slug: "crm",
    title: "Argon CRM (Customer Relationship Management)",
    description:
      "Komplett kundeoppfølgingssystem bygget for olje og gass. Håndter kunder, prosjekter og oppfølging i ett system.",
    demoUrl: "https://argon-crm-tan.vercel.app/",
    tags: ["Next.js", "Tailwind", "CRM"],
    image: "/products/crm-preview.svg",
  },
  {
    slug: "risk",
    title: "Argon RSA (Risk & Safety Assessment)",
    description:
      "Risikostyring med HAZOP, HAZID og bow-tie analyse. Spor risikoer, tiltak og lessons learned på tvers av prosjekter.",
    demoUrl: "https://argon-risk.vercel.app/",
    tags: ["Next.js", "Supabase", "Risikostyring"],
    image: "/products/risk-preview.svg",
  },
  {
    slug: "dashboard",
    title: "Argon Dashboard (Project Board)",
    description:
      "Prosjektstyringsdashboard med dataimport, sanntidssynkronisering og full oversikt over fremdrift og kontaktpersoner.",
    demoUrl: "https://projectboard-delta.vercel.app/",
    tags: ["Next.js", "Supabase", "Dashboard"],
    image: "/products/dashboard-preview.svg",
  },
  {
    slug: "onboarding",
    title: "Argon Onboarding (Employee Onboarding)",
    description:
      "Komplett onboarding-system for nye ansatte. Spor fremgang, kurs, sertifikater og generer CV automatisk.",
    demoUrl: "https://argon-onboarding.vercel.app/admin",
    tags: ["Next.js", "Prisma", "Onboarding"],
    image: "/products/onboarding-preview.svg",
  },
];

export const miniProducts: Product[] = [
  {
    slug: "hms-spill",
    title: "Argon HMS Spill",
    description:
      "Interaktivt HMS-spill for olje og gass. Perfekt som icebreaker i møter, workshops og opplæring. Test kunnskap om sikkerhet, prosedyrer og regelverk.",
    demoUrl: "/hms-quiz",
    tags: ["Opplæring", "HMS", "Icebreaker"],
    image: "/products/hms-quiz-preview.svg",
  },
];
