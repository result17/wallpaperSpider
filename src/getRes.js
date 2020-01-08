"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var ERRORURLSTATUSCODE = 404;
function getResponse(tarUrl) {
    return axios_1["default"].get(tarUrl)["catch"](function (error) {
        console.log(error.config);
        if (error.response) {
            // console.log(error.response.data)
            console.log(error.response.headers);
            console.log(error.response.status);
            if (error.response.status === ERRORURLSTATUSCODE) {
                throw new Error('url is wrong');
            }
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log('Error', error.message);
        }
    });
}
exports["default"] = getResponse;
