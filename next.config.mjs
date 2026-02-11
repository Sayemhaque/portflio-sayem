/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portflio-sayem",
  trailingSlash: true,
};

export default nextConfig;
