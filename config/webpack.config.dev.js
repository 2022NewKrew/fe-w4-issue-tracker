const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

// Path Config
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ENV = path.resolve(PROJECT_ROOT, "env");
const PORT = process.env.PORT || 3000;

module.exports = (webpackEnv) =>
  merge(common(webpackEnv), {
    mode: "development",
    output: {
      filename: "js/[name].[contenthash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new Dotenv({ path: path.resolve(ENV, ".env.dev") }), // .env에 있는 변수를 가져오는 Plugin. process.env.XXX 로 접근 가능
    ],
    devServer: {
      port: PORT, // port 설정
      host: "localhost", // host 설정
      open: true, // 서버를 실행했을 때, 브라우저를 열어주는 여부
      compress: true,
      historyApiFallback: true, // url 직접 접근을 해결해주는?
      client: {
        overlay: true,
      },
    },
    devtool: "hidden-source-map",
  });
