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
function getUrl() {
    // 01/07/2020
    var curData = moment().format('l').split('/').map(function (it) { return Number(it); });
    // month begins with 0
    var curMonth = curData[0] - 1, curYear = curData[2];
    var lastMonth = curMonth > 0 ? curMonth : 12, year = curMonth > 0 ? curYear : curYear - 1;
    // 'https://www.smashingmagazine.com/2019/12/desktop-wallpaper-calendars-january-2020/'
    return "https://www.smashingmagazine.com/" + year + "/" + lastMonth + "/desktop-wallpaper-calendars-" + Months[curMonth] + "-" + curYear;
}
exports["default"] = getUrl();
