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
    NavInfo.prototype.navDeviceSearch = function (page, waitForSelector, deviceIdInputSearch, deviceIdText, searchBtn, waitForSelectorSearchContent, searchContent, exportDataBtn, viewSharerLimit, viewDeviceStatus, viewONOFF) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceId_Info, onoff_Info;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.waitForSelector(waitForSelector)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.type(deviceIdInputSearch, deviceIdText, { delay: 100 })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.click(searchBtn)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorSearchContent)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(searchContent, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 5:
                        deviceId_Info = _a.sent();
                        deviceId_Info ? console.log("deviceId_Info --> " + deviceId_Info) : console.log('deviceid -- 设备信息查询失败');
                        return [4 /*yield*/, page.click(exportDataBtn).then(function () {
                                try {
                                    console.log('deviceid_Info -- 设备信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("deviceid_Info -- \u8BBE\u5907\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 6:
                        _a.sent(); //导出查询数据
                        //查看被分享人+权限
                        return [4 /*yield*/, page.click(viewSharerLimit)];
                    case 7:
                        //查看被分享人+权限
                        _a.sent();
                        return [4 /*yield*/, page.on('dialog', function (dialog) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("\u6253\u5370\u88AB\u5206\u4EAB\u4EBA+\u6743\u9650dialog\u4FE1\u606F ---> " + dialog.message());
                                            return [4 /*yield*/, dialog.accept()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 8:
                        _a.sent();
                        //当前设备状态
                        return [4 /*yield*/, page.click(viewDeviceStatus)];
                    case 9:
                        //当前设备状态
                        _a.sent();
                        return [4 /*yield*/, page.on('dialog', function (dialog) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("\u5F53\u524D\u8BBE\u5907\u72B6\u6001 params \u4FE1\u606F ---> " + dialog.message());
                                            return [4 /*yield*/, dialog.accept()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 10:
                        _a.sent();
                        //上下线纪录
                        return [4 /*yield*/, page.click(viewONOFF)];
                    case 11:
                        //上下线纪录
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorONOFFTable)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(onoffContent, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 13:
                        onoff_Info = _a.sent();
                        onoff_Info ? console.log("onoff_Info --> " + onoff_Info) : console.log('onoff_Info --查询不到设备上下线记录');
                        return [4 /*yield*/, page.click(exportONOFFContnetBtn, { delay: 1000 })];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, page.click(deleteONOFFContnetDiv, { delay: 1000 })
                            //操作历史记录
                        ];
                    case 15:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NavInfo.prototype.navONOFFSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return NavInfo;
}());
exports.NavInfo = NavInfo;
