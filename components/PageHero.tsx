export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink/[0.06] dark:border-paper/[0.06]">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-40" />
      <div className="shell relative py-16 sm:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-xl text-ink/55 dark:text-paper/55">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
