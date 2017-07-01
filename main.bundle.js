webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "\n<form class=\"form-horizontal\">\n\n  <button class=\"btn btn-primary\" (click)=\"save()\">save</button>\n  <button class=\"btn btn-default\" (click)=\"restore()\">cancell</button>\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSaved\">saved.</div>\n  <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"showCancelled\">cancelled.</div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"span\">更新間隔（ミリ秒）</label>\n      <p>パネルの表示を更新する間隔.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <select id=\"span\" class=\"form-control\" [(ngModel)]=\"curConfig.replacementSpan\" name=\"span\">\n        <option *ngFor=\"let span of spans\">{{span}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"bytes\">バイト長</label>\n      <p>表示単位を制限するおおよその長さ.<br>実際の長さは他の条件によって前後する.バイト長を超えていても,形態素以上に分解されることはない.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <select id=\"bytes\" class=\"form-control\" [(ngModel)]=\"curConfig.joinUnit\" name=\"bytes\">\n        <option *ngFor=\"let byte of bytes\">{{byte}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"points\">句読点</label>\n      <p>句読点が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isPointInPrev\" name=\"point\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"particle\">助詞</label>\n      <p>助詞が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isParticleInPrev\" name=\"particle\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"auxiliaryVerb\">助動詞</label>\n      <p>助動詞が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isAuxiliaryVerbInPrev\" name=\"auxiliaryVerb\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"nounSuffix\">名詞（接尾）</label>\n      <p>名詞（接尾）が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isNounSuffixInPrev\" name=\"nounSuffix\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"verbSuffix\">動詞（接尾）</label>\n      <p>動詞（接尾）が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isVerbSuffixInPrev\" name=\"verbSuffix\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"verbNonSelf\">動詞（非自立）</label>\n      <p>動詞（非自立）が先頭にくる場合,直前の単位の末尾に結合させる.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isVerbNonSelfRelianceInPrev\" name=\"verbNonSelf\"></label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-5\">\n      <label class=\"control-label\" for=\"devMode\">おまけ</label>\n      <p>以下の機能を有効化する.<br>・解析のみを行うボタン.</p>\n    </div>\n    <div class=\"col-sm-2\">\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" [(ngModel)]=\"curConfig.isDevMode\" name=\"devMode\"></label>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = ConfigService_1 = (function () {
    function ConfigService() {
        // 句読点を、直前の単位の末尾に結合させるフラグ
        this.isPointInPrev = true;
        // 接頭詞を、次の単位の先頭に結合させるフラグ
        //isPrefixInAfter: boolean = true;
        // 助詞を、直前の単位の末尾に結合させるフラグ
        this.isParticleInPrev = true;
        // 助動詞を、直前の単位の末尾に結合させるフラグ
        this.isAuxiliaryVerbInPrev = true;
        // 名詞（接尾）を、直前の単位の末尾に結合させるフラグ
        this.isNounSuffixInPrev = true;
        // 動詞（接尾）を、直前の単位の末尾に結合させるフラグ
        this.isVerbSuffixInPrev = true;
        // 動詞（非自立）を、直前の単位の末尾に結合させるフラグ
        this.isVerbNonSelfRelianceInPrev = true;
        // 連体詞を、次の単位の先頭に結合させるフラグ
        //isAdnominalInPrev: boolean = true;
        // 数字
        // 
        // 表示更新間隔（ミリ秒）
        this.replacementSpan = 300;
        // 結合するサイズ（byte）
        this.joinUnit = 16;
        // 開発者モード
        this.isDevMode = false;
    }
    ConfigService.prototype.clone = function () {
        var conf = new ConfigService_1();
        conf.isPointInPrev = this.isPointInPrev;
        conf.isParticleInPrev = this.isParticleInPrev;
        conf.isAuxiliaryVerbInPrev = this.isAuxiliaryVerbInPrev;
        conf.isNounSuffixInPrev = this.isNounSuffixInPrev;
        conf.isVerbSuffixInPrev = this.isVerbSuffixInPrev;
        conf.isVerbNonSelfRelianceInPrev = this.isVerbNonSelfRelianceInPrev;
        conf.replacementSpan = this.replacementSpan;
        conf.joinUnit = this.joinUnit;
        conf.isDevMode = this.isDevMode;
        return conf;
    };
    ConfigService.prototype.save = function (conf) {
        this.isPointInPrev = conf.isPointInPrev;
        this.isParticleInPrev = conf.isParticleInPrev;
        this.isAuxiliaryVerbInPrev = conf.isAuxiliaryVerbInPrev;
        this.isNounSuffixInPrev = conf.isNounSuffixInPrev;
        this.isVerbSuffixInPrev = conf.isVerbSuffixInPrev;
        this.isVerbNonSelfRelianceInPrev = conf.isVerbNonSelfRelianceInPrev;
        this.replacementSpan = conf.replacementSpan;
        this.joinUnit = conf.joinUnit;
        this.isDevMode = conf.isDevMode;
    };
    return ConfigService;
}());
ConfigService = ConfigService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

