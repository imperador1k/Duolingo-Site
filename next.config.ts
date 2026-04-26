import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack root configuration moved to top level
  // This silences the workspace root warning in Next.js 15+
  // @ts-ignore
  turbopack: {
    root: ".",
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
