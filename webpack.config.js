const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    context: ROOT,

    entry: {
        'main': './js/app.ts',
        'index': './js/index.ts',
        'result': './js/result.ts',

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
    output: {
        filename: 'js/[name].[contentHash].js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
            * LOADERS
            *****************/
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};

