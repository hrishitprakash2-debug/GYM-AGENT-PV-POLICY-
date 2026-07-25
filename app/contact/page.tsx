import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the GYM AGENT team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact GYM AGENT"
        description="Questions about setup, pricing, or the Meta WhatsApp Cloud API integration? We're happy to help."
      />

      <div className="shell max-w-2xl py-16">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, #C6FF3D 0%, #5B8CFF 70%, transparent 80%)",
            }}
          />

          <span className="font-display text-xl font-semibold tracking-tight text-ink dark:text-paper">
            GYM AGENT
          </span>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-display text-lg font-medium text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-signal dark:text-paper dark:decoration-paper/25"
                >
                  {siteConfig.supportEmail}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Response time
              </dt>
              <dd className="mt-1.5 text-base text-ink/70 dark:text-paper/65">
                {siteConfig.responseTime}
              </dd>
            </div>
          </dl>

          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="btn-primary mt-9 w-full sm:w-auto"
          >
            Send an email
          </a>
        </div>
      </div>
    </>
  );
}
