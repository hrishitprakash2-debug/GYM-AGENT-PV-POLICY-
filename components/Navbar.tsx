import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.06] bg-paper/80 backdrop-blur-md dark:border-paper/[0.06] dark:bg-ink/80">
      <div className="shell flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href={siteConfig.links.getStarted}
            className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
