import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-ink dark:text-paper ${className}`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-ink dark:bg-signal">
        <span className="h-2 w-2 rounded-full bg-signal dark:bg-ink" />
      </span>
      <span>
        GYM<span className="text-ink/40 dark:text-paper/40"> AGENT</span>
      </span>
    </Link>
  );
}
