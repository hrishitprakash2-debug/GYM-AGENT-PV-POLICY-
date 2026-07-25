const features = [
  {
    title: "AI Chatbot",
    description:
      "A trained conversational agent that answers member questions in natural language, day or night.",
    icon: "chat",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Every reply, reminder, and follow-up sent automatically over WhatsApp — no manual typing required.",
    icon: "bolt",
  },
  {
    title: "Lead Qualification",
    description:
      "Incoming enquiries are scored and sorted so your team only spends time on serious prospects.",
    icon: "filter",
  },
  {
    title: "Trial Booking",
    description:
      "Prospects pick an open slot and confirm their trial session directly inside the chat.",
    icon: "calendar",
  },
  {
    title: "CRM Integration",
    description:
      "Every conversation and lead syncs to the systems your front desk already relies on.",
    icon: "layers",
  },
  {
    title: "Google Sheets",
    description:
      "Leads, bookings, and follow-ups land in a live spreadsheet your team can open anytime.",
    icon: "sheet",
  },
  {
    title: "Meta Cloud API",
    description:
      "Built directly on Meta's official WhatsApp Business platform — no third-party bridges.",
    icon: "shield",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Members get instant answers about hours, pricing, and plans at any time of day.",
    icon: "clock",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 3.6A7.96 7.96 0 0 1 21 12Z" />
          <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 5h16M7 12h10M10 19h4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 8.5 5-8.5 5-8.5-5L12 3Z" />
          <path d="m3.5 13.5 8.5 5 8.5-5" />
        </svg>
      );
    case "sheet":
      return (
        <svg {...common}>
          <rect x="4" y="3.5" width="16" height="17" rx="2" />
          <path d="M4 9.5h16M9.5 9.5V21" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V6l-7-3Z" />
          <path d="m9.5 12 1.8 1.8L15 10" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Features() {
  return (
    <section id="features" className="border-t border-ink/[0.06] dark:border-paper/[0.06]">
      <div className="shell py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Platform</span>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Everything your front desk wishes it had time for
          </h2>
          <p className="mt-4 text-balance text-ink/55 dark:text-paper/55">
            GYM AGENT handles the repetitive conversations so your staff can
            focus on the people already in the building.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_20px_40px_-24px_rgba(198,255,61,0.35)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal-gradient-soft text-ink dark:text-paper">
                <FeatureIcon name={feature.icon} />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-ink dark:text-paper">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/55 dark:text-paper/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
