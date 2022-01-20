const path = require("path");
const common = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

// Path Config
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ENV = path.resolve(PROJECT_ROOT, "env");

module.exports = (webpackEnv) =>
  merge(common(webpackEnv), {
    mode: "production",
    plugins: [
      new Dotenv({ path: path.resolve(ENV, ".env") }), // .env에 있는 변수를 가져오는 Plugin. process.env.XXX 로 접근 가능
    ],
    cache: {
      // 빌드 타임 최적화 기능(https://webpack.js.org/configuration/cache)
      type: "filesystem",
    },
  });
