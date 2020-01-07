"use strict";
exports.__esModule = true;
var cheerio = require("cheerio");
var toolFuncs_1 = require("./toolFuncs");
function getImgsHref(html, selector, regexp) {
    var $ = cheerio.load(html), result = {};
    console.log(html.length);
    $(selector).each(function (idx, ele) {
        var href = $(ele).attr('href');
        if (href && toolFuncs_1.isMatchedImgsHref(regexp, href)) {
            var title = $(ele).attr('title') + '.png';
            result[title] = href;
        }
    });
    return result;
}
exports.getImgsHref = getImgsHref;
