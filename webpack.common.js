module.exports = {
	entry: {
		app: './src/index.js',
		vendor: './src/vendor.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.(png|jpeg|svg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets'
					}
				}
			}
		]
	}
}
