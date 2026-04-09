const repoName = "portfolio-iurexz";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const pagesBasePath = `/${repoName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: pagesBasePath,
        assetPrefix: `${pagesBasePath}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
