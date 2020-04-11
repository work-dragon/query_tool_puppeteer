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
var NavInfo = /** @class */ (function () {
    function NavInfo() {
    }
    //设备信息查询
    NavInfo.prototype.navDeviceSearch = function (page, navinfoSlelctor, //导航栏中的ul
    waitForSelectorInput, // 等待，直到 输入框相关 元素呈现
    deviceIdInputSearchSlelctor, //deviceID的输入框
    deviceIdText, //输入框的内容
    searchBtn, //查询的button
    waitForSelectorSearchContentTbody, //等待，直到 搜索内容的相关 元素呈现
    deleteDeviceInfoSearchInputValue, //清空输入框的内容
    exportDataBtn, //导出button
    viewonoffBtn, //查看上下线纪录 button
    waitForSelectorUserSearchContentTbody, //等待，直到“相关”元素呈现
    // onoffContent: string,                   //设备上下线内容
    exportONOFFContnetBtn, //导出上下线按钮
    deleteONOFFContnetDiv, //删除tab栏的div
    //传入 viewSharerLimitBtn 下列相关的Sharer 都需要传
    viewSharerLimitBtn, //查看被分享人+权限 button
    viewSharerDialogDiv, //点击被分享人+权限 dialog 
    sharerDialogContent, //被分享人+权限 dialog内容
    sharerDialogAccept, //被分享人+权限 确认 -- Dialog
    //传入 viewDeviceStatusBtn 下列相关的DeviceStatus 都需要传
    viewDeviceStatusBtn, //查看当前设备状态 button
    viewDeviceStatusDialogDiv, //当前设备状态的 dialog 
    deviceStatusDialogContent, //当前设备状态 dialog内容
    deviceStatusDialogAccept) {
        return __awaiter(this, void 0, void 0, function () {
            var navText, navDeviceId_Info_tbody;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.$$eval(navinfoSlelctor, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 1:
                        navText = _a.sent();
                        navText ? console.log("navText --> " + navText) : console.log('navText -- 获取导航栏信息失败');
                        //等待 搜索框元素 出现后输入内容并点击
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorInput)];
                    case 2:
                        //等待 搜索框元素 出现后输入内容并点击
                        _a.sent();
                        return [4 /*yield*/, page.click(deviceIdInputSearchSlelctor)];
                    case 3:
                        _a.sent();
                        // await cleanText(page);;
                        // let cleanText = new CleanText()
                        // await cleanText.domClean(page, elements.antInputValueSelector)    
                        return [4 /*yield*/, page.type(deviceIdInputSearchSlelctor, deviceIdText, { delay: 500 })];
                    case 4:
                        // await cleanText(page);;
                        // let cleanText = new CleanText()
                        // await cleanText.domClean(page, elements.antInputValueSelector)    
                        _a.sent();
                        return [4 /*yield*/, page.click(searchBtn)];
                    case 5:
                        _a.sent();
                        //等待 搜索内容table元素 出现 获取搜索内容 并打印
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorSearchContentTbody)];
                    case 6:
                        //等待 搜索内容table元素 出现 获取搜索内容 并打印
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(waitForSelectorSearchContentTbody, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 7:
                        navDeviceId_Info_tbody = _a.sent();
                        navDeviceId_Info_tbody ? console.log("navDeviceId_Info_tbody --> " + navDeviceId_Info_tbody) : console.log('navDeviceId_Info_tbody -- 设备信息查询失败');
                        if (!exportDataBtn) return [3 /*break*/, 10];
                        return [4 /*yield*/, page.waitForSelector(exportDataBtn)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, page.click(exportDataBtn, { delay: 1500 }).then(function () {
                                try {
                                    console.log('navDeviceid_Info_tbody -- 设备信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("navDeviceid_Info_tbody -- \u8BBE\u5907\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        ;
                        return [4 /*yield*/, page.waitForSelector(deleteDeviceInfoSearchInputValue)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, page.click(deleteDeviceInfoSearchInputValue, { delay: 2000 }).then(function () { return console.log('清空 设备信息查询 输入框的内容'); })];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //用户信息查询
    NavInfo.prototype.navUserSearch = function (page, deletePreTabDiv, onClickUserLiSelelctor, userAccountInputSearchSelelctor, accountPhone, userSearchBtnSlelctor, waitForSelectorUserSearchContentTbody, cleanUserDeviceIdText, exportuserAccountInfoDataBtn) {
        return __awaiter(this, void 0, void 0, function () {
            var navUserSearch_Info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('从导航栏中进入 用户信息查询');
                        return [4 /*yield*/, page.waitForSelector(onClickUserLiSelelctor)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.click(onClickUserLiSelelctor)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(userAccountInputSearchSelelctor)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.click(userAccountInputSearchSelelctor)];
                    case 4:
                        _a.sent();
                        // await cleanText(page);
                        return [4 /*yield*/, page.waitForSelector(deletePreTabDiv)];
                    case 5:
                        // await cleanText(page);
                        _a.sent();
                        return [4 /*yield*/, page.click(deletePreTabDiv, { delay: 1000 }).then(function () { return console.log('关闭用户信息查询前一个tab栏'); })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, page.type(userAccountInputSearchSelelctor, accountPhone, { delay: 500 })];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, page.click(userSearchBtnSlelctor).then(function () { return console.log('在用户信息查询中 点击查询按钮'); })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorUserSearchContentTbody)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, page.click(waitForSelectorUserSearchContentTbody)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(waitForSelectorUserSearchContentTbody, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 11:
                        navUserSearch_Info = _a.sent();
                        navUserSearch_Info ? console.log("navUserSearch_Info --> " + navUserSearch_Info) : console.log('navUserSearch_Info -- 查询用户信息失败');
                        if (!exportuserAccountInfoDataBtn) return [3 /*break*/, 14];
                        return [4 /*yield*/, page.waitForSelector(exportuserAccountInfoDataBtn)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, page.click(exportuserAccountInfoDataBtn, { delay: 1500 }).then(function () {
                                try {
                                    console.log('navUser_Info_tbody -- 用户账号信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("navUser_Info_tbody -- \u7528\u6237\u8D26\u53F7\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        ;
                        return [4 /*yield*/, page.click(cleanUserDeviceIdText).then(function () { return console.log('清空 用户信息查询 输入框的内容'); })];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //操作历史记录
    NavInfo.prototype.navHistoryRecord = function (page, onClickHistoryLiSelelctor, deletePreTabDiv, historyDeviceIdInputSearchSelelctor, historyDeviceIdText, historySearchBtnSlelctor, cleanHistoryDeviceIdText) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('从导航栏中进入 操作历史记录');
                        return [4 /*yield*/, page.waitForSelector(onClickHistoryLiSelelctor)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.click(onClickHistoryLiSelelctor)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(deletePreTabDiv)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.click(deletePreTabDiv).then(function () { return console.log('关闭操作历史记录前一个tab栏'); })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(historyDeviceIdInputSearchSelelctor)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, page.type(historyDeviceIdInputSearchSelelctor, historyDeviceIdText, { delay: 500 }).then(function () { return console.log("\u70B9\u51FB\u64CD\u4F5C\u5386\u53F2\u8BB0\u5F55 --> \u67E5\u8BE2\u6761\u4EF6 deviceid  Input\u5E76\u8F93\u5165-" + historyDeviceIdText + "-"); })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, page.click(historySearchBtnSlelctor).then(function () { return console.log('在操作历史中 点击查询按钮'); })];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, page.click(cleanHistoryDeviceIdText).then(function () { return console.log('清空 操作历史记录 输入框的内容'); })];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NavInfo;
}());
exports.NavInfo = NavInfo;
