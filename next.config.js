/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  transpilePackages: [
    'antd',
    '@ant-design',
    '@ant-design/icons',
    'rc-tree',
    'rc-table',
    'rc-pagination',
    'rc-util',
    'rc-picker',
  ],
};

module.exports = nextConfig;
