const steps = [
  {
    title: "Customer sends WhatsApp message",
    description:
      "A prospect or member messages your gym's WhatsApp number with a question, enquiry, or booking request.",
  },
  {
    title: "AI understands the request",
    description:
      "The AI reads the message, identifies intent — pricing, trial, class times, support — and drafts the right response.",
  },
  {
    title: "Workflow processes the conversation",
    description:
      "Behind the scenes, the request is checked against your schedule, tagged, and routed through the correct automation.",
  },
  {
    title: "Gym receives qualified leads automatically",
    description:
      "You get a ready-to-close lead in your CRM or spreadsheet — booked, tagged, and waiting for a human touch.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-ink/[0.06] bg-ink/[0.015] dark:border-paper/[0.06] dark:bg-paper/[0.015]"
    >
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
              From first message to qualified lead — automatically
            </h2>
            <p className="mt-4 text-ink/55 dark:text-paper/55">
              One conversation triggers the entire pipeline. No app to open,
              no dashboard to check — it happens inside the chat your members
              already use.
            </p>
          </div>

          <ol className="relative flex flex-col gap-2">
            <div
              className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-signal via-pulse to-transparent sm:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex gap-5 rounded-2xl p-4 transition-colors hover:bg-ink/[0.03] dark:hover:bg-paper/[0.03] sm:p-5"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper font-display text-sm font-semibold text-ink dark:border-paper/15 dark:bg-ink dark:text-paper">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-base font-semibold text-ink dark:text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55 dark:text-paper/50">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
