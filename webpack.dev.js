const path = require('path');


module.exports = {
	resolve: {
		extensions: [".ts", ".d.ts", ".js", ".json", ".less", '.svg']
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
		libraryTarget: "umd"
	},

	mode: 'development'
};
