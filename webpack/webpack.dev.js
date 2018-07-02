/**
 * @file webpack config for development
 * @author xiongyang
 */
// 把env中的变量都赋值给process.env下
require('dotenv').config();
// 定义端口号（如果env中定义过，就用env中的，否则用9000）
const port = process.env.PORT || 9000;
const page = process.env.PAGE || 'version_upgrade';
const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const styleLoaders = require('./styleLoaders');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const join = require('path').join;

module.exports = merge(baseWebpackConfig, {
    // cache: false,
    entry: {
        [page]: './static/js/' + page + '/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../output/static/swanWebpage')
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        // css编译
        rules: styleLoaders()
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 生成css文件名
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        contentBase: join(__dirname, '..'),
        publicPath: '/',
        host: '0.0.0.0',
        compress: false,
        hot: true,
        port: port,
        disableHostCheck: true,
        stats: 'errors-only',
        openPage: page,
        setup: function (app) {
            app.get('/' + page, function (req, res) {
                let host = '//' + req.get('host');
                let content = '';
                try {
                    fs.readFile(path.join(__dirname, `../template/${page}.tpl`), function (err, data) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            content = data.toString()
                                .replace(/<%= htmlWebpackPlugin\.files\.chunks\.(\w+)\.entry %>/g,
                                host + '/' + page + '.js')
                                .replace('<%= htmlWebpackPlugin.files.chunks.' + page + '.css[0] %>',
                                host + '/' + page + '.css');
                            res.write(content);
                            res.end();
                        }
                    });
                } catch (e) {
                    // console.log(e);
                }
            });
        }
    }
});
