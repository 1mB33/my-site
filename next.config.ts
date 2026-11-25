import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
