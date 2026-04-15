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
    slug: "prosjektstyring",
    title: "Argon Prosjektstyring",
    description:
      "Prosjektstyring for offshore med rollebasert tilgang, ROV-systemsporing, prosedyrer, gjøremål og lagerstyring. Full oversikt over aktive prosjekter, status og frister.",
    demoUrl: "https://project-dashboard-psi-gilt.vercel.app/login",
    tags: ["Next.js", "Supabase", "Prosjektstyring"],
    image: "/products/prosjektstyring-preview.png",
  },
  {
    slug: "crm",
    title: "Argon CRM (Customer Relationship Management)",
    description:
      "Komplett kundeoppfølgingssystem bygget for olje og gass. Håndter kunder, prosjekter og oppfølging i ett system.",
    demoUrl: "https://argon-crm-tan.vercel.app/",
    tags: ["Next.js", "Tailwind", "CRM"],
    image: "/products/crm-preview.png",
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
    slug: "docs",
    title: "Argon Docs (PDF Intelligence)",
    description:
      "AI-drevet PDF-ekstraksjon. Last opp fakturaer, sikkerhetsdokumenter og sertifikater — få strukturerte data på sekunder.",
    demoUrl: "https://argon-docs.vercel.app/",
    tags: ["Next.js", "Claude AI", "PDF"],
    image: "/products/docs-preview.svg",
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
];

export interface Automation {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: "document" | "shield" | "chart";
}

export const automations: Automation[] = [
  {
    slug: "pdf-word",
    title: "PDF/Word-automatisering",
    description:
      "Automatisert kvalitetssikring og sammenligning av dokumenter i PDF og Word-format.",
    features: [
      "Kvalitetssikring av dokumentasjon",
      "Automatisk dokumentsammenligning",
      "Finn endringer mellom versjoner",
      "Digitaliserer håndskrevne dokumenter",
    ],
    icon: "document",
  },
  {
    slug: "hms-rapportering",
    title: "HMS-rapportering",
    description:
      "Automatisert compliance-rapporter og HMS-dokumentasjon.",
    features: [
      "Automatisk datainnsamling",
      "Compliance-sjekklister",
      "Periodiske rapporter",
      "Varsling ved avvik",
    ],
    icon: "shield",
  },
  {
    slug: "intern-rapportering",
    title: "Intern rapportering",
    description:
      "Samle og distribuer nøkkeltall automatisk på tvers av organisasjonen.",
    features: [
      "Automatisering av PowerPoint med nøkkeltall",
      "Automatisk distribusjon",
      "Tilpassbare rapportmaler",
      "Eksport til Excel/PDF",
    ],
    icon: "chart",
  },
];
