module.exports={
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname+"/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMap: true
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ]
  }
}
