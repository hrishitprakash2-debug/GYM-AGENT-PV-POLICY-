import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalSection from "@/components/LegalSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GYM AGENT collects, uses, and protects information from the Meta WhatsApp Cloud API and related services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 2026"
      />

      <div className="shell max-w-3xl py-16">
        <LegalSection title="Introduction">
          <p>
            GYM AGENT (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            provides AI-powered WhatsApp automation for gyms and fitness
            businesses, built on the official Meta WhatsApp Cloud API. This
            Privacy Policy explains what information we collect when a gym
            and its customers use our service, how we use it, and the
            choices available to you. By using GYM AGENT, you agree to the
            practices described in this policy.
          </p>
        </LegalSection>

        <LegalSection title="Information We Collect">
          <p>We collect only the information necessary to operate the automation you or your gym have configured. This may include:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Phone number
              </span>{" "}
              — used to identify a WhatsApp conversation and deliver
              responses.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Name
              </span>{" "}
              — as provided by the customer during a conversation or booking.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                WhatsApp messages
              </span>{" "}
              — the content of conversations exchanged with the AI agent, used
              to generate responses and route requests.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Booking information
              </span>{" "}
              — such as requested class times, trial dates, or appointment
              preferences.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Fitness goals
              </span>{" "}
              — only if voluntarily shared by the customer during a
              conversation, to help personalize responses.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="How We Use Information">
          <p>Information collected is used solely to operate and improve the service, including to:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Respond to customer messages and enquiries.</li>
            <li>Provide AI-driven automation and conversation handling.</li>
            <li>Book trial sessions and appointments.</li>
            <li>Improve the accuracy and reliability of our services.</li>
          </ul>
          <p>
            We do not sell personal information, and we do not use customer
            data for advertising purposes.
          </p>
        </LegalSection>

        <LegalSection title="Third-Party Services">
          <p>
            To deliver GYM AGENT&rsquo;s functionality, information may be
            processed by the following third-party services, each under their
            own applicable privacy and data protection terms:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Meta WhatsApp Cloud API
              </span>{" "}
              — used to send and receive WhatsApp messages.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                OpenAI-compatible AI providers
              </span>{" "}
              — used to generate conversational responses.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                n8n
              </span>{" "}
              — used to orchestrate automation workflows between services.
            </li>
            <li>
              <span className="font-medium text-ink dark:text-paper">
                Google Sheets
              </span>{" "}
              — used to store and organize leads and booking records.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Data Retention">
          <p>
            We retain conversation and booking data only for as long as
            necessary to provide the service, support ongoing conversations,
            and meet legal or operational requirements. Data no longer needed
            for these purposes is deleted or anonymized on a regular basis.
          </p>
        </LegalSection>

        <LegalSection title="User Rights">
          <p>
            Depending on your location, you may have the right to access,
            correct, export, or request deletion of your personal
            information. To exercise any of these rights, contact us using
            the details below and we will respond in accordance with
            applicable law.
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We apply reasonable technical and organizational measures to
            protect information against unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, contact us at{" "}
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
