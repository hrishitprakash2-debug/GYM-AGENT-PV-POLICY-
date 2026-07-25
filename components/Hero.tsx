import Link from "next/link";
import PulseFlow from "@/components/PulseFlow";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-[110px] dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle, #C6FF3D 0%, #5B8CFF 55%, transparent 75%)",
        }}
      />

      <div className="shell relative pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Built on the official Meta WhatsApp Cloud API
          </span>

          <h1
            className="animate-fade-up mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-paper sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            AI WhatsApp Automation for Gyms
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ink/60 dark:text-paper/60 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {siteConfig.description}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link href={siteConfig.links.getStarted} className="btn-primary w-full sm:w-auto">
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={siteConfig.links.privacy} className="btn-secondary w-full sm:w-auto">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div
          className="animate-fade-up mx-auto mt-20 max-w-4xl"
          style={{ animationDelay: "320ms" }}
        >
          <PulseFlow />
        </div>
      </div>
    </section>
  );
}
