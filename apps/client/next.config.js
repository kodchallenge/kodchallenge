//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    esmExternals: "loose"
  },
  rewrites: async () => {
    return [
      {
        source: "/signin",
        destination: "/auth/signin",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/@:username",
        destination: "/user/:username",
      },
    ];
  },
};

module.exports = withNx(nextConfig);
