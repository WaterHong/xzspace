const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {

    entry: './client/index.tsx',

    output: {
        publicPath: "/",
        //filename: "[name].[hash].js",
        filename: "main.js",
        path: path.resolve(process.cwd(), "./dist/")
    },

    devtool: 'inline-source-map',
    
    optimization: {
      usedExports: true
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "ts-loader",
                options: {
                  allowTsInNodeModules: true
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[name].[hash].css",
            ignoreOrder: true
        })
    ]
};