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
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelConfig,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(process.cwd(), 'public/index.html') }),
        new Dotenv({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'], // 대상 파일 확장명
        alias: {
            '@components': path.resolve(process.cwd(), 'src/components'),
        },
    },
};

export default config;