var ConfigService_1;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var ConfigComponent = (function () {
    function ConfigComponent(config) {
        this.config = config;
        this.showSaved = false;
        this.showCancelled = false;
        this.bytes = [0, 4, 8, 12, 16, 20, 24];
        this.spans = [500, 400, 300, 200, 100];
        this.curConfig = config.clone();
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.curConfig = this.config.clone();
                        this.showCancelled = true;
                        return [4 /*yield*/, sleep(2000)];
                    case 1:
                        _a.sent();
                        this.showCancelled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.config.save(this.curConfig);
                        this.showSaved = true;
                        return [4 /*yield*/, sleep(2000)];
                    case 1:
                        _a.sent();
                        this.showSaved = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-config',
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], ConfigComponent);

function sleep(msec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(true);
        }, msec);
    });
}
var _a;
//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var MainComponent = (function () {
    function MainComponent(config) {
        this.config = config;
        this.inputText = "Angular\u306F\u3001Web\u6280\u8853\u3067\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u69CB\u7BC9\u3092\u5BB9\u6613\u306B\u3059\u308B\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3067\u3059\u3002\n  \u5BA3\u8A00\u7684\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3001\u4F9D\u5B58\u6027\u6CE8\u5165\u3001\u5305\u62EC\u7684\u306A\u30C4\u30FC\u30EB\u7FA4\u3084\u3001\u7D71\u5408\u3055\u308C\u305F\u30D9\u30B9\u30C8\u30D7\u30E9\u30AF\u30C6\u30A3\u30B9\u3092\u7D44\u307F\u5408\u308F\u305B\u3066\u3001\u958B\u767A\u306E\u8AB2\u984C\u3092\u89E3\u6C7A\u3057\u307E\u3059\u3002\n  Angular\u306F\u3001Web\u3001\u30E2\u30D0\u30A4\u30EB\u3001\u307E\u305F\u306F\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u3067\u52D5\u4F5C\u3059\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u69CB\u7BC9\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\n  ";
        this.isLoaded = false;
        this.showProgress = false;
        this.showLoaded = false;
        this.loadMax = 100;
        this.loadValue = 0;
        this.loadWidth = '0%';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var btnStart = document.getElementById('btn-start');
        var progDL = document.getElementById('progressDownload');
        var numFormat = new Intl.NumberFormat('ja-JP', { maximumSignificantDigits: 2 });
        //btnStart.setAttribute('disabled', 'disabled');
        // mecab load
        window.addEventListener('mecab_loading', function (event) {
            //console.log(event);
            _this.showProgress = true;
            _this.loadValue = event.loaded;
            _this.loadMax = event.total;
            _this.loadWidth = (event.loaded / event.total * 100).toString() + '%';
        }, false);
        //window.addEventListener('mecab_loaded', function(event: Event){
        window.addEventListener('mecab_loaded', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoaded = true;
                        //btnStart.removeAttribute('disabled');
                        this.showLoaded = true;
                        return [4 /*yield*/, sleep(2000)];
                    case 1:
                        _a.sent();
                        this.showProgress = false;
                        this.showLoaded = false;
                        return [2 /*return*/];
                }
            });
        }); }, false);
    };
    MainComponent.prototype.parseClick = function () {
        this.parse();
    };
    MainComponent.prototype.startClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, _i, _a, text;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (toAnalyze) {
                            console.log("found.");
                        }
                        else {
                            console.log("not found.");
                        }
                        // 入力テキストの解析
                        this.parse();
                        i = 0;
                        _i = 0, _a = this.builtText;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        text = _a[_i];
                        this.currentText = text;
                        return [4 /*yield*/, sleep(this.config.replacementSpan)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.currentText = '<おしまい>';
                        return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.bytes = function (str) {
        return (encodeURIComponent(str).replace(/%../g, "x").length);
    };
    MainComponent.prototype.parse = function () {
        // mecab で解析
        this.analyzedText = toAnalyze(this.inputText);
        var tmp = '';
        var word = '';
        var i = 0;
        var point = ['、', '。'];
        this.builtText = [tmp];
        // 解析結果の形態素を、適当な長さにまとめる。
        for (var _i = 0, _a = this.analyzedText.split('\n'); _i < _a.length; _i++) {
            var line = _a[_i];
            word = line.split('\t')[0];
            if (/^EOS/.test(line)) {
                // End of Statement.
                word = '';
            }
            else if (this.bytes(tmp) + this.bytes(word) < this.config.joinUnit) {
                // バイト長
                tmp += word;
            }
            else if (/記号,読点|記号,句点/.test(line)) {
                if (this.config.isPointInPrev) {
                    // 句読点は末尾に結合
                    tmp += word;
                }
            }
            else if (/\t助詞/.test(line)) {
                if (this.config.isParticleInPrev) {
                    tmp += word;
                }
            }
            else if (/\t助動詞/.test(line)) {
                if (this.config.isAuxiliaryVerbInPrev) {
                    tmp += word;
                }
            }
            else if (/名詞,接尾/.test(line)) {
                if (this.config.isNounSuffixInPrev) {
                    tmp += word;
                }
            }
            else if (/動詞,接尾/.test(line)) {
                if (this.config.isVerbSuffixInPrev) {
                    tmp += word;
                }
            }
            else if (/動詞,非自立/.test(line)) {
                if (this.config.isVerbNonSelfRelianceInPrev) {
                    tmp += word;
                }
            }
            else {
                i += 1;
                tmp = word;
                this.builtText.push('');
            }
            this.builtText[i] = tmp;
        }
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-main',
        //templateUrl: './main.component.html',
        styles: [__webpack_require__(156)],
        template: "\n  <textarea [(ngModel)]=\"inputText\" placeholder=\"\u5165\u529B\u6B04\" class=\"form-control\" rows=\"3\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><h3 class=\"panel-title\">panel</h3></div>\n            <div class=\"panel-body\">{{currentText}}</div>\n          </div>\n        </div>\n      </div>\n  <input type=\"button\" value=\"start\" id=\"btn-start\" class=\"btn btn-primary\" (click)=\"startClick()\" >\n  <input type=\"button\" value=\"parse only\" class=\"btn btn-warning\" (click)=\"parseClick()\" *ngIf=\"config.isDevMode\"><br>\n    <div class=\"row\" *ngIf=\"config.isDevMode\">\n      <button *ngFor=\"let word of builtText\" class=\"btn btn-default\">{{word}}</button>\n    </div>\n  <div class=\"progress\" *ngIf=\"showProgress\">\n    <div class=\"progress-bar\" id=\"progressDownload\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valueMax=\"100\" [style.width]=\"loadWidth\">\n      <span class=\"sr-only\">complete</span>\n    </div>\n  </div>\n  <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"showLoaded\">Library loaded.</div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], MainComponent);

function sleep(msec) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(true);
        }, msec);
    });
}
var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(161),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// routing



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_3__config_config_component__["a" /* ConfigComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/// <reference path="mecab.d.ts"/>
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'hyper reader.';
        this.mainMenu = 'Main';
        this.confMenu = 'Config';
        this.isLoaded = false;
        this.onMain = true;
        this.onConfig = false;
    }
    AppComponent.prototype.selectMenu = function (event) {
        //console.log(event);
        //console.log(event.target.textContent);
        if (event.target.textContent == this.title ||
            event.target.textContent == this.mainMenu) {
            this.onMain = true;
            this.onConfig = false;
        }
        else {
            this.onMain = false;
            this.onConfig = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        //templateUrl: './app.component.html',
        styles: [__webpack_require__(154)],
        template: "\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        <a routerLink=\"\" class=\"navbar-brand\" role=\"button\" (click)=\"selectMenu($event)\">{{title}}</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li [class.active]=\"onMain\"><a routerLink=\"\" role=\"button\" (click)=\"selectMenu($event)\">{{mainMenu}}</a></li>\n          <li [class.active]=\"onConfig\"><a routerLink=\"/config\" role=\"button\" (click)=\"selectMenu($event)\">{{confMenu}}</a></li> \n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <div class=\"main\" style=\"padding:90px 15px\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__config_config_component__["a" /* ConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__config_service__["a" /* ConfigService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.bundle.js.map