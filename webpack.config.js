const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index-bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
