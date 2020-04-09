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
var deviceonofflog_1 = require("./deviceonofflog");
var NavInfo = /** @class */ (function () {
    function NavInfo() {
    }
    NavInfo.prototype.navDeviceSearch = function (page, waitForSelector, // 等待，直到“相关”元素呈现
    deviceIdInputSearch, //deviceID的输入框
    deviceIdText, //输入框的内容
    searchBtn, //查询的button
    waitForSelectorSearchContent, //
    searchContent, //
    exportDataBtn, //导出button
    viewSharerLimit, //查看被分享人+权限 button
    viewSharerDialogDiv, //被分享人+权限 dialog 的div
    viewDeviceStatus, //查看当前设备状态 button
    viewONOFF, //查看上下线纪录 button
    waitForSelectorONOFFTable, //等待，直到“相关”元素呈现
    onoffContent, //设备上下线内容
    exportONOFFContnetBtn, //导出上下线按钮
    deleteONOFFContnetDiv) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceId_Info, deviceonofflog;
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
                        return [4 /*yield*/, page.waitForSelector(viewSharerDialogDiv)
                            // await page.
                            // await page.on('dialog', async dialog => {
                            //     console.log(`打印被分享人+权限dialog信息 ---> ${dialog.message()}`);
                            //     await dialog.accept();
                            // });
                            //当前设备状态
                        ];
                    case 8:
                        _a.sent();
                        // await page.
                        // await page.on('dialog', async dialog => {
                        //     console.log(`打印被分享人+权限dialog信息 ---> ${dialog.message()}`);
                        //     await dialog.accept();
                        // });
                        //当前设备状态
                        return [4 /*yield*/, page.click(viewDeviceStatus)];
                    case 9:
                        // await page.
                        // await page.on('dialog', async dialog => {
                        //     console.log(`打印被分享人+权限dialog信息 ---> ${dialog.message()}`);
                        //     await dialog.accept();
                        // });
                        //当前设备状态
                        _a.sent();
                        // await page.on('dialog', async dialog => {
                        //     console.log(`当前设备状态 params 信息 ---> ${dialog.message()}`);
                        //     await dialog.accept();
                        // });
                        //上下线纪录
                        return [4 /*yield*/, page.click(viewONOFF)];
                    case 10:
                        // await page.on('dialog', async dialog => {
                        //     console.log(`当前设备状态 params 信息 ---> ${dialog.message()}`);
                        //     await dialog.accept();
                        // });
                        //上下线纪录
                        _a.sent();
                        deviceonofflog = new deviceonofflog_1.Deviceonofflog();
                        deviceonofflog.onoffLog(page, waitForSelectorONOFFTable, onoffContent, exportONOFFContnetBtn, deleteONOFFContnetDiv);
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
