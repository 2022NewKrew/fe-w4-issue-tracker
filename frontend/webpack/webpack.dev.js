// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");
const port = 3000;

module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
    proxy: { "/api/**": { target: "http://localhost:1234", secure: false } },
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "../.env.development"),
    }),
  ],
});
