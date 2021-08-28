const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});