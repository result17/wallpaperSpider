"use strict";
exports.__esModule = true;
var moment = require("moment");
var Months;
(function (Months) {
    Months[Months["january"] = 0] = "january";
    Months[Months["february"] = 1] = "february";
    Months[Months["march"] = 2] = "march";
    Months[Months["april"] = 3] = "april";
    Months[Months["may"] = 4] = "may";
    Months[Months["june"] = 5] = "june";
    Months[Months["july"] = 6] = "july";
    Months[Months["august"] = 7] = "august";
    Months[Months["september"] = 8] = "september";
    Months[Months["october"] = 9] = "october";
    Months[Months["november"] = 10] = "november";
    Months[Months["december"] = 11] = "december";
})(Months || (Months = {}));
// 01/07/2020, month begins with 0
var curData = moment().format('l').split('/').map(function (it) { return Number(it); });
var month = curData[0] - 1;
var curYear = curData[2];
exports.curYear = curYear;
var curMonth = curData[0];
exports.curMonth = curMonth;
function getUrl() {
    var lastMonth = month > 0 ? curMonth : 12, year = month > 0 ? curYear : curYear - 1;
    // 'https://www.smashingmagazine.com/2019/12/desktop-wallpaper-calendars-january-2020/'
    return "https://www.smashingmagazine.com/" + year + "/" + lastMonth + "/desktop-wallpaper-calendars-" + Months[month] + "-" + curYear;
}
var htmlUrl = getUrl();
exports.htmlUrl = htmlUrl;
