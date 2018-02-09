const path = require('path');
const config = require('./webpack.config');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = Object.assign(config, {
    target: 'web',
    output: {
        path: path.resolve(__dirname, './build/'),
        libraryTarget: 'umd',
        filename: '[name].js',
        publicPath: '/build/',
    },
    plugins: [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin(),
    ],
});
