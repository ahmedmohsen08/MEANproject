import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    RegistrationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map