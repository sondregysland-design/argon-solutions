import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ title, description, demoUrl, tags, image }: Product) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
          ))}
        </div>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition hover:text-primary-dark">
          Se demo
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
