const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonPaths = require("./common-paths");

const URL_LOADER_LIMIT = 10000;

const config = {
  entry: {
    app: [`${commonPaths.appEntry}/index.jsx`],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: commonPaths.outputPath,
              name: "[name].[ext]?[fullhash]",
            },
          },
          {
            loader: "url-loader",
            options: {
              publicPath: commonPaths.outputPath,
              name: "[name].[ext]?[fullhash]",
              limit: URL_LOADER_LIMIT,
            },
          },
        ],
        test: /\.txt$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", "..."],
    alias: {
      "@root": commonPaths.projectRoot,
      "@src": commonPaths.appEntry,
      "@dist": commonPaths.outputPath,
      "@components": commonPaths.componentsPath,
      "@core": commonPaths.corePath,
      "@pages": commonPaths.pagesPath,
      "@images": commonPaths.imagesPath,
      "@styles": commonPaths.stylesPath,
      "@utils": commonPaths.utilsPath,
    },
  },
};

module.exports = config;
