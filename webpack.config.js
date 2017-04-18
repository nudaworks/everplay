const webpack = require('webpack');
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');


// webpack config object
const w = {};


w.entry = './client/dev/games/games.index.js';


w.output = {
	publicPath: '/',
	path: path.resolve(__dirname, './client/public/js/'),
	filename: '[name].bundle.js'
};


w.module = {
	loaders: [
		{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
		{ test: /\.(js|jsx)$/, exclude: /node_modules/,	loader: 'babel-loader' }
	]
};


w.plugins = [
	new HtmlWebpackPlugin({
		title: 'Everplay',
		template: path.resolve(__dirname, './client/dev/index.html'),
		filename: path.resolve(__dirname, './client/public/index.html'),
		inject: false
	}),
	new webpack.HotModuleReplacementPlugin(),
];


w.devServer = {
	publicPath: '/',
	hot: true,
	contentBase: "./client/public/",
	// compress: true,
	port: 6611,
	// historyApiFallback: true
};


module.exports = w;
