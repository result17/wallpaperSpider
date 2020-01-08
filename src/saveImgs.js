"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var axios_1 = require("axios");
var imgsDirPath = path.join(__dirname, '..', 'imgs');
function getImgPath(imgName) {
    return path.join(imgsDirPath, imgName);
}
function getImgs(targetObj) {
    var imgsEntries = Object.entries(targetObj);
    var tasksAry = imgsEntries.map(function (item, idx) {
        var config = {
            url: item[1],
            method: 'get',
            responseType: 'stream',
            timeout: 10000
        };
        var imgPath = getImgPath(item[0]);
        return axios_1["default"](config).then(function (response) {
            return new Promise(function (resolve, reject) {
                response.data.pipe(fs.createWriteStream(imgPath)
                    .on('close', function () {
                    resolve();
                }))
                    .on('error', function () {
                    reject();
                });
            });
        })["catch"](function (error) {
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
            fs.unlink(imgPath, function () {
                console.log('download error, delete the damaged picture!');
            });
        });
    });
    return Promise.all(tasksAry);
}
exports["default"] = getImgs;
