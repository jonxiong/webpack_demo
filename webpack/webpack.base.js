/**
 * @file webpack base config
 * @author xiongyang(xiongyang@baidu.com)
 */
const {join} = require('path');
const webpack = require('webpack');

module.exports = {
    output: {
        path: join(__dirname, '../output/static'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 图片编译
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    }
};
