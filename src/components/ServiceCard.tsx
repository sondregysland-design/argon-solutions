export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border-cream bg-ivory p-6 shadow-[0_0_0_1px_var(--color-border-cream)] transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sand text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-light">{description}</p>
    </div>
  );
}
