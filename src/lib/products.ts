export interface Product {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  demoUrl: string;
  tags: string[];
  tagsEn: string[];
  image: string;
}

export const products: Product[] = [
  {
    slug: "prosjektstyring",
    title: "Argon Prosjektstyring",
    titleEn: "Argon Prosjektstyring",
    description:
      "Prosjektstyring for offshore med rollebasert tilgang, ROV-systemsporing, prosedyrer, gjøremål og lagerstyring. Full oversikt over aktive prosjekter, status og frister.",
    descriptionEn:
      "Project management for offshore with role-based access, ROV-system tracking, procedures, tasks and inventory control. Full overview of active projects, status and deadlines.",
    demoUrl: "https://project-dashboard-psi-gilt.vercel.app/login",
    tags: ["Next.js", "Supabase", "Prosjektstyring"],
    tagsEn: ["Next.js", "Supabase", "Project management"],
    image: "/products/prosjektstyring-preview.png",
  },
  {
    slug: "crm",
    title: "Argon CRM (Customer Relationship Management)",
    titleEn: "Argon CRM (Customer Relationship Management)",
    description:
      "Komplett kundeoppfølgingssystem bygget for olje og gass. Håndter kunder, prosjekter og oppfølging i ett system.",
    descriptionEn:
      "A complete customer follow-up system built for oil and gas. Manage customers, projects and follow-up in one system.",
    demoUrl: "https://argon-crm-tan.vercel.app/",
    tags: ["Next.js", "Tailwind", "CRM"],
    tagsEn: ["Next.js", "Tailwind", "CRM"],
    image: "/products/crm-preview.png",
  },
  {
    slug: "dashboard",
    title: "Argon Dashboard (Project Board)",
    titleEn: "Argon Dashboard (Project Board)",
    description:
      "Prosjektstyringsdashboard med dataimport, sanntidssynkronisering og full oversikt over fremdrift og kontaktpersoner.",
    descriptionEn:
      "A project management dashboard with data import, real-time synchronization and full overview of progress and contacts.",
    demoUrl: "https://projectboard-delta.vercel.app/",
    tags: ["Next.js", "Supabase", "Dashboard"],
    tagsEn: ["Next.js", "Supabase", "Dashboard"],
    image: "/products/dashboard-preview.svg",
  },
  {
    slug: "docs",
    title: "Argon Docs (PDF Intelligence)",
    titleEn: "Argon Docs (PDF Intelligence)",
    description:
      "AI-drevet PDF-ekstraksjon. Last opp fakturaer, sikkerhetsdokumenter og sertifikater. Få strukturerte data på sekunder.",
    descriptionEn:
      "AI-powered PDF extraction. Upload invoices, safety documents and certificates. Get structured data in seconds.",
    demoUrl: "https://argon-docs.vercel.app/",
    tags: ["Next.js", "Claude AI", "PDF"],
    tagsEn: ["Next.js", "Claude AI", "PDF"],
    image: "/products/docs-preview.svg",
  },
  {
    slug: "risk",
    title: "Argon RSA (Risk & Safety Assessment)",
    titleEn: "Argon RSA (Risk & Safety Assessment)",
    description:
      "Risikostyring med HAZOP, HAZID og bow-tie analyse. Spor risikoer, tiltak og lessons learned på tvers av prosjekter.",
    descriptionEn:
      "Risk management with HAZOP, HAZID and bow-tie analysis. Track risks, mitigations and lessons learned across projects.",
    demoUrl: "https://argon-risk.vercel.app/",
    tags: ["Next.js", "Supabase", "Risikostyring"],
    tagsEn: ["Next.js", "Supabase", "Risk management"],
    image: "/products/risk-preview.svg",
  },
];

export interface Automation {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  icon: "document" | "shield" | "chart";
}

export const automations: Automation[] = [
  {
    slug: "pdf-word",
    title: "PDF/Word-automatisering",
    titleEn: "PDF/Word automation",
    description:
      "Automatisert kvalitetssikring og sammenligning av dokumenter i PDF og Word-format.",
    descriptionEn:
      "Automated quality assurance and comparison of documents in PDF and Word format.",
    features: [
      "Kvalitetssikring av dokumentasjon",
      "Automatisk dokumentsammenligning",
      "Finn endringer mellom versjoner",
      "Digitaliserer håndskrevne dokumenter",
    ],
    featuresEn: [
      "Quality assurance of documentation",
      "Automatic document comparison",
      "Find changes between versions",
      "Digitizes handwritten documents",
    ],
    icon: "document",
  },
  {
    slug: "hms-rapportering",
    title: "HMS-rapportering",
    titleEn: "HSE reporting",
    description:
      "Automatisert compliance-rapporter og HMS-dokumentasjon.",
    descriptionEn:
      "Automated compliance reports and HSE documentation.",
    features: [
      "Automatisk datainnsamling",
      "Compliance-sjekklister",
      "Periodiske rapporter",
      "Varsling ved avvik",
    ],
    featuresEn: [
      "Automatic data collection",
      "Compliance checklists",
      "Periodic reports",
      "Alerts on deviations",
    ],
    icon: "shield",
  },
  {
    slug: "intern-rapportering",
    title: "Intern rapportering",
    titleEn: "Internal reporting",
    description:
      "Samle og distribuer nøkkeltall automatisk på tvers av organisasjonen.",
    descriptionEn:
      "Collect and distribute key figures automatically across the organization.",
    features: [
      "Automatisering av PowerPoint med nøkkeltall",
      "Automatisk distribusjon",
      "Tilpassbare rapportmaler",
      "Eksport til Excel/PDF",
    ],
    featuresEn: [
      "PowerPoint automation with key figures",
      "Automatic distribution",
      "Customizable report templates",
      "Export to Excel/PDF",
    ],
    icon: "chart",
  },
];
