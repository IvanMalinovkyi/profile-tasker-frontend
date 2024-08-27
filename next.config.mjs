/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
