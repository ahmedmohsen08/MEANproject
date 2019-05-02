import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cookie) {
        this.cookie = cookie;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.Logout = function () {
        this.cookie.set('accountUserName', '');
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CookieService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map