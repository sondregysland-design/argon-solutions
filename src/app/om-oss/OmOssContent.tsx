"use client";

import { useT } from "@/i18n/LanguageProvider";

export function OmOssContent() {
  const t = useT();

  const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Claude AI", "Playwright", "Vercel", "Node.js"];
  const values = [
    { title: t("omOss.v1t"), description: t("omOss.v1d") },
    { title: t("omOss.v2t"), description: t("omOss.v2d") },
    { title: t("omOss.v3t"), description: t("omOss.v3d") },
  ];
  const partners = [
    { name: "Anthropic (Claude AI)", desc: t("omOss.p1d") },
    { name: "Vercel", desc: t("omOss.p2d") },
    { name: "Supabase", desc: t("omOss.p3d") },
    { name: "Next.js / React", desc: t("omOss.p4d") },
    { name: "Playwright", desc: t("omOss.p5d") },
    { name: "PandaDoc", desc: t("omOss.p6d") },
  ];
  const facts = [
    { label: t("omOss.factCompanyL"), value: t("omOss.factCompanyV") },
    { label: t("omOss.factLocationL"), value: t("omOss.factLocationV") },
    { label: t("omOss.factIndustryL"), value: t("omOss.factIndustryV") },
    { label: t("omOss.factSpecialL"), value: t("omOss.factSpecialV") },
    { label: t("omOss.factContactL"), value: t("omOss.factContactV") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-4xl font-display font-medium text-text">{t("omOss.h1")}</h1>
      <p id="company-summary" className="mt-4 max-w-2xl text-lg text-text-light">{t("omOss.summary")}</p>

      <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.whoTitle")}</h2>
        <p className="mt-4 text-text-light">{t("omOss.who1")}</p>
        <p className="mt-3 text-text-light">{t("omOss.who2")}</p>
      </div>

      <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.osTitle")}</h2>
        <p className="mt-4 text-text-light">{t("omOss.os1")}</p>
        <p className="mt-3 text-text-light">{t("omOss.os2")}</p>
      </div>

      <div id="technology-stack" className="mt-16 rounded-xl border border-text/10 p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.techTitle")}</h2>
        <p className="mt-4 text-text-light">{t("omOss.techP")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((x) => (
            <span key={x} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{x}</span>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.valuesTitle")}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-text/10 p-6">
              <h3 className="text-lg font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-text-light">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="key-facts" className="mt-16 rounded-xl bg-surface p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.factsTitle")}</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-sm font-semibold text-text">{f.label}</dt>
              <dd className="mt-1 text-text-light">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 rounded-xl border border-text/10 p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.partnersTitle")}</h2>
        <p className="mt-4 text-text-light">{t("omOss.partnersP")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="rounded-lg bg-surface p-4">
              <h3 className="text-sm font-semibold text-text">{p.name}</h3>
              <p className="mt-1 text-[13px] leading-relaxed sm:text-xs text-text-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">{t("omOss.whyTitle")}</h2>
        <p className="mt-4 text-text-light">{t("omOss.whyP")}</p>
      </div>
    </div>
  );
}
