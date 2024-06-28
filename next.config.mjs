/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lucasdasilva-nextjs-users-image.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
export default nextConfig;
