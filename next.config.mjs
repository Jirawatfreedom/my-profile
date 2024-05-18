/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['tailwindui.com'], // Add this line
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig;
