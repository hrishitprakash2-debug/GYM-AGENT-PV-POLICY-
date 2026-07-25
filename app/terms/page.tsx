import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalSection from "@/components/LegalSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of GYM AGENT's AI WhatsApp automation platform.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: July 2026"
      />

      <div className="shell max-w-3xl py-16">
        <LegalSection title="Acceptance">
          <p>
            By accessing or using GYM AGENT, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do
            not use the service.
          </p>
        </LegalSection>

        <LegalSection title="Description of Service">
          <p>
            GYM AGENT provides AI-powered automation for gyms and fitness
            businesses over WhatsApp, built on the official Meta WhatsApp
            Cloud API. The service is designed to assist with lead
            qualification, customer support, trial bookings, and follow-up
            communication. GYM AGENT does not provide a database or user
            authentication system as part of this website.
          </p>
        </LegalSection>

        <LegalSection title="User Responsibilities">
          <p>As a user of GYM AGENT, you agree to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Provide accurate information when configuring the service for your business.</li>
            <li>Use the service in compliance with Meta&rsquo;s WhatsApp Business policies.</li>
            <li>Not use the service to send unsolicited, misleading, or unlawful messages.</li>
            <li>Maintain the confidentiality of any credentials associated with your account.</li>
          </ul>
        </LegalSection>

        <LegalSection title="Service Availability">
          <p>
            We aim to keep GYM AGENT available and reliable, but the service
            depends on third-party platforms, including the Meta WhatsApp
            Cloud API and AI providers. We do not guarantee uninterrupted or
            error-free availability and are not responsible for outages
            caused by third-party services.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of Liability">
          <p>
            GYM AGENT is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. To the fullest extent permitted by law,
            we disclaim all warranties and shall not be liable for any
            indirect, incidental, or consequential damages arising from your
            use of the service, including loss of leads, revenue, or data.
          </p>
        </LegalSection>

        <LegalSection title="Termination">
          <p>
            We reserve the right to suspend or terminate access to GYM AGENT
            at any time, with or without notice, for conduct that violates
            these terms or is otherwise harmful to the service, other users,
            or third parties.
          </p>
        </LegalSection>

        <LegalSection title="Changes to Terms">
          <p>
            We may update these Terms of Service from time to time. Material
            changes will be reflected by updating the &ldquo;Last
            updated&rdquo; date at the top of this page. Continued use of the
            service after changes take effect constitutes acceptance of the
            revised terms.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions about these Terms of Service can be sent to{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-ink underline underline-offset-4 dark:text-paper"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </LegalSection>
      </div>
    </>
  );
}
