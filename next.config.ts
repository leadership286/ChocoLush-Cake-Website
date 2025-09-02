import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 ESLint ko deploy time par disable karega
  },
};

export default nextConfig;
