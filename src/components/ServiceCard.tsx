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
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-light">{description}</p>
    </div>
  );
}
