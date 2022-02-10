const {merge}=require('webpack-merge');
const commonConfig=require('./webpack.common');
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports=merge(commonConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: 'stats.json',
      openAnalyzer: false,
      analyzerMode: 'json'
    })
  ],
  devtool: 'source-map'
});
