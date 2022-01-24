const HTMLPlugin=require('html-webpack-plugin');

module.exports={
  entry: './src/index.js',
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ]
  }
};
