const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/assets/scss')]
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	async redirects() {
		return [
		  {
			source: '/editor',
			destination: '/problems',
			permanent: true,
		  },
		  {
			source: "/problems/:slug",
			destination: "/problems/:slug/description",
			permanent: false,
		  },
		]
	  },
}

module.exports = nextConfig
