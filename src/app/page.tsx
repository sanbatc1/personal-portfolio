import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
      <p className="text-sm tracking-wide text-muted uppercase">
        Full Stack AI Innovation Engineer
      </p>
      <h1 className="mt-6 max-w-2xl font-serif-display text-4xl leading-tight text-foreground sm:text-5xl">
        Sanjay Batchu builds AI products from first idea to live deployment.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted">
        I work across the full stack — data pipelines, model integration,
        interfaces, and infrastructure — to take AI-driven products from
        concept to something people can actually use.
      </p>
      <div className="mt-10 flex items-center gap-5 text-sm">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-accent-foreground transition-colors hover:bg-accent/90"
        >
          View projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
