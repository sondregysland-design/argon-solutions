import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import sanitizeHtml from "sanitize-html";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// gray-matter parser YAML-datoer uten fnutter til Date. String(Date) gir
// "Wed Jul 08 2026 ...", som er ugyldig for schema.org datePublished.
// Normaliser alt til ISO 8601 (YYYY-MM-DD).
function isoDate(value: unknown): string {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const s = String(value).trim();
  const parsed = new Date(s);
  return Number.isNaN(parsed.getTime()) ? s : parsed.toISOString().slice(0, 10);
}

// Visningsformat for datoer. Selve verdien holdes på ISO-form i schema
// og i time-elementets dateTime-attributt.
export function formatDateNo(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" });
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Frontmatter-feltet `updated`. Faller tilbake til `date` når posten
   *  aldri er revidert, slik at dateModified alltid har en verdi. */
  updated: string;
  keywords: string[];
  content: string;
  faq: BlogFaq[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  keywords: string[];
}

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: isoDate(data.date),
      updated: data.updated ? isoDate(data.updated) : isoDate(data.date),
      keywords: data.keywords || [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdown } = matter(raw);

  const result = await remark().use(html).process(markdown);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: isoDate(data.date),
    updated: data.updated ? isoDate(data.updated) : isoDate(data.date),
    keywords: data.keywords || [],
    faq: Array.isArray(data.faq) ? data.faq.filter((f: BlogFaq) => f && f.q && f.a) : [],
    content: sanitizeHtml(result.toString(), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(["h1", "h2", "h3", "h4", "img"]),
      allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ["src", "alt"] },
    }),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
