const nodes = [
  { label: "Message", detail: "\u201CHi, do you have a 7-day trial?\u201D" },
  { label: "AI understands", detail: "Intent: trial request" },
  { label: "Workflow runs", detail: "Checks slots, tags lead" },
  { label: "Gym receives lead", detail: "Qualified & booked" },
];

export default function PulseFlow() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 720 120"
        fill="none"
        className="absolute inset-x-0 top-[26px] hidden w-full sm:block"
        aria-hidden="true"
      >
        <path
          id="flow-path"
          d="M60 20 C 200 20, 200 20, 240 20 L 480 20 C 520 20, 520 20, 660 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 7"
          className="text-ink/15 dark:text-paper/15"
        />
        <circle r="4.5" className="fill-signal drop-shadow-[0_0_8px_rgba(198,255,61,0.9)]">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M60 20 C 200 20, 200 20, 240 20 L 480 20 C 520 20, 520 20, 660 20"
          />
        </circle>
      </svg>

      <ol className="relative grid gap-4 sm:grid-cols-4 sm:gap-3">
        {nodes.map((node, i) => (
          <li
            key={node.label}
            className="card animate-fade-up relative flex flex-col gap-1 px-4 py-4"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <span className="font-display text-xs font-semibold uppercase tracking-wide text-ink/40 dark:text-paper/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold text-ink dark:text-paper">
              {node.label}
            </span>
            <span className="text-xs leading-snug text-ink/50 dark:text-paper/45">
              {node.detail}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
