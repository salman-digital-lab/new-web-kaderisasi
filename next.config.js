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
};

module.exports = nextConfig;
