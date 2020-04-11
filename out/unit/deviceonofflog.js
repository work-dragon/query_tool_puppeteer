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
var Deviceonofflog = /** @class */ (function () {
    function Deviceonofflog() {
    }
    //无点击是从设备信息查询的table中点击进入
    Deviceonofflog.prototype.notClickLionoffLog = function (page, viewonoffBtn, waitForSelectorONOFFTbody, 
    // onoffContent: string,
    exportONOFFContnetBtn, deleteONOFFContnetDiv) {
        return __awaiter(this, void 0, void 0, function () {
            var onoff_Info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('1111');
                        return [4 /*yield*/, page.waitForSelector(viewonoffBtn)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, page.click(viewonoffBtn)];
                    case 2:
                        _a.sent();
                        console.log('222');
                        return [4 /*yield*/, page.waitForSelector(waitForSelectorONOFFTbody)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.$$eval(waitForSelectorONOFFTbody, function (eles) { return eles.map(function (ele) { return ele.textContent; }); })];
                    case 4:
                        onoff_Info = _a.sent();
                        onoff_Info ? console.log("onoff_Info --> " + onoff_Info) : console.log('onoff_Info --查询不到设备上下线记录');
                        return [4 /*yield*/, page.waitForSelector(exportONOFFContnetBtn)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, page.click(exportONOFFContnetBtn, { delay: 1000 }).then(function () {
                                try {
                                    console.log('Deviceonofflog -- 设备信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("Deviceonofflog -- \u8BBE\u5907\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 6:
                        _a.sent(); //导出查询数据
                        return [4 /*yield*/, page.click(deleteONOFFContnetDiv, { delay: 1000 })];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //从导航栏中点击进入
    Deviceonofflog.prototype.onClickLionoffLog = function (page, deletePreTabDiv, onClickONOFFLiSelelctor, onoffLogdeviceIdInputSearchSelelctor, deviceIdText, 
    // clickLeftSelectionTimeSelelctor: string,
    // leftSelectionTimeTextSelelctor: string,
    // leftSelectionTimeText: string,
    // clickRightSelectionTimeSelelctor: string,
    // rightSelectionTimeTextSelelctor: string,
    // rightSelectionTimeText: string,
    // acceptSelectionTimeTextSelelctor:string,
    searchBtnSlelctor, 
    // waitForSelectorONOFFTbody: string,
    // onoffContent: string,
    deleteONOFFContnetDiv, exportONOFFContnetBtn) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('从导航栏中进入 上下线记录查询');
                        //点击导航栏中 上下线 Li slector
                        return [4 /*yield*/, page.waitForSelector(onClickONOFFLiSelelctor)];
                    case 1:
                        //点击导航栏中 上下线 Li slector
                        _a.sent();
                        return [4 /*yield*/, page.click(onClickONOFFLiSelelctor)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, page.waitForSelector(deletePreTabDiv)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, page.click(deletePreTabDiv, { delay: 2500 }).then(function () { return console.log('关闭前一个tab栏'); })
                            //等待 上下线页面 的搜索框元素出现
                            //输入deviceID查询条件
                        ];
                    case 4:
                        _a.sent();
                        //等待 上下线页面 的搜索框元素出现
                        //输入deviceID查询条件
                        return [4 /*yield*/, page.waitForSelector(onoffLogdeviceIdInputSearchSelelctor)];
                    case 5:
                        //等待 上下线页面 的搜索框元素出现
                        //输入deviceID查询条件
                        _a.sent();
                        return [4 /*yield*/, page.type(onoffLogdeviceIdInputSearchSelelctor, deviceIdText, { delay: 500 })
                            //选择日期
                            // await page.click(clickLeftSelectionTimeSelelctor,{delay: 100})
                            // await page.click(leftSelectionTimeTextSelelctor, {delay:100})
                            // await page.click(rightSelectionTimeTextSelelctor, {delay: 100})
                            // await page.waitForSelector(acceptSelectionTimeTextSelelctor)
                            // await page.click(acceptSelectionTimeTextSelelctor,{delay: 100})
                            // await page.evaluate(() => (<HTMLInputElement>document.querySelector(leftSelectionTimeTextSelelctor)).value = leftSelectionTimeText)
                            // await page.click(clickRightSelectionTimeSelelctor, {delay:100})
                            // await page.evaluate(() => (<HTMLInputElement>document.querySelector(rightSelectionTimeTextSelelctor)).value = rightSelectionTimeText)
                            //点击查询
                        ];
                    case 6:
                        _a.sent();
                        //选择日期
                        // await page.click(clickLeftSelectionTimeSelelctor,{delay: 100})
                        // await page.click(leftSelectionTimeTextSelelctor, {delay:100})
                        // await page.click(rightSelectionTimeTextSelelctor, {delay: 100})
                        // await page.waitForSelector(acceptSelectionTimeTextSelelctor)
                        // await page.click(acceptSelectionTimeTextSelelctor,{delay: 100})
                        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(leftSelectionTimeTextSelelctor)).value = leftSelectionTimeText)
                        // await page.click(clickRightSelectionTimeSelelctor, {delay:100})
                        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(rightSelectionTimeTextSelelctor)).value = rightSelectionTimeText)
                        //点击查询
                        return [4 /*yield*/, page.click(searchBtnSlelctor)
                            //获取查询内容并打印
                            //等待 查询内容 table元素出现
                            // await page.waitForSelector(waitForSelectorONOFFTbody)
                            // const onoff_Info = await page.$$eval(waitForSelectorONOFFTbody, eles => eles.map(ele => ele.textContent))
                            // onoff_Info ? console.log(`Deviceonofflog --> ${onoff_Info}`) : console.log('onoff_Info --查询不到设备上下线记录');
                            //导出查询数据内容
                        ];
                    case 7:
                        //选择日期
                        // await page.click(clickLeftSelectionTimeSelelctor,{delay: 100})
                        // await page.click(leftSelectionTimeTextSelelctor, {delay:100})
                        // await page.click(rightSelectionTimeTextSelelctor, {delay: 100})
                        // await page.waitForSelector(acceptSelectionTimeTextSelelctor)
                        // await page.click(acceptSelectionTimeTextSelelctor,{delay: 100})
                        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(leftSelectionTimeTextSelelctor)).value = leftSelectionTimeText)
                        // await page.click(clickRightSelectionTimeSelelctor, {delay:100})
                        // await page.evaluate(() => (<HTMLInputElement>document.querySelector(rightSelectionTimeTextSelelctor)).value = rightSelectionTimeText)
                        //点击查询
                        _a.sent();
                        if (!exportONOFFContnetBtn) return [3 /*break*/, 10];
                        return [4 /*yield*/, page.waitForSelector(exportONOFFContnetBtn)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, page.click(exportONOFFContnetBtn, { delay: 1000 }).then(function () {
                                try {
                                    console.log('Deviceonofflog -- 设备信息 -- 导出数据成功');
                                }
                                catch (error) {
                                    console.log("Deviceonofflog -- \u8BBE\u5907\u4FE1\u606F -- \u5BFC\u51FA\u6570\u636E\u5931\u8D25" + error);
                                }
                            })];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return Deviceonofflog;
}());
exports.Deviceonofflog = Deviceonofflog;
