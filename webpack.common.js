const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@templates": path.resolve(__dirname, "src/components/templates"),
      "@routes": path.resolve(__dirname, "src/components/routes"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
