const path = require('path');
const webpack = require('webpack');

// Exclude all node modules packages except the two packages rtl-account and rtl-fkid-browser-cookie
const exclude = new RegExp(`node_modules\\${path.sep}(?!rtl-account|rtl-fkid-browser-cookie|rtl-browser-os-and-device-type)`);

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        index: ['./index.js'],
    },
    output: {
        path: path.resolve(__dirname, './build/'),
        libraryTarget: 'umd',
        filename: '[name].js',
        publicPath: '/build/',
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                loaders: [
                    {
                        loader: 'style-loader?sourceMap',
                    }, {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    }, {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [],
};
