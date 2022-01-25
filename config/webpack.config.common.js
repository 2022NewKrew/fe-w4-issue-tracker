const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: '../src/index.jsx',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath:'/',
    filename: '[name].[chunkhash].js',
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }), 
  ],
  resolve: {
    extensions: ['.jsx', 'js'],
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@core': path.resolve(__dirname, '../src/core'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
