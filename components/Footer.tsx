import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] dark:border-paper/[0.06]">
      <div className="shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink/55 dark:text-paper/50">
            {siteConfig.tagline}. Built on the official Meta WhatsApp Cloud
            API.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/privacy" className="link-underline text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="link-underline text-sm">
            Terms
          </Link>
          <Link href="/contact" className="link-underline text-sm">
            Contact
          </Link>
        </nav>
      </div>

      <div className="border-t border-ink/[0.06] py-6 dark:border-paper/[0.06]">
        <p className="shell text-center text-xs text-ink/40 dark:text-paper/35 sm:text-left">
          &copy; {siteConfig.year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
