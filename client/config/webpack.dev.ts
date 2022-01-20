import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import dotenv from 'dotenv';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

dotenv.config({ path: path.resolve(process.cwd(), '.env.development') });

const devConfig: Configuration = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(process.cwd(), 'build'),
        host: process.env.REACT_HOST,
        port: process.env.REACT_PORT,
        open: true,
        historyApiFallback: true, // history api 또는 react-router 등을 사용하는 경우 새로고침시 404 에러 해결
    },
    output: {
        filename: 'bundle.js', // 번들 후 파일 이름
        path: path.resolve(process.cwd(), 'build'), // 번들 후 저장
        publicPath: '/',
        clean: true,
    },
});

export default devConfig;
