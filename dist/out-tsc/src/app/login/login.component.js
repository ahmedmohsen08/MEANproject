import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map