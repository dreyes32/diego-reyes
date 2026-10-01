import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/projects/agentic-ai-werfen",
        destination: "/projects/walt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
