/**
 * Created by yuluo on 15/12/25.
 */
var path = require('path');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'app/index.js')
    ],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!jsx-loader?harmony'
        },
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }]
    }
};

module.exports = config;
