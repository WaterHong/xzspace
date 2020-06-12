const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
    mode: 'development',

    entry: './server/index.js',

    devServer: {
        hot: true,
        open: true
    },

    plugins: [
        
    ]
})