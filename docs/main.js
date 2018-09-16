(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n    <nz-header><h2>JS Validator</h2></nz-header>\n    <nz-content><app-inputbox [data]=\"content\"></app-inputbox></nz-content>\n    <nz-footer>Built using Angular (6.1.0), jshint (2.9.6) and ng-zorro (1.5.0). by Daniel Cai, Sep 2018</nz-footer>\n  </nz-layout>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #ffffff;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    // JSHINT(source, options, predef);
    // onInput(value) {
    //   this.content = 'Hi'+value;
    // }
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onSelect = function (data) {
        this.content = data.content;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _inputbox_inputbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputbox/inputbox.component */ "./src/app/inputbox/inputbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_8___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _inputbox_inputbox_component__WEBPACK_IMPORTED_MODULE_9__["InputboxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
    }
    return Data;
}());



/***/ }),

/***/ "./src/app/inputbox/inputbox.component.html":
/*!**************************************************!*\
  !*** ./src/app/inputbox/inputbox.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row>\n  <div nz-col nzSm=\"12\" nzXs=\"24\">\n    <textarea row=\"4\"  (keyup)=\"onInput()\" nz-input [(ngModel)]=\"content\" placeholder=\"Enter some javascript code here...\"></textarea>\n  </div>\n  <div nz-col nzSm=\"12\" class=\"result\" nzXs=\"24\">\n    <ng-container *ngIf=\"content!='' && content!=undefined; else isEmpty\">\n        <ng-container *ngIf=\"valid; else showError\">\n          <h3 class='valid'>Result: Javascript is Valid.</h3>\n        </ng-container>\n        <ng-template #showError>\n          <div *ngIf=\"errors!=undefined\">\n            <h3 class='error'>Result: ({{errors.length}} error{{errors.length==1?'':'s'}} found)</h3>\n            <nz-table #basicTable [nzData]=\"errors\" [nzShowPagination]=\"false\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Evidence</th>\n                  <th>Reason</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let error of errors;let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{error.evidence}}</td>\n                  <td>{{error.reason}}</td>\n                </tr>\n              </tbody>\n            </nz-table>\n          </div>\n        </ng-template>\n    </ng-container>\n    \n    <ng-template #isEmpty>\n      <h3>Please enter javascript code in the textbox to detect errors and view report.</h3>\n    </ng-template>\n  </div>\n</div>\n<div nz-row>\n    <div nz-col nzSpan=\"24\" class=\"buttons\">\n        <button nz-button nzType=\"primary\" (click)=\"tryInput('valid')\">Valid JS</button>\n        <button nz-button nzType=\"default\" (click)=\"tryInput('oneerror')\">With 1 error</button>\n        <button nz-button nzType=\"danger\" (click)=\"tryInput('moreerror')\">More than 1 error</button>\n        <button nz-button nzType=\"default\" (click)=\"tryInput('clear')\">Clear</button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/inputbox/inputbox.component.scss":
/*!**************************************************!*\
  !*** ./src/app/inputbox/inputbox.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  height: 70vh; }\n\n.result {\n  padding: 10px;\n  background: #fff;\n  height: 70vh; }\n\n.result h3.valid {\n    color: #01DF01; }\n\n.result h3.error {\n    color: #FE2E2E; }\n\nul {\n  padding-left: 0; }\n\nul li {\n    list-style: none; }\n\nul li span {\n      padding: 5px; }\n\n.err {\n  color: #FE2E2E; }\n\n.buttons {\n  padding: 10px; }\n\n.buttons button {\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/inputbox/inputbox.component.ts":
/*!************************************************!*\
  !*** ./src/app/inputbox/inputbox.component.ts ***!
  \************************************************/
/*! exports provided: InputboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputboxComponent", function() { return InputboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jshint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jshint */ "./node_modules/jshint/src/jshint.js");
/* harmony import */ var jshint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jshint__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputboxComponent = /** @class */ (function () {
    function InputboxComponent() {
        this.options = {
            undef: true
        };
        this.predef = {
            foo: false
        };
    }
    InputboxComponent.prototype.ngOnInit = function () { };
    InputboxComponent.prototype.onInput = function () {
        Object(jshint__WEBPACK_IMPORTED_MODULE_1__["JSHINT"])(this.content, this.options, this.predef);
        this.errors = jshint__WEBPACK_IMPORTED_MODULE_1__["JSHINT"].errors ? jshint__WEBPACK_IMPORTED_MODULE_1__["JSHINT"].errors : [];
        if (this.errors.length) {
            this.valid = false;
        }
        else {
            if (this.content != '') {
                this.valid = true;
            }
        }
    };
    InputboxComponent.prototype.tryInput = function (input) {
        switch (input) {
            case 'valid':
                this.content = 'var a = 1;';
                break;
            case 'oneerror':
                this.content = 'var b = 2';
                break;
            case 'moreerror':
                this.content = 'var c !@#= jiofdsja2';
                break;
            case 'clear':
                this.content = '';
                break;
            default:
                break;
        }
        this.onInput();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data__WEBPACK_IMPORTED_MODULE_2__["Data"])
    ], InputboxComponent.prototype, "data", void 0);
    InputboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputbox',
            template: __webpack_require__(/*! ./inputbox.component.html */ "./src/app/inputbox/inputbox.component.html"),
            styles: [__webpack_require__(/*! ./inputbox.component.scss */ "./src/app/inputbox/inputbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputboxComponent);
    return InputboxComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\dev\js-validator-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map