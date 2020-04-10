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
            var nav_Info, deviceId_Info_tbody;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.$$eval(navinfoSlelctor, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 1:
                        nav_Info = _a.sent();
                        nav_Info ? console.log("nav_Info --> " + nav_Info) : console.log('nav_Info -- 获取导航栏信息失败');
                        //等待 搜索框元素 出现后输入内容并点击
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorInput)];
                    case 2:
                        //等待 搜索框元素 出现后输入内容并点击
                        _a.sent();
                        return [4 /*yield*/, page.type(deviceIdInputSearchSlelctor, deviceIdText, { delay: 100 })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.click(searchBtn)];
                    case 4:
                        _a.sent();
                        //等待 搜索内容table元素 出现 获取搜索内容 并打印
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorSearchContentTbody)];
                    case 5:
                        //等待 搜索内容table元素 出现 获取搜索内容 并打印
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(waitForSelectorSearchContentTbody, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 6:
                        deviceId_Info_tbody = _a.sent();
                        deviceId_Info_tbody ? console.log("deviceId_Info_tbody --> " + deviceId_Info_tbody) : console.log('deviceId_Info_tbody -- 设备信息查询失败');
                        if (!exportDataBtn) return [3 /*break*/, 8];
                        return [4 /*yield*/, page.click(exportDataBtn, { delay: 1500 }).then(function () {
                                try {
                                    console.log('deviceid_Info_tbody -- 设备信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("deviceid_Info_tbody -- \u8BBE\u5907\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    //用户信息查询
    NavInfo.prototype.navUserSearch = function (page, onClickUserLiSelelctor, userdeviceIdInputSearchSelelctor, deviceIdText, searchBtnSlelctor, waitForSelectorUserSearchContentTbody, deleteUserSearchContnetDiv) {
        return __awaiter(this, void 0, void 0, function () {
            var userSearch_Info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.waitForSelector(onClickUserLiSelelctor)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.click(onClickUserLiSelelctor)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(userdeviceIdInputSearchSelelctor)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.type(userdeviceIdInputSearchSelelctor, deviceIdText, { delay: 100 })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, page.click(searchBtnSlelctor)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, page.click(waitForSelectorUserSearchContentTbody)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(waitForSelectorUserSearchContentTbody, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 7:
                        userSearch_Info = _a.sent();
                        userSearch_Info ? console.log("userSearch_Info --> " + userSearch_Info) : console.log('userSearch_Info --查询用户deviceID信息');
                        return [4 /*yield*/, page.click(deleteUserSearchContnetDiv)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //操作历史记录
    NavInfo.prototype.navHistoryRecord = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.waitForSelector()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.type()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, page.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, page.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NavInfo;
}());
exports.NavInfo = NavInfo;
