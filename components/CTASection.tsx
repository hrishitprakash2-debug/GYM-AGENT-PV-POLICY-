import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="border-t border-ink/[0.06] dark:border-paper/[0.06]">
      <div className="shell py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center dark:bg-paper/[0.04] sm:px-16">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full opacity-25 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, #C6FF3D 0%, #5B8CFF 70%, transparent 80%)",
            }}
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Let your front desk answer itself
            </h2>
            <p className="mt-4 text-balance text-paper/60">
              Set up GYM AGENT on your WhatsApp Business number and start
              qualifying leads while you sleep.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.links.getStarted}
                className="btn bg-signal !px-6 !py-3 text-ink hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-6px_rgba(198,255,61,0.55)]"
              >
                Get Started
              </Link>
              <Link
                href={siteConfig.links.contact}
                className="btn border border-paper/20 text-paper hover:border-paper/40 hover:bg-paper/[0.06]"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
