/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,

    // offending line
    webpackBuildWorker: true,
  },
}

module.exports = nextConfig
