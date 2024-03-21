/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_apiURL}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
