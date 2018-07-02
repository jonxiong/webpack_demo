/**
 * @file utils
 * @author xiongyang(xiongyang@baidu.com)
 */
const pkg = require('../package.json');

exports.getEntryFiles = function () {
    let entryObj = {};
    const entryNames = pkg.pages;
    entryNames.forEach(name => {
        entryObj[name] = './static/js/' + name + '/index.js';
    });
    return entryObj;
};
