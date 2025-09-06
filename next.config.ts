/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    NEXT_WEBSITE_BASE_URL: process.env.NEXT_WEBSITE_BASE_URL, // Optional, if not using directly in code
  },
};

export default nextConfig;
