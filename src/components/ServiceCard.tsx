import Link from "next/link";

export function ServiceCard({
  icon,
  title,
  description,
  href,
  isExpandable,
  isExpanded,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  isExpandable?: boolean;
  isExpanded?: boolean;
}) {
  const content = (
    <div className={`h-full rounded-xl border p-6 transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${isExpanded ? "border-primary/30 bg-blue-50/40 shadow-[0_4px_24px_rgba(30,64,175,0.08)]" : "border-gray-100 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"}`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
      {isExpandable && (
        <div className={`mt-3 flex items-center gap-1 text-xs font-medium ${isExpanded ? "text-primary" : "text-primary/70"}`}>
          <span>{isExpanded ? "Lukk" : "Les mer"}</span>
          <svg className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
