const posts = [
  {
    title: "Post title placeholder",
    date: "Coming soon",
    excerpt:
      "Placeholder excerpt — write a short teaser for a post about a project, technique, or lesson learned.",
  },
  {
    title: "Post title placeholder",
    date: "Coming soon",
    excerpt:
      "Placeholder excerpt — write a short teaser for a post about a project, technique, or lesson learned.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
      <p className="text-sm tracking-wide text-muted uppercase">Blog</p>
      <h1 className="mt-4 font-serif-display text-3xl text-foreground sm:text-4xl">
        Writeups
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted">
        Placeholder posts — this will hold writeups on projects, techniques,
        and things learned along the way.
      </p>

      <div className="mt-12 flex flex-col divide-y divide-border border-t border-border">
        {posts.map((post) => (
          <article key={post.title} className="py-8">
            <p className="text-sm text-muted">{post.date}</p>
            <h2 className="mt-2 font-serif-display text-xl text-foreground">
              {post.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
