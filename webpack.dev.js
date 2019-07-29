const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.ts', '.d.ts', '.js', '.json', '.less', '.svg']
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: true,
					safari10: false,
				},
			})
		]
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'awesome-typescript-loader',

				test: /\.ts$/
			},
			{
				test: /\.(less|css)$/,

				use: [
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	output: {
		filename: 'index.js',
		libraryTarget: 'umd'
	},

	mode: 'development'
};
