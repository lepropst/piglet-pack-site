/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/submit',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['ik.imagekit.io'],
  },
};

module.exports = nextConfig;
