import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
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
    ProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, CookieService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map