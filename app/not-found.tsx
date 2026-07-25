import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
        This page went for a run
      </h1>
      <p className="mt-3 max-w-sm text-ink/55 dark:text-paper/55">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
