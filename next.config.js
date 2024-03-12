const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin-api-kaderisasi.salmanitb.com",
        port: "",
        pathname: "/activity_pic/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3010"],
    },
  },
};

module.exports = withBundleAnalyzer(nextConfig);
