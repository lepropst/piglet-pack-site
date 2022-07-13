/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
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
