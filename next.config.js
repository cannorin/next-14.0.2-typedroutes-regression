/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    webpackBuildWorker: true,
  },
}

module.exports = nextConfig
