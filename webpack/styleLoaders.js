/**
 * @file generate style loaders
 * @author xiongyang(xiongyang@baidu.com)
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (options = {}) {
    let baseLoader = {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    minimize: options.extract,
                    sourceMap: !options.extract,
                    modules: false,
                    localIdentName: false
                }
            }
        ]
    };
    return [baseLoader];
};
