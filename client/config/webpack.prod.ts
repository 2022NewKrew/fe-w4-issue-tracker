import path from 'path';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import common from './webpack.common';

const prodConfig = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js', // 번들 후 파일 이름
        path: path.resolve(process.cwd(), 'build'), // 번들 후 저장
        publicPath: '/',
        clean: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                test: /.(ts|tsx)$/,
            }),
        ],
    },
});

export default prodConfig;
