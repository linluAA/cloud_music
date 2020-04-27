module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://120.79.162.149:3000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			},

		}
	},
	publicPath: "./"
}