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
var loginInfo_1 = require("./unit/loginInfo");
var navInfo_1 = require("./unit/navInfo");
//login
var waitForLoginDOM = '#root > div > div > div:nth-child(2)';
var accountInput = '#root > div > div > div:nth-child(2) > span:nth-child(1) > input';
var passwordInput = '#root > div > div > div:nth-child(2) > span.ant-input-password.ant-input-password-large.ant-input-affix-wrapper.ant-input-affix-wrapper-lg > input';
var account = 'gavin.nie@coolkit.cn';
var password = '123456';
var loginBtn = '#root > div > div > div:nth-child(2) > button';
var pressEnter = 'Enter';
//userInfo
var userInfo___7ZPSO = '#root > div > section > section > header > div > div > span.userInfo___7ZPSO';
/**
 * NavInfo
 */
//NavDeviceInfoSearch
var waitForSelectorSearchInput = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper';
var deviceIdInputSearch = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > span:nth-child(1) > span.ant-input-affix-wrapper > input';
var deviceIdText = '1000028060';
var searchBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.queryPanel___3l-Tv > div > button';
var waitForSelectorSearchContent = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr';
var exportDataBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a';
var viewSharerLimit = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(16) > button';
var viewDeviceStatus = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(17) > button > span';
var viewonoff = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr > td:nth-child(18) > button > span';
// DeviceonoffLog
var waitForSelectorONOFFTable = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody';
var onoffContent = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr';
var exportONOFFContnetBtn = '#root > div > section > section > main > div > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content.ant-tabs-card-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.normal___16mjt > div.resultPanel___cUpUF > div > div:nth-child(1) > button > a';
var deleteONOFFContnetDiv = '#root > div > section > section > main > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div.ant-tabs-tab-active.ant-tabs-tab > div > i > svg';
var logoutBtn = '#root > div > section > section > header > div > div > button';
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, loginInfo, user_Info, navInfo, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1.launch({ headless: false, defaultViewport: { width: 1600, height: 868 } })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                loginInfo = new loginInfo_1.LoginInfo();
                return [4 /*yield*/, loginInfo.userInfo(page, waitForLoginDOM, accountInput, passwordInput, account, password, loginBtn, pressEnter)];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector(userInfo___7ZPSO)];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.$eval(userInfo___7ZPSO, function (ele) { return ele.textContent; })];
            case 5:
                user_Info = _a.sent();
                user_Info === undefined || null ? console.log('无用户信息') : console.log("user_Info --> " + user_Info); //打印userInfo
                navInfo = new navInfo_1.NavInfo();
                return [4 /*yield*/, navInfo.navDeviceSearch(page, waitForSelectorSearchInput, deviceIdInputSearch, deviceIdText, searchBtn, waitForSelectorSearchContent, waitForSelectorSearchContent, exportDataBtn, viewSharerLimit, viewDeviceStatus, viewonoff, waitForSelectorONOFFTable, onoffContent, exportONOFFContnetBtn, deleteONOFFContnetDiv)
                    // 退出登录
                ];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                _a.trys.push([7, 9, , 10]);
                return [4 /*yield*/, page.click(logoutBtn, { delay: 1000 })];
            case 8:
                _a.sent();
                return [3 /*break*/, 10];
            case 9:
                error_1 = _a.sent();
                console.log("\u9000\u51FA\u767B\u5F55 --> " + error_1);
                return [3 /*break*/, 10];
            case 10: 
            //等待两秒后关闭浏览器
            return [4 /*yield*/, page.waitFor(2 * 1000)];
            case 11:
                //等待两秒后关闭浏览器
                _a.sent();
                return [4 /*yield*/, browser.close().then(function () { return console.log('关闭浏览器'); })];
            case 12:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
run();
