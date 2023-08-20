/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "db", "zodTypes", "store"],

}

module.exports = nextConfig
