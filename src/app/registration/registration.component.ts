import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // form=new FormGroup({
  //   contactNameControl:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
  // })

  flag=false;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }
  // get contactNameControl(){
  //   return this.form.get('contactNameControl');
  // }
  onSubmit(form, ContactName, Password, ContactTitle, Phone, Fax, Address, Region, City, Country, PostalCode, CompanyName) {
    console.log(form.valid);
    if (form.valid) {
      console.log('submitting');
      this.http.post('register',
        {
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
        }).toPromise().then(res => {
          var response:any = res;
          if (response.state == 'exist') {
            this.flag=true;
          }
          else if (response.state == 'not exist') {
            this.router.navigateByUrl('login');
          }
        }).catch(error => {
          console.log(error);
        });
    }

  }

}
