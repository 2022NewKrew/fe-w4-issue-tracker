const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

// Path Config
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ENV = path.resolve(PROJECT_ROOT, "env");

module.exports = (webpackEnv) =>
  merge(common(webpackEnv), {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(), // 별도로 css 파일을 만들어서 빌드하는 Plugin
      new Dotenv({ path: path.resolve(ENV, ".env") }), // .env에 있는 변수를 가져오는 Plugin. process.env.XXX 로 접근 가능
    ],
    cache: {
      // 빌드 타임 최적화 기능(https://webpack.js.org/configuration/cache)
      type: "filesystem",
    },
  });
