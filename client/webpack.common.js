const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './public/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets'), to: 'assets' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@core': path.resolve(__dirname, 'src/core'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@style': path.resolve(__dirname, 'src/style'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            // '@api': path.resolve(__dirname, 'src/api'),
        },
    },
};
