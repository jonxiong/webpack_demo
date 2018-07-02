/**
 * @file webpack config for development
 * @author xiongyang
 */
require('dotenv').config();
// 定义端口号（如果env中定义过，就用env中的，否则用9000）
const port = process.env.PORT || 9000;
const page = process.env.PAGE || 'version_upgrade';
const join = require('path').join;
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Clean = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlInlineSourceWebpackPlugin = require('@super-fe/BdrainfnResourceInline');
const baseWebpackConfig = require('./webpack.base');
const styleLoaders = require('./styleLoaders');
const pages = require('../package.json').pages;
const getEntryFiles = require('../utils').getEntryFiles;
const tplSourcePath = join(__dirname, '../template');
const tplTargetPath = join(__dirname, '../output/template/swanWebPage');
const staticTargetPath = join(__dirname, '../output');

const htmlPluginArr = pages.map(function (name) {
    // 依据一个index.html，生成一个自动引用你打包后JS文件的新index.html
    return new HtmlWebpackPlugin({
        inject: false,
        template: tplSourcePath + '/' + name + '.tpl',
        filename: tplTargetPath + '/' + name + '.tpl'
    });
});

module.exports = merge(baseWebpackConfig, {
    entry: getEntryFiles(),
    // 把index.js编译到output/static/swanWebPage/js下
    output: {
        filename: 'static/swanWebPage/js/[name].js',
        path: staticTargetPath
    },
    module: {
        rules: styleLoaders({
            extract: true
        })
    },
    mode: 'production',
    plugins: [
        // 每次编译都会新生成一个index文件，就是为了保证每次只有一个最新的index.js
        new Clean(['output/*'], {root: join(__dirname, '..'), verbose: false}),
        // 把css统一编译到output/static/swanWebPage/css下
        new MiniCssExtractPlugin({
            filename: 'static/swanWebPage/css/[name].css'
        }),
        new CopyWebpackPlugin([
            // 把template下的tpl文件拷入/output/template/swanWebPage下
            {
                from: '*.tpl',
                to: tplTargetPath,
                context: tplSourcePath
            },
            {
                from: '**/*.tpl',
                to: tplTargetPath,
                context: tplSourcePath
            }
        ])
    ]
        .concat(htmlPluginArr)
});
