const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // 성능 향상을 위한
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    // App.jsx 등을 App으로 인식하게 해준다
    extensions: ['.js', '.ts', '.tsx'],
    // tsconfig.json 과 함께 써주어야 한다
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@static': path.resolve(__dirname, '../src/static'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@layout': path.resolve(__dirname, '../src/layout'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@icons': path.resolve(__dirname, '../src/assets/icons'),
    },
  },
};
