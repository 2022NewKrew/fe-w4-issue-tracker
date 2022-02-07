const path = require("path");
const webpack = require("webpack");
const port = 3000;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@pages": path.resolve(__dirname, "../src/pages/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@assets": path.resolve(__dirname, "../src/assets"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      publicPath: "/",
    }),
  ],
};
