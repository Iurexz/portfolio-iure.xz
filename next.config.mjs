const repoName = "portfolio-iurexz";
const isProduction = process.env.NODE_ENV === "production";
const pagesBasePath = `/${repoName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isProduction
    ? {
        basePath: pagesBasePath,
        assetPrefix: `${pagesBasePath}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
