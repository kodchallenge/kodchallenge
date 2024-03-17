const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  webpack(config, { isServer }) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };
    if(isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    return config;
  },
};
