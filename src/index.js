"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var getUrl_1 = require("./getUrl");
var getRes_1 = require("./getRes");
var toolFuncs_1 = require("./toolFuncs");
var getHref_1 = require("./getHref");
var Resolution;
(function (Resolution) {
    Resolution[Resolution["320x480"] = 0] = "320x480";
    Resolution[Resolution["640x480"] = 1] = "640x480";
    Resolution[Resolution["800x480"] = 2] = "800x480";
    Resolution[Resolution["800x600"] = 3] = "800x600";
    Resolution[Resolution["1024x768"] = 4] = "1024x768";
    Resolution[Resolution["1024x1024"] = 5] = "1024x1024";
    Resolution[Resolution["1152x864"] = 6] = "1152x864";
    Resolution[Resolution["1280x720"] = 7] = "1280x720";
    Resolution[Resolution["1280x800"] = 8] = "1280x800";
    Resolution[Resolution["1280x960"] = 9] = "1280x960";
    Resolution[Resolution["1280x1024"] = 10] = "1280x1024";
    Resolution[Resolution["1400x1050"] = 11] = "1400x1050";
    Resolution[Resolution["1440x900"] = 12] = "1440x900";
    Resolution[Resolution["1600x1200"] = 13] = "1600x1200";
    Resolution[Resolution["1680x1050"] = 14] = "1680x1050";
    Resolution[Resolution["1680x1200"] = 15] = "1680x1200";
    Resolution[Resolution["1920x1080"] = 16] = "1920x1080";
    Resolution[Resolution["1920x1200"] = 17] = "1920x1200";
    Resolution[Resolution["1920x1440"] = 18] = "1920x1440";
    Resolution[Resolution["2560x1440"] = 19] = "2560x1440";
})(Resolution || (Resolution = {}));
var select = '#main #article_content ul>li>a';
// command line
var resolutionType = 19;
var reg = toolFuncs_1.buildReg(Resolution[resolutionType]);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var res, imgsHrefObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getRes_1["default"](getUrl_1["default"])];
                case 1:
                    res = _a.sent();
                    if (!res) {
                        throw new Error('url is not exist');
                    }
                    imgsHrefObj = getHref_1.getImgsHref(res.data, select, reg);
                    console.log(imgsHrefObj);
                    return [2 /*return*/];
            }
        });
    });
}
main();
