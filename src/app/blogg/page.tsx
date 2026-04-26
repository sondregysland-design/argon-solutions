import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const title = "Blogg | Argon Solutions";
const description =
  "Artikler om AI-automatisering, digitalisering og systemintegrasjon i norsk olje og gass. Innsikt og ekspertise fra Argon Solutions i Stavanger.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogg" },
  openGraph: {
    title,
    description,
    url: "/blogg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Argon Solutions Blogg",
    description:
      "Artikler om AI-automatisering, digitalisering og systemintegrasjon i norsk olje og gass fra Argon Solutions i Stavanger.",
    url: "https://argonsolutions.no/blogg",
    publisher: {
      "@type": "Organization",
      "@id": "https://argonsolutions.no/#organization",
      name: "Argon Solutions",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://argonsolutions.no/blogg/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const blogScript = JSON.stringify(blogListJsonLd);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: blogScript }} />
      <h1 className="text-4xl font-bold tracking-tight text-text">Blogg | Argon Solutions</h1>
      <p className="mt-4 text-lg text-text-light">
        Innsikt om teknologi, automatisering og digitalisering i
        energisektoren fra Argon Solutions i Stavanger.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => {
          const d = new Date(post.date);
          const formatted = d.toLocaleDateString("nb-NO", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <Link href={`/blogg/${post.slug}`} className="flex flex-col flex-1">
                <time className="text-xs font-medium uppercase tracking-wider text-text-light">
                  {formatted}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-text group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-text-light leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>
                {post.keywords.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-text-light"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Les mer &rarr;
                </span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
