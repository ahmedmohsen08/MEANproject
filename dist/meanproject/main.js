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
/* harmony import */ var _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details-product/details-product.component */ "./src/app/details-product/details-product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");










var routes = [
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'allProducts', component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"] },
    { path: 'details-product/:ProductID/:ProductName/:UnitPrice /:UnitsInStock', component: _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_7__["DetailsProductComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"] }
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-product/details-product.component */ "./src/app/details-product/details-product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _details_product_details_product_component__WEBPACK_IMPORTED_MODULE_12__["DetailsProductComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_14__["OrdersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n  <table class=\"table table-hover\">\r\n   <thead>\r\n     <tr>\r\n      \r\n     <th>Product Name</th>\r\n     <th>Product Price</th>\r\n     <th>Product Quantity</th>\r\n     <th>TotalProductPrice</th>\r\n    </tr>\r\n   </thead>\r\n   <tbody>\r\n     <tr *ngFor=\"let prd of ProductsCart;index as i \">\r\n      <td>{{prd.productName}}</td>\r\n      <td>{{prd.UnitPrice}}</td>\r\n      <td>{{prd.quantity}}</td>\r\n      <td>{{prd.TotalPrice}}</td>\r\n      <td><input type=\"button\" value=\"Edit\" class=\"btn btn-success\"></td>    \r\n      <td><input type=\"button\" value=\"Delete\" class=\"btn btn-danger\" (click)=\"DeleteFromCart(i)\"></td>    \r\n     </tr>\r\n     \r\n   </tbody>\r\n\r\n  </table>\r\n  <input type=\"button\" value=\"Checkout\" class=\"btn btn-primary\">\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var CartComponent = /** @class */ (function () {
    function CartComponent(cookie) {
        this.cookie = cookie;
        this.ProductsCart = [];
        this.ProductsCart = JSON.parse(this.cookie.get("productsID"));
    }
    CartComponent.prototype.DeleteFromCart = function (index) {
        console.log(this.ProductsCart);
        console.log(index);
        console.log(this.ProductsCart[index]);
        this.ProductsCart.splice(index, 1);
        console.log(this.ProductsCart);
        this.cookie.set("productsID", JSON.stringify(this.ProductsCart));
        console.log(JSON.parse(this.cookie.get("productsID")));
    };
    CartComponent.prototype.ngOnInit = function () {
        console.log(JSON.parse(this.cookie.get("productsID")));
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/details-product/details-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/details-product/details-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtcHJvZHVjdC9kZXRhaWxzLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/details-product/details-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/details-product/details-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-warning\">\r\n  <div class=\"thumbnail bg-dark center col-6\">\r\n    <p class=\"center text-white\">\"ProductName: {{ProductName}}</p>\r\n    <p class=\"center text-white\">\"ProductPrice: \"{{UnitPrice}}</p>\r\n    <input pattern=\"[0-9]+\" ngModel #quantityModel=\"ngModel\" type=\"text\" placeholder=\"product quantity\" #quantity>\r\n    <div class=\"alert alert-danger\" *ngIf=\"quantityModel.touched && !quantityModel.valid\">\r\n      <div *ngIf=\"quantityModel.errors.pattern\">ProductQuantity doesn't match the pattern</div>\r\n    </div>\r\n    <div *ngIf=\"quantityModel.valid\">\r\n      <div *ngIf=!valid>\r\n        <div class=\"alert alert-danger\">\r\n        Invalid Quantity\r\n        </div>\r\n      </div>\r\n    <input type=\"button\" value=\"AddToCart\" class=\"btn btn-success\" (click)=\"AddToCart(quantity.value)\">\r\n    </div>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/details-product/details-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/details-product/details-product.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailsProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProductComponent", function() { return DetailsProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var DetailsProductComponent = /** @class */ (function () {
    function DetailsProductComponent(route, cookie) {
        this.route = route;
        this.cookie = cookie;
        this.productsID = [];
        //this.cookie.delete("productsID")
        // this.cookie.set("productsID",JSON.stringify(this.productsID));
    }
    DetailsProductComponent.prototype.AddToCart = function (ProdQuantity) {
        var _this = this;
        console.log(this.UnitsInStock);
        console.log(ProdQuantity);
        if ((Number(ProdQuantity) > 0) && (Number(ProdQuantity) <= Number(this.UnitsInStock))) {
            this.productsID = JSON.parse(this.cookie.get("productsID"));
            console.log(this.productsID);
            console.log(this.productsID.length);
            var index = this.productsID.findIndex(function (p) { return p.productid == _this.ProductID; });
            if (index != -1) {
                var obj = this.productsID[index];
                var NewQuant = Number(obj.quantity) + Number(ProdQuantity);
                if (NewQuant <= Number(this.UnitsInStock)) {
                    this.valid = true;
                    var NewTotalPrice = (NewQuant * obj.UnitPrice);
                    this.productsID[index] = { "productid": this.ProductID, "productName": this.ProductName, "quantity": NewQuant, "UnitPrice": Number(this.UnitPrice), "TotalPrice": NewTotalPrice, "UnitsInStock": this.UnitsInStock };
                    console.log(this.productsID[index]);
                }
                else {
                    console.log("invalid quantity");
                    this.valid = false;
                    //3yza atl3 prompt t2olo elquantity invalid
                }
            }
            else {
                this.valid = true;
                var newQ = Number(this.UnitPrice) * Number(ProdQuantity);
                this.productsID.push({ "productid": this.ProductID, "productName": this.ProductName, "quantity": Number(ProdQuantity), "UnitPrice": Number(this.UnitPrice), "TotalPrice": newQ, "UnitsInStock": this.UnitsInStock });
            }
            this.cookie.set("productsID", JSON.stringify(this.productsID));
            console.log(JSON.parse(this.cookie.get("productsID")));
            console.log("valid");
        }
        else {
            console.log("invalid");
            this.valid = false;
        }
    };
    DetailsProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            console.log(data);
            _this.ProductID = data.get("ProductID");
            console.log("ngoninit" + _this.ProductID);
            _this.ProductName = data.get("ProductName");
            _this.UnitPrice = data.get("UnitPrice ");
            _this.UnitsInStock = data.get("UnitsInStock");
            _this.valid = true;
        });
    };
    DetailsProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-product',
            template: __webpack_require__(/*! ./details-product.component.html */ "./src/app/details-product/details-product.component.html"),
            styles: [__webpack_require__(/*! ./details-product.component.css */ "./src/app/details-product/details-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DetailsProductComponent);
    return DetailsProductComponent;
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"allProducts\">Products</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"cart\">Cart</a>\r\n        </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <div style=\"float:right\">\r\n      <a class=\"btn btn-primary\" routerLink=''>Cart</a>\r\n      <a class=\"btn btn-primary\" routerLink='/registration' *ngIf=\"cookie.get('accountUserName')==''\">register</a>\r\n      <a class=\"btn btn-primary\" routerLink='/login' *ngIf=\"cookie.get('accountUserName')==''\">login</a>\r\n      <a class=\"btn btn-primary\" routerLink='/orders' *ngIf=\"cookie.get('accountUserName')!=''\">MyOrders</a>\r\n      <a class=\"btn btn-primary\" (click)=\"Logout()\" *ngIf=\"cookie.get('accountUserName')!=''\">Logout</a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>"

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

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(http) {
        this.http = http;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://127.0.0.1:7000/getOrders', { params: { username: 'FRANS' } }).subscribe(function (result) {
            _this.orders = result;
            console.log(_this.orders);
        });
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrdersComponent);
    return OrdersComponent;
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

module.exports = "<div *ngIf=\"cookie.get('role')=='user'\">\r\n  <div class=\"row bg-warning\">\r\n    <div class=\"col-2 \" *ngFor=\"let product of products\">\r\n      <div class=\"thumbnail bg-dark\">\r\n        <a class=\"text-white\"\r\n          [routerLink]=\"['/details-product',product.ProductID,product.ProductName,product.UnitPrice,product.UnitsInStock]\">\r\n          <p class=\" center\">\"ProductName: \"{{product.ProductName}}</p>\r\n          <p class=\" center\">\"ProductPrice: \"{{product.UnitPrice}}</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"cookie.get('role')=='admin'\">\r\n  <table class=\"table table-dark table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>ProductID</th>\r\n        <th>ProductName</th>\r\n        <th>ProductPrice</th>\r\n        <th>ProductQuantity</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products\">\r\n\r\n        <td>{{product.ProductID}}</td>\r\n        <td>{{product.ProductName}}</td>\r\n        <td>{{product.UnitPrice}}</td>\r\n        <td>{{product.UnitsInStock}}</td>\r\n        <td><input type=\"button\" value=\"Delete\" class=\"btn btn-danger\"></td>\r\n        <td><input type=\"button\" value=\"Edit\" class=\"btn btn-success\"></td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(http, cookie) {
        this.http = http;
        this.cookie = cookie;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cookie.get('role') == 'admin' ? this.IsUser = false : this.IsUser = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
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