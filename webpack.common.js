const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const allow = false;

module.exports = {
    output: {
        environment: {
            arrowFunction: allow,
            bigIntLiteral: allow,
            const: allow,
            destructuring: allow,
            dynamicImport: allow,
            forOf: allow,
            module: allow,
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            favicon: './src/favicon.ico',
            manifest: './src/manifest.json'
        })
    ]
};