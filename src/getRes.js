"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function getResponse(tarUrl) {
    return axios_1["default"].get(tarUrl)["catch"](function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}
exports["default"] = getResponse;
