const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-daisyui'],
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
	}
}

module.exports = nextConfig
