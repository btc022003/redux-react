/**
 * Created by yuluo on 15/12/25.
 */
var path = require('path');
var webpack = require('webpack');


//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common',"commons.js", Infinity);


var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    //plugins: [ new commonsPlugin() ],
    node: {  // this is for pixi.js
        fs: "empty",
        child_process: "empty"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!jsx-loader?harmony'
        },
            {
                test: /\.jpe?g$|\.svg$|\.png$/,
                exclude: /node_modules/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                exclude: /node_modules/,
                loader: 'babel-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
            },
            {
                test: /\.css$/, // Only .css files
                exclude: /node_modules/,
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.node$/,
                loader: 'node-loader'
            }
        ]
    }
};

module.exports = config;
