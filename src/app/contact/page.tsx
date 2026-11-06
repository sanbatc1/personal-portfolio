const links = [
  { label: "Email", value: "sanjaybatchu1@gmail.com", href: "mailto:sanjaybatchu1@gmail.com" },
  { label: "GitHub", value: "github.com/sanbatc1", href: "https://github.com/sanbatc1" },
  { label: "LinkedIn", value: "Add your LinkedIn URL", href: "#" },
];

// This site is statically exported (no server), so the form below posts to
// Formspree instead of a Next.js API route. Create a free form at
// https://formspree.io and replace YOUR_FORM_ID below with the id it gives you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
      <p className="text-sm tracking-wide text-muted uppercase">Contact</p>
      <h1 className="mt-4 font-serif-display text-3xl text-foreground sm:text-4xl">
        Let&apos;s talk
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted">
        Reach out directly, or send a note through the form below.
      </p>

      <div className="mt-10 flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-sm text-foreground transition-colors hover:text-accent"
          >
            <span className="text-muted">{link.label}:</span> {link.value}
          </a>
        ))}
      </div>

      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="mt-14 flex max-w-lg flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-fit items-center rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
