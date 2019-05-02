import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    OrdersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrdersComponent);
    return OrdersComponent;
}());
export { OrdersComponent };
//# sourceMappingURL=orders.component.js.map