var path = require("path");
var webpack = require("webpack");
var WebpackNotifierPlugin = require("webpack-notifier");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {

	devtool: 'source-map',

	entry: './src/App.tsx',
	
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: './build/'
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
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: [{
					loader: "file-loader" //loader: 'file-loader?name=[name].[ext]',
				}]
			}
		]
	},

	plugins: [
		new WebpackNotifierPlugin({ alwaysNotify: true }),
		new ExtractTextPlugin("styles.css")
	]

 }