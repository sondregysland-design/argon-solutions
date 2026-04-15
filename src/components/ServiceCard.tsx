import Link from "next/link";

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-light">{description}</p>
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
