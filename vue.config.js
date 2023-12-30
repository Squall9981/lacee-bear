const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/lacee-bear/' : '/',
	configureWebpack: {
		devtool: 'source-map',
	},
});
