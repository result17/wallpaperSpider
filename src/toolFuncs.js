"use strict";
exports.__esModule = true;
function buildReg(key) {
    return new RegExp(key);
}
exports.buildReg = buildReg;
function isMatchedImgsHref(reg, href) {
    return reg.test(href);
}
exports.isMatchedImgsHref = isMatchedImgsHref;
