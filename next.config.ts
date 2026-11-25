import type { NextConfig } from "next";

const path = "/my-site";

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
  basePath: path,
  env: { NEXT_PUBLIC_BASE_PATH: path },
};

export default nextConfig;
