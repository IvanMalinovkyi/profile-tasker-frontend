/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
