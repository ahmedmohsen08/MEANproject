import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
    CartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CookieService])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map