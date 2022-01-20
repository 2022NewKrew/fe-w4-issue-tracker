// @ts-check
const rootWebpackConfig = require("../../webpack.config");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

/** @type import('webpack').Configuration */
module.exports = {
  ...rootWebpackConfig,
  entry: {
    main: require.resolve("./src/index.tsx"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      ...rootWebpackConfig.module.rules,
      {
        test: /\.css$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    ...rootWebpackConfig.plugins,
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      // html 파일에 번들링 된 js 파일 삽입
      template: "./public/index.html",
    }),
    prod && new MiniCssExtractPlugin(),
  ].filter(Boolean),
};
