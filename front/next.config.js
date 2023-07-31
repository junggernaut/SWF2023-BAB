/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "artblocks-mainnet.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.artblocks.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.seadn.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "chromie-squiggles.com",
        pathname: "/imgs/**",
      },
      {
        protocol: "https",
        hostname: "openseauserdata.com",
        pathname: "/files/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
