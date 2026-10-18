import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs, getAllPosts, formatDateNo, type BlogPostMeta } from "@/lib/blog";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function getRelatedPosts(currentSlug: string, currentKeywords: string[]): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const lowered = currentKeywords.map((k) => k.toLowerCase());
  const scored = all.map((p) => {
    const overlap = p.keywords.filter((k) =>
      lowered.includes(k.toLowerCase())
    ).length;
    return { post: p, score: overlap };
  });
  const ranked = scored.sort((a, b) => b.score - a.score).map((s) => s.post);
  return ranked.slice(0, 3);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blogg/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blogg/${slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.keywords);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    author: [
      {
        "@type": "Person",
        "@id": "https://www.argonsolutions.no/#founder",
        name: "Sondre Gysland",
        jobTitle: "Grunder, Argon Solutions",
        url: "https://www.linkedin.com/company/argonsolutions/",
      },
      {
        "@type": "Organization",
        "@id": "https://www.argonsolutions.no/#organization",
        name: "Argon Solutions",
        url: "https://www.argonsolutions.no",
      },
    ],
    publisher: {
      "@type": "Organization",
      "@id": "https://www.argonsolutions.no/#organization",
      name: "Argon Solutions",
      url: "https://www.argonsolutions.no",
      logo: { "@type": "ImageObject", url: "https://www.argonsolutions.no/favicon.svg" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.argonsolutions.no/blogg/${slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  // FAQPage-schema når artikkelen har en faq-blokk i frontmatter.
  // Spørsmålene skal også stå som synlig tekst i selve artikkelen.
  const faqJsonLd =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `https://www.argonsolutions.no/blogg/${slug}#faq`,
          inLanguage: "nb-NO",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
  const breadcrumbLd = breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Blogg", url: `${SITE_URL}/blogg` },
    { name: post.title, url: `${SITE_URL}/blogg/${slug}` },
  ]);
  const allJsonLd = faqJsonLd
    ? [jsonLd, faqJsonLd, breadcrumbLd]
    : [jsonLd, breadcrumbLd];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: jsonLd is built from our own markdown frontmatter, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }}
      />
      <Link
        href="/blogg"
        className="tap-target-inline text-sm text-text-light hover:text-primary transition-colors"
      >
        &larr; Tilbake til blogg
      </Link>

      <header className="mt-6">
        <time dateTime={post.date} className="text-sm text-text-light">{formatDateNo(post.date)}</time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-text">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-text-light">{post.description}</p>
        <div className="mt-6 flex items-center gap-3 border-t border-text/10 pt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            SG
          </div>
          <div>
            <p className="text-sm font-medium text-text">Sondre</p>
            <p className="text-xs text-text-light">
              Grunder, Argon Solutions ·{" "}
              <a
                href="https://www.linkedin.com/company/argonsolutions/"
                rel="author"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Content is sanitized server-side in lib/blog.ts via sanitize-html */}
      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.faq.length > 0 && (
        <section className="mt-16 border-t border-text/10 pt-10">
          <h2 className="text-2xl font-display font-medium text-text">
            Ofte stilte spørsmål
          </h2>
          <dl className="mt-6 space-y-6">
            {post.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-text">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-text-light">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <aside className="mt-16 border-t border-text/10 pt-10">
          <h2 className="text-2xl font-display font-medium text-text">
            Relaterte artikler
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blogg/${rp.slug}`}
                className="group block rounded-xl border border-text/10 p-5 transition-colors hover:border-primary/30 hover:bg-surface"
              >
                <time dateTime={rp.date} className="text-xs text-text-light">{formatDateNo(rp.date)}</time>
                <h3 className="mt-2 text-base font-semibold text-text group-hover:text-primary transition-colors">
                  {rp.title}
                </h3>
                <p className="mt-2 text-sm text-text-light line-clamp-3">
                  {rp.description}
                </p>
              </Link>
            ))}
          </div>
        </aside>
      )}

      <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold text-text">
          Klar for å modernisere systemene?
        </h2>
        <p className="mt-2 text-text-light">
          Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe.
        </p>
        <Link
          href="/kontakt"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Kontakt oss
        </Link>
      </div>
    </article>
  );
}
