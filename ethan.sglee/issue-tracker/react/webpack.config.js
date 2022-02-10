const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@Context": path.resolve(__dirname, "src/context"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Public": path.resolve(__dirname, "public"),
      "@Atoms": path.resolve(__dirname, "src/components/UI/atoms"),
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 결과물 경로
    filename: 'bundle.js', // 결과물 파일명
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    client: {
      overlay: true,
    },
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({ 
      filename: 'app.css' 
    }),
  ],
};
