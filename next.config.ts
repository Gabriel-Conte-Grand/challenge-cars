import type { NextConfig } from "next";
//

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://test/assets/fleet_images",
      },
    ],
  },
};

export default nextConfig;
