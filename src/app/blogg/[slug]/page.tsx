import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Argon Solutions`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blogg"
        className="text-sm text-text-light hover:text-primary transition-colors"
      >
        &larr; Tilbake til blogg
      </Link>

      <header className="mt-6">
        <time className="text-sm text-text-light">{post.date}</time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-text">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-text-light">{post.description}</p>
      </header>

      {/* Content is sanitized server-side in lib/blog.ts via sanitize-html */}
      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

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
