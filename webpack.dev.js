const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 8081,
    historyApiFallback: true,
  },
});
