import ProjectCard from "@/components/ProjectCard";
import TicTacToeDemo from "@/components/TicTacToeDemo";

const projects = [
  {
    title: "Project One",
    description:
      "Placeholder: a short description of the problem this project solves and the approach taken.",
    tags: ["Python", "LLM", "Pipeline"],
  },
  {
    title: "Project Two",
    description:
      "Placeholder: a short description of the problem this project solves and the approach taken.",
    tags: ["TypeScript", "React", "API"],
  },
  {
    title: "Project Three",
    description:
      "Placeholder: a short description of the problem this project solves and the approach taken.",
    tags: ["Data Engineering", "SQL", "Cloud"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
      <p className="text-sm tracking-wide text-muted uppercase">Projects</p>
      <h1 className="mt-4 font-serif-display text-3xl text-foreground sm:text-4xl">
        AI code projects
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted">
        A placeholder set of project cards — swap in real titles,
        descriptions, tags, and repo links as projects go public.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-serif-display text-xl text-foreground">
          Live demo
        </h2>
        <div className="mt-6">
          <TicTacToeDemo />
        </div>
      </div>
    </div>
  );
}
