/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  // basePath: "/preview-verdehile.github.io",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
