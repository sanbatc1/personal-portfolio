const links = [
  { href: "https://github.com/sanbatc1", label: "GitHub" },
  { href: "mailto:sanjaybatchu1@gmail.com", label: "Email" },
  { href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>&copy; {new Date().getFullYear()} Sanjay Batchu</p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-accent"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
