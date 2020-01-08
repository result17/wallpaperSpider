"use strict";
exports.__esModule = true;
var cheerio = require("cheerio");
var toolFuncs_1 = require("./toolFuncs");
var getUrl_1 = require("./getUrl");
var countUndefinedTitle = 0;
var countHrefs = 0;
exports.countHrefs = countHrefs;
function getImgsHref(html, selector, regexp) {
    var $ = cheerio.load(html), result = {};
    $(selector).each(function (idx, ele) {
        var href = $(ele).attr('href');
        if (href && toolFuncs_1.isMatchedImgsHref(regexp, href)) {
            exports.countHrefs = countHrefs += 1;
            var fileName = getUrl_1.curYear + "-" + getUrl_1.curMonth + " ";
            var title = $(ele).attr('title');
            if (!title) {
                countUndefinedTitle++;
                fileName += 'wallpaper' + countUndefinedTitle;
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
