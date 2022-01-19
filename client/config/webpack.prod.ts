import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const prodConfig = merge(common, {
    mode: 'production',
    output: {
        filename: 'bundle.js', // 번들 후 파일 이름
        path: path.resolve(process.cwd(), 'build'), // 번들 후 저장
        publicPath: '/client/build',
        clean: true,
    },
});

export default prodConfig;
