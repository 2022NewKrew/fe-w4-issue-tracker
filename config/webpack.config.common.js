const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Path Config
const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_INDEX = path.resolve(PROJECT_ROOT, "public", "index.html");
const SRC_PATH = path.resolve(PROJECT_ROOT, "src");
const BUILD_PATH = path.resolve(PROJECT_ROOT, "build");

module.exports = (webpackEnv) => {
  return {
    entry: path.resolve(SRC_PATH, "index.jsx"),
    output: {
      path: BUILD_PATH,
      filename: "js/[name].[contenthash:8].js",
      publicPath: "/", // nested router 처리를 위한 옵션..
      clean: true, // CleanWebpackPlugin 대체, 빌드 성공 시 이전 빌드파일 삭제
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: PUBLIC_INDEX }), // 빌드한 결과물을 HTML 파일로 생성해주는 Plugin
    ],
  };
};
