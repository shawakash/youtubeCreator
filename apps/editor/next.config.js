/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "db", "zodTypes", "store", "tailwind-config"],
}

module.exports = nextConfig
