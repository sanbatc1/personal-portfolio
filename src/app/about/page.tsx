const skills = [
  "Python",
  "TypeScript / React",
  "LLM Application Design",
  "Data Engineering",
  "SQL & Data Pipelines",
  "Cloud Deployment",
];

const experience = [
  {
    role: "Role title",
    org: "Company name",
    period: "20XX — Present",
    description:
      "Placeholder: one or two lines on the scope of this role and a concrete outcome.",
  },
  {
    role: "Role title",
    org: "Company name",
    period: "20XX — 20XX",
    description:
      "Placeholder: one or two lines on the scope of this role and a concrete outcome.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
      <p className="text-sm tracking-wide text-muted uppercase">About</p>
      <h1 className="mt-4 font-serif-display text-3xl text-foreground sm:text-4xl">
        Hi, I&apos;m Sanjay.
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-7 text-muted">
        Placeholder bio — a few sentences on your background, what drew you
        to AI and full-stack engineering, and the kind of problems you like
        solving. Replace this paragraph with your own story.
      </p>

      <div className="mt-16">
        <h2 className="font-serif-display text-xl text-foreground">Skills</h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h2 className="font-serif-display text-xl text-foreground">
          Experience
        </h2>
        <div className="mt-6 flex flex-col gap-8">
          {experience.map((item) => (
            <div
              key={item.role + item.org}
              className="border-l border-border pl-6"
            >
              <p className="text-sm text-muted">{item.period}</p>
              <p className="mt-1 text-base font-medium text-foreground">
                {item.role} · {item.org}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
