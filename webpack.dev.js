const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DESTINATION = path.resolve(__dirname, 'dev');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: DESTINATION,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './question.html',
            filename: 'question.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: './result.html',
            filename: 'result.html',
            chunks: ['result'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                        publicPath: 'images',
                        useRelativePaths: true,
                    },
                },
            },
        ],
    },
});
