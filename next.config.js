/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['fonts.gstatic.com'],
  },
  output: 'standalone'
}

module.exports = nextConfig
