const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve('./', 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    clean: true,
	},
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico|webp)$/i,
        use: { 
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader', 'url-loader?limit=100000'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }), 
  ],
};
