const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: '../src/index.jsx',
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath:'/',
    filename: '[name].[chunkhash].js',
	},
  resolve: {
    extensions: ['.jsx', 'js'],
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@public': path.resolve(__dirname, './public'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|webp)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: '[name].[contenthash].[ext]',
        },
      },
    ],
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }), 
  ],
};
