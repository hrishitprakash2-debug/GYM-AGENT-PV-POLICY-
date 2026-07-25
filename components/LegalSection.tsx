export default function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-ink/[0.06] py-8 last:border-none dark:border-paper/[0.06]">
      <h2 className="font-display text-lg font-semibold text-ink dark:text-paper">
        {title}
      </h2>
      <div className="prose-legal mt-3 space-y-3 text-sm leading-relaxed text-ink/60 dark:text-paper/55">
        {children}
      </div>
    </section>
  );
}
