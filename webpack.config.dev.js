const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    mode: 'development',

    devServer: {
        host: '0.0.0.0',
        hot: true,
        open: true
    },

    plugins: [
        
    ]
})