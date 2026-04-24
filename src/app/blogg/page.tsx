import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const title = "Blogg — Argon Solutions";
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
      <h1 className="text-4xl font-bold tracking-tight text-text">Blogg — Argon Solutions</h1>
      <p className="mt-4 text-lg text-text-light">
        Innsikt om teknologi, automatisering og digitalisering i
        energisektoren fra Argon Solutions i Stavanger.
      </p>

      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <Link href={`/blogg/${post.slug}`}>
              <time className="text-sm text-text-light">{post.date}</time>
              <h2 className="mt-2 text-xl font-semibold text-text group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-text-light leading-relaxed">
                {post.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary">
                Les mer &rarr;
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
