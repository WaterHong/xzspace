const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './server/app.js',
    target: "node", //重要，没有的话会报错 Can't resolve 'fs' 
    output: {
        publicPath: "/",
        //filename: "[name].[hash].js",
        filename: "main.js",
        path: path.resolve(process.cwd(), "./dist/"),
        libraryTarget: 'commonjs2'
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
                        babelrc: false,
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
        
    ]
};