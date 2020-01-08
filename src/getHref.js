"use strict";
exports.__esModule = true;
var cheerio = require("cheerio");
var toolFuncs_1 = require("./toolFuncs");
var countHrefs = 0;
exports.countHrefs = countHrefs;
function getImgsHref(html, selector, regexp) {
    var $ = cheerio.load(html), result = {};
    $(selector).each(function (idx, ele) {
        var href = $(ele).attr('href');
        if (href && toolFuncs_1.isMatchedImgsHref(regexp, href)) {
            exports.countHrefs = countHrefs += 1;
            var fileName = '';
            var title = $(ele).attr('title');
            if (!title) {
                fileName += 'wallpaper';
            }
            else {
                fileName += title;
            }
            fileName += '.png';
            result[fileName] = href;
        }
    });
    return result;
}
exports.getImgsHref = getImgsHref;
