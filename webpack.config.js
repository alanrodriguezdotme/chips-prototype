var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {

	devtool: 'eval',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/App.tsx'
	],

	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/build/'
	},

	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.css',
			'.scss'
		],
		modules: [
			path.join(__dirname, "src"),
			"typings",
			"node_modules"
		]
	},

	devServer: {
		inline: true,
		hot: true
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'ts-loader'
				}]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.svg$/,
				use: [{
					loader: "raw-loader"
				}]
			},
			{
				test: /\.jpg/,
				use: [{
					loader: "file-loader"
				}]
			},
			{
				test: /\.png/,
				use: [{
					loader: "url-loader" //"url-loader?mimetype=image/png"
				}]
			},
			{
				test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: "file-loader?name=[name].[ext]"
				}]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new WebpackNotifierPlugin({ alwaysNotify: true })
	]

}