/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

module.exports = nextConfig;
