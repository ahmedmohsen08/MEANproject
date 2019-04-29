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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");







var routes = [
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'allProducts', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'meanproject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" action=\"index.html\" #f=\"ngForm\" class=\"needs-validation col-6\"\n  (ngSubmit)=\"onSubmit(f,ContactName.value,Password.value)\"\n  novalidate>\n\n  <div class=\"form-group\">\n    <label for=\"ContactName\">ContactName</label>\n    <input required minlength=\"5\" maxlength=\"15\" pattern=\"[a-zA-Z]+\" ngModel #ContactNameModel=\"ngModel\" type=\"text\"\n      name=\"ContactName\" class=\"form-control\" #ContactName class=\"form-control\" style=\"width:50%\">\n    <span class=\"invalid-feedback\">please fill out this field</span>\n    <div class=\"alert alert-danger\" *ngIf=\"ContactNameModel.touched && !ContactNameModel.valid\">\n      <div *ngIf=\"ContactNameModel.errors.required\">ContactName is required</div>\n      <div *ngIf=\"ContactNameModel.errors.minLength\">ContactName should be minLength\n        {{ContactNameModel.errors.minLength.requiredLength}}</div>\n      <div *ngIf=\"ContactNameModel.errors.pattern\">\"ContactName doesn't match the pattern\"</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"Password\">Password</label>\n    <input required minlength=\"5\" maxlength=\"15\" pattern=\"[a-zA-Z0-9]+\" ngModel #PasswordModel=\"ngModel\" type=\"text\"\n      name=\"Password\" class=\"form-control\" #Password class=\"form-control\" style=\"width:50%\">\n    <span class=\"invalid-feedback\">please fill out this field</span>\n    <div class=\"alert alert-danger\" *ngIf=\"PasswordModel.touched && !PasswordModel.valid\">\n      <div *ngIf=\"PasswordModel.errors.required\">Password is required</div>\n      <div *ngIf=\"PasswordModel.errors.minLength\">Password should be minLength\n        {{PasswordModel.errors.minLength.requiredLength}}</div>\n      <div *ngIf=\"PasswordModel.errors.pattern\">\"Password doesn't match the pattern\"</div>\n    </div>\n  </div>\n\n  <input type=\"submit\" value=\"login\" class=\"btn btn-primary\">\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form, ContactName, Password) {
        console.log(form.valid);
        if (form.valid) {
            console.log('logging in');
            this.http.post('http://127.0.0.1:7000/login', {
                ContactName: ContactName,
                Password: Password,
            }).toPromise()
                .then(function (data) {
                console.log('role: ' + JSON.parse(JSON.stringify(data)));
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"allProducts\">Products</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Dropdown\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <div style=\"float:right\">\r\n      <a class=\"btn btn-primary\" routerLink=''>Cart</a>\r\n      <a class=\"btn btn-primary\" routerLink='/registration' *ngIf=\"cookie.get('accountUserName')==''\">register</a>\r\n      <a class=\"btn btn-primary\" routerLink='/login' *ngIf=\"cookie.get('accountUserName')==''\">login</a>\r\n      <a class=\"btn btn-primary\" routerLink='' *ngIf=\"cookie.get('accountUserName')!=''\">Profile</a>\r\n      <a class=\"btn btn-primary\" (click)=\"Logout()\" *ngIf=\"cookie.get('accountUserName')!=''\">Logout</a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cookie) {
        this.cookie = cookie;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.Logout = function () {
        this.cookie.set('accountUserName', '');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2 m-3 bg-info\" *ngFor=\"let product of products\">\n    <p>{{product.ProductName}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(http) {
        this.http = http;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(function (result) {
            _this.products = result;
        });
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form method=\"POST\" class=\"needs-validation\" \r\n  (ngSubmit)=\"onSubmit(ContactName.value,ContactTitle.value,Phone.value,Fax.value,Address.value,Region.value,City.value,Country.value,PostalCode.value,CompanyName.value)\"\r\n  novalidate>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"ContactName\">ContactName</label>\r\n  <input type=\"text\" name=\"ContactName\" class=\"form-control\" #ContactName class=\"form-control\" style=\"width:50%\" required pattern=\"\">\r\n  <span  class=\"invalid-feedback\">please fill out this field</span>\r\n\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label class=\"control-label\">ContactTitle</label>\r\n  <input type=\"text\" name=\"ContactTitle\" #ContactTitle class=\"form-control\" style=\"width:50%\" required>\r\n  <span  class=\"invalid-feedback\">please fill out this field</span>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <label class=\"control-label\">Phone</label>\r\n  <input type=\"text\" name=\"Phone\" #Phone class=\"form-control\" style=\"width:50%\" required>\r\n  <span id=\"ContactName_error\" class=\"invalid-feedback\">please fill out this field</span>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <label class=\"control-label\">Fax</label>\r\n  <input type=\"text\" name=\"Fax\" #Fax class=\"form-control\" style=\"width:50%\" required>\r\n  <span  class=\"invalid-feedback\">please fill out this field</span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n  <label class=\"control-label\">Address</label>\r\n  <input type=\"text\" name=\"Address\" #Address class=\"form-control\" style=\"width:50%\" required>\r\n  <span  class=\"invalid-feedback\">please fill out this field</span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n  <label class=\"control-label\">Region</label>\r\n  <input type=\"text\" name=\"Region\" #Region class=\"form-control\" style=\"width:50%\" required> \r\n  <span  class=\"invalid-feedback\">please fill out this field</span>\r\n  </div>\r\n<div class=\"form-group\">\r\n  <label class=\"control-label\">City</label>\r\n  <input type=\"text\" name=\"City\" #City class=\"form-control\" style=\"width:50%\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  <label class=\"control-label\">Country</label>\r\n  <input type=\"text\" name=\"Country\" #Country class=\"form-control\" style=\"width:50%\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  <label>PostalCode</label>\r\n  <input type=\"text\" name=\"PostalCode\" #PostalCode class=\"form-control\" style=\"width:50%\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n  <label>CompanyName</label>\r\n  <input type=\"text\" name=\"CompanyName\" #CompanyName class=\"form-control\" style=\"width:50%\">\r\n  </div>\r\n\r\n  <input type=\"submit\" value=\"register\" class=\"btn btn-primary\">\r\n</form>\r\n-->\r\n\r\n\r\n\r\n\r\n<!--<form method=\"POST\" [formGroup]=\"form\"\r\n  (ngSubmit)=\"onSubmit(ContactName.value,ContactTitle.value,Phone.value,Fax.value,Address.value,Region.value,City.value,Country.value,PostalCode.value,CompanyName.value)\">\r\n\r\n  <div class=\"form-group \">\r\n    <label>ContactName</label>\r\n    <input type=\"text\" name=\"ContactName\" class=\"form-control\"\r\n     #ContactName formControlName=\"contactNameControl\">\r\n     <div *ngIf=\"contactNameControl.touched && contactNameControl.invalid\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"contactNameControl.errors.required\">{{contactNameControl.errors.required}}</div>\r\n      <div *ngIf=\"contactNameControl.errors.minLength\">{{contactNameControl.errors.minLength.requiredLenght}}</div>\r\n    </div>\r\n  </div>-->\r\n<h3>Registeration Form</h3>\r\n<form method=\"POST\" #f=\"ngForm\" class=\"needs-validation col-6\"\r\n  (ngSubmit)=\"onSubmit(f,ContactName.value,Password.value,ContactTitle.value,Phone.value,Fax.value,Address.value,Region.value,City.value,Country.value,PostalCode.value,CompanyName.value)\"\r\n  novalidate>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"ContactName\">ContactName</label>\r\n    <input required minlength=\"5\" maxlength=\"15\" pattern=\"[a-zA-Z]+\" ngModel #ContactNameModel=\"ngModel\" type=\"text\"\r\n      name=\"ContactName\" class=\"form-control\" #ContactName class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"ContactNameModel.touched && !ContactNameModel.valid\">\r\n      <div *ngIf=\"ContactNameModel.errors.required\">ContactName is required</div>\r\n      <div *ngIf=\"ContactNameModel.errors.minLength\">ContactName should be minLength\r\n        {{ContactNameModel.errors.minLength.requiredLength}}</div>\r\n      <div *ngIf=\"ContactNameModel.errors.pattern\">\"ContactName doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"Password\">Password</label>\r\n    <input required minlength=\"5\" maxlength=\"15\" pattern=\"[a-zA-Z0-9]+\" ngModel #PasswordModel=\"ngModel\" type=\"text\"\r\n      name=\"Password\" class=\"form-control\" #Password class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"PasswordModel.touched && !PasswordModel.valid\">\r\n      <div *ngIf=\"PasswordModel.errors.required\">Password is required</div>\r\n      <div *ngIf=\"PasswordModel.errors.minLength\">Password should be minLength\r\n        {{PasswordModel.errors.minLength.requiredLength}}</div>\r\n      <div *ngIf=\"PasswordModel.errors.pattern\">\"Password doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">ContactTitle</label>\r\n    <input required pattern=\"[a-zA-Z]+\" type=\"text\" name=\"ContactTitle\" #ContactTitle ngModel\r\n      #ContactTitleModel=\"ngModel\" class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"ContactTitleModel.touched && !ContactTitleModel.valid\">\r\n      <div *ngIf=\"ContactTitleModel.errors.required\">ContactTitle is required</div>\r\n      <div *ngIf=\"ContactTitleModel.errors.minLength\">ContactTitle should be minLength\r\n        {{ContactTitleModel.errors.minLength.requiredLength}}</div>\r\n      <div *ngIf=\"ContactTitleModel.errors.pattern\">\"ContactTitle doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Phone</label>\r\n    <input required pattern=\"(01)[0-9]{9}\" ngModel #phoneModel=\"ngModel\" type=\"text\" name=\"Phone\" #Phone\r\n      class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"phoneModel.touched && !phoneModel.valid\">\r\n      <div *ngIf=\"phoneModel.errors.required\">phone is required</div>\r\n      <div *ngIf=\"phoneModel.errors.pattern\">\"phone doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Fax</label>\r\n    <input required pattern=\"[0-9]{5}\" ngModel #faxModel=\"ngModel\" type=\"text\" name=\"Fax\" #Fax class=\"form-control\"\r\n      style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"faxModel.touched && !faxModel.valid\">\r\n      <div *ngIf=\"faxModel.errors.required\">fax is required</div>\r\n      <div *ngIf=\"faxModel.errors.pattern\">\"fax doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Address</label>\r\n    <input required ngModel #AddressModel=\"ngModel\" type=\"text\" name=\"Address\" #Address class=\"form-control\"\r\n      style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"AddressModel.touched && !AddressModel.valid\">\r\n      <div *ngIf=\"AddressModel.errors.required\">Address is required</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Region</label>\r\n    <input required ngModel #RegionModel=\"ngModel\" type=\"text\" name=\"Region\" #Region class=\"form-control\"\r\n      style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"RegionModel.touched && !RegionModel.valid\">\r\n      <div *ngIf=\"RegionModel.errors.required\">Region is required</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">City</label>\r\n    <input required pattern=\"[a-zA-Z]+\" ngModel #cityModel=\"ngModel\" type=\"text\" name=\"City\" #City class=\"form-control\"\r\n      style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"cityModel.touched && !cityModel.valid\">\r\n      <div *ngIf=\"cityModel.errors.required\">city is required</div>\r\n      <div *ngIf=\"cityModel.errors.pattern\">\"city doesn't match the pattern\"</div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Country</label>\r\n    <input required pattern=\"[a-zA-Z]+\" ngModel #countryModel=\"ngModel\" type=\"text\" name=\"Country\" #Country\r\n      class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"countryModel.touched && !countryModel.valid\">\r\n      <div *ngIf=\"countryModel.errors.required\">country is required</div>\r\n      <div *ngIf=\"countryModel.errors.pattern\">\"country doesn't match the pattern\"</div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>PostalCode</label>\r\n    <input required type=\"text\" name=\"PostalCode\" #PostalCode class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>CompanyName</label>\r\n    <input required pattern=\"[a-zA-Z]+\" ngModel #companyModel=\"ngModel\" type=\"text\" name=\"CompanyName\" #CompanyName\r\n      class=\"form-control\" style=\"width:50%\">\r\n    <span class=\"invalid-feedback\">please fill out this field</span>\r\n    <div class=\"alert alert-danger\" *ngIf=\"companyModel.touched && !companyModel.valid\">\r\n      <div *ngIf=\"companyModel.errors.required\">CompanyName is required</div>\r\n      <div *ngIf=\"companyModel.errors.pattern\">\"CompanyName doesn't match the pattern\"</div>\r\n    </div>\r\n  </div>\r\n\r\n  <input type=\"submit\" value=\"register\" class=\"btn btn-primary\">\r\n</form>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegistrationComponent = /** @class */ (function () {
    // form=new FormGroup({
    //   contactNameControl:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
    // })
    function RegistrationComponent(http) {
        this.http = http;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    // get contactNameControl(){
    //   return this.form.get('contactNameControl');
    // }
    RegistrationComponent.prototype.onSubmit = function (form, ContactName, Password, ContactTitle, Phone, Fax, Address, Region, City, Country, PostalCode, CompanyName) {
        console.log(form.valid);
        if (form.valid) {
            console.log('submitting');
            this.http.post('http://127.0.0.1:7000/register', {
                ContactName: ContactName,
                Password: Password,
                ContactTitle: ContactTitle,
                Phone: Phone,
                Fax: Fax,
                Address: Address,
                Region: Region,
                City: City,
                Country: Country,
                PostalCode: PostalCode,
                CompanyName: CompanyName
            }).toPromise().catch(function (error) {
                console.log(error);
            });
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegistrationComponent);
    return RegistrationComponent;
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

module.exports = __webpack_require__(/*! C:\Users\ahmedmohsen\Desktop\MEAN stack project\meanproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map