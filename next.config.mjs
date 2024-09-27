/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.devtool = false; // Disable source maps for production
    }
    return config;
  }, // Disable source maps in production
};

export default nextConfig;
