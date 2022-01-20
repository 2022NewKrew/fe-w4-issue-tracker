const common = require('./webpack.common');
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
})