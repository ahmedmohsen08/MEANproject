import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    DetailsProductComponent = tslib_1.__decorate([
        Component({
            selector: 'app-details-product',
            templateUrl: './details-product.component.html',
            styleUrls: ['./details-product.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CookieService])
    ], DetailsProductComponent);
    return DetailsProductComponent;
}());
export { DetailsProductComponent };
//# sourceMappingURL=details-product.component.js.map