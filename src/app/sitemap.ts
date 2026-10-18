import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.argonsolutions.no";
  // Oppdater ved reelle innholdsendringer, ikke per build.
  // 2026-09-18: SEO-audit + kursomlegging berørte nesten alle sider.
  const STATIC_LASTMOD = new Date("2026-09-18");
  // Sider med reelle innholdsendringer etter det.
  const AUDIT_OCT = new Date("2026-10-18");

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blogg/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/oppsett`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.97,
    },
    {
      url: `${baseUrl}/kurs`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${baseUrl}/kurs/claude-code-kurs-stavanger`, lastModified: AUDIT_OCT, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${baseUrl}/kurs/ai-kurs-bedrift-stavanger`, lastModified: AUDIT_OCT, changeFrequency: "monthly" as const, priority: 0.95 },
    {
      url: `${baseUrl}/tjenester`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${baseUrl}/tjenester/claude-code`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/tjenester/ai-chatbot`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/tjenester/skreddersydd-software`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tjenester/systemintegrasjon`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tjenester/ai-agenter`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tjenester/ai-strategi`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tjenester/ai-automatisering`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/kunstig-intelligens`, lastModified: AUDIT_OCT, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: `${baseUrl}/en/ai-agency-stavanger`, lastModified: STATIC_LASTMOD, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/en/claude-code-course`, lastModified: AUDIT_OCT, changeFrequency: "monthly" as const, priority: 0.75 },
    {
      url: `${baseUrl}/produkter`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/referanser`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/om-oss`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: AUDIT_OCT,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/personvern`,
      lastModified: AUDIT_OCT,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/hms-quiz`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
