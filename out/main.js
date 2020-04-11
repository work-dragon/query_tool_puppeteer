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
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var signInInfo_1 = require("./unit/signInInfo");
var navInfo_1 = require("./unit/navInfo");
var config_1 = require("./unit/config");
var element_1 = require("./dom/element");
var deviceonofflog_1 = require("./unit/deviceonofflog");
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var loginInfo, navInfo, deviceonofflog, browser, page, user_Info, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loginInfo = new signInInfo_1.LoginInfo();
                navInfo = new navInfo_1.NavInfo();
                deviceonofflog = new deviceonofflog_1.Deviceonofflog();
                return [4 /*yield*/, puppeteer_1.launch({ headless: false, defaultViewport: { width: 1600, height: 868 }, timeout: 30000 })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.waitFor(3 * 1000)];
            case 3:
                _a.sent();
                //sing in
                return [4 /*yield*/, loginInfo.userInfo(page, element_1.elements.waitForSingInDOM, element_1.elements.accountInput, element_1.elements.passwordInput, config_1.config.account, config_1.config.password, element_1.elements.signInBtn, element_1.elements.pressEnter)
                    //get userInfo
                ];
            case 4:
                //sing in
                _a.sent();
                //get userInfo
                return [4 /*yield*/, page.waitForSelector(element_1.elements.userInfo___7ZPSO)];
            case 5:
                //get userInfo
                _a.sent();
                return [4 /*yield*/, page.$eval(element_1.elements.userInfo___7ZPSO, function (ele) { return ele.textContent; })];
            case 6:
                user_Info = _a.sent();
                user_Info === undefined || null ? console.log('无用户信息') : console.log("user_Info --> " + user_Info);
                //click narrowNavIcon
                return [4 /*yield*/, page.click(element_1.elements.narrowAndExpandNav).then(function () { return console.log('点击缩小导航栏Icon'); })];
            case 7:
                //click narrowNavIcon
                _a.sent();
                //NavDeviceInfoSearch
                return [4 /*yield*/, navInfo.navDeviceSearch(page, element_1.elements.navinfoSelelctor, element_1.elements.waitForSelectorSearchInput, element_1.elements.deviceIdInputSearchSelelctor, config_1.config.deviceIdText, element_1.elements.searchBtn, element_1.elements.waitForSelectorSearchContentTbody, element_1.elements.deleteDeviceInfoSearchInputValue, element_1.elements.exportDataBtn)
                    //click expandNavIcon
                ];
            case 8:
                //NavDeviceInfoSearch
                _a.sent();
                //click expandNavIcon
                return [4 /*yield*/, page.click(element_1.elements.narrowAndExpandNav).then(function () { return console.log('点击扩大导航栏Icon'); })];
            case 9:
                //click expandNavIcon
                _a.sent();
                ;
                //click Nav userInfoSearch
                return [4 /*yield*/, navInfo.navUserSearch(page, element_1.elements.deletePreTabDiv, element_1.elements.onClickUserLiSelelctor, element_1.elements.userAccountInputSearchSelelctor, config_1.config.phone, element_1.elements.userSearchBtnSlelctor, element_1.elements.waitForSelectorUserSearchContentTbody, element_1.elements.cleanUserDeviceIdText, element_1.elements.exportuserAccountInfoDataBtn)
                    //click Nav onofflogSearch
                ];
            case 10:
                //click Nav userInfoSearch
                _a.sent();
                //click Nav onofflogSearch
                return [4 /*yield*/, deviceonofflog.onClickLionoffLog(page, element_1.elements.deletePreTabDiv, element_1.elements.onClickONOFFLiSelelctor, element_1.elements.onoffLogdeviceIdInputSearchSelelctor, config_1.config.deviceIdText, 
                    // elements.clickLeftSelectionTimeSelelctor,
                    // elements.leftSelectionTimeTextSelelctor,
                    // elements.rightSelectionTimeTextSelelctor,
                    // elements.acceptSelectionTimeTextSelelctor,
                    element_1.elements.searchBtnSlelctor, 
                    // elements.waitForSelectorONOFFTbody,
                    // elements.exportONOFFContnetBtn,
                    element_1.elements.deleteONOFFContnetDiv)
                    //click Nav HistoryRecord
                ];
            case 11:
                //click Nav onofflogSearch
                _a.sent();
                //click Nav HistoryRecord
                return [4 /*yield*/, navInfo.navHistoryRecord(page, element_1.elements.onClickHistoryLiSelelctor, element_1.elements.deletePreTabDiv, element_1.elements.historyDeviceIdInputSearchSelelctor, config_1.config.deviceIdText, element_1.elements.historySearchBtnSlelctor, element_1.elements.cleanHistoryDeviceIdText)
                    //sign out
                ];
            case 12:
                //click Nav HistoryRecord
                _a.sent();
                _a.label = 13;
            case 13:
                _a.trys.push([13, 15, , 16]);
                return [4 /*yield*/, page.click(element_1.elements.signOutBtn, { delay: 2000 })];
            case 14:
                _a.sent();
                return [3 /*break*/, 16];
            case 15:
                error_1 = _a.sent();
                console.log("\u9000\u51FA\u767B\u5F55 --> " + error_1);
                return [3 /*break*/, 16];
            case 16: 
            //awit for 2s,close browser
            return [4 /*yield*/, page.waitFor(2 * 1000)];
            case 17:
                //awit for 2s,close browser
                _a.sent();
                return [4 /*yield*/, browser.close().then(function () { return console.log('关闭浏览器'); })];
            case 18:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
