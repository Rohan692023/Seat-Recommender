const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://seat-recommender.onrender.com/api',
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'standalone',
  trailingSlash: false,
  outputFileTracingRoot: path.join(__dirname, '..'),
}

module.exports = nextConfig
