const path = require('path');
const ROOT = path.resolve(__dirname, 'src');

module.exports = {
    context: ROOT,

    entry: {
        'main': './js/app.ts',
        'index': './js/index.ts',
        'result': './js/result.ts',

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
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader-srcset',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};

