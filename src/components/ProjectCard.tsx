type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ title, description, tags, href }: Project) {
  const content = (
    <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors group-hover:border-accent">
      <h3 className="font-serif-display text-lg text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      {content}
    </a>
  );
}
