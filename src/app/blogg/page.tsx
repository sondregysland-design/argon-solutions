import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const title = "Blogg";
const description =
  "Artikler om AI, automatisering og digitalisering i olje og gass-industrien. Innsikt fra Argon Solutions.";

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

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-text">Blogg</h1>
      <p className="mt-4 text-lg text-text-light">
        Innsikt om teknologi, automatisering og digitalisering i
        energisektoren.
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
