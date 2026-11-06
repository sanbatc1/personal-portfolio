import type { NextConfig } from "next";

// Set to your GitHub repo name so assets resolve correctly on
// https://sanbatc1.github.io/<repoName>/. Leave as "" if this deploys to
// the special sanbatc1.github.io user-page repo (served at the domain root).
const repoName = "personal-portfolio";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
