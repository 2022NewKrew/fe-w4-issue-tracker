import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import babelConfig from './babel.config.json';

const config: Configuration = {
    name: 'client',
    target: 'web',
    entry: {
        client: './src/index.tsx', // 번들 대상
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelConfig,
            },
            {
                test: /(\/icons\/)[\w.]+\.(svg)$/,
                use: ['@svgr/webpack', 'file-loader?name=./icons/[name].[ext]'],
            },
            {
                test: /(\/icons\/)[\w.]+\.(png|j?g|gif)$/,
                use: ['file-loader?name=./icons/[name].[ext]'],
            },
            {
                test: /(\/images\/)[\w.]+\.(svg)$/,
                use: ['@svgr/webpack', 'file-loader?name=./images/[name].[ext]'],
            },
            {
                test: /(\/images\/)[\w.]+\.(png|j?g|gif)$/,
                use: ['file-loader?name=./images/[name].[ext]'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Issue Maker',
            template: path.resolve(process.cwd(), 'public/index.html'),
        }),
        new Dotenv({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'], // 대상 파일 확장명
        alias: {
            '@icons': path.resolve(process.cwd(), 'public/icons'),
            '@images': path.resolve(process.cwd(), 'public/images'),
            '@components': path.resolve(process.cwd(), 'src/components'),
            '@styles': path.resolve(process.cwd(), 'src/styles'),
            '@utils': path.resolve(process.cwd(), 'src/utils'),
            '@hooks': path.resolve(process.cwd(), 'src/hooks'),
            '@types': path.resolve(process.cwd(), 'src/@types'),
        },
    },
};

export default config;
