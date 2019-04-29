import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
// form=new FormGroup({
//   contactNameControl:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
// })

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
// get contactNameControl(){
//   return this.form.get('contactNameControl');
// }
  onSubmit(form,ContactName,ContactTitle,Phone,Fax,Address,Region,City,Country,PostalCode,CompanyName) {
   console.log(form.valid);
   if(form.valid)
   {
    console.log('submitting');
    this.http.post('http://127.0.0.1:7000/register',
     {
       ContactName:ContactName,
       ContactTitle: ContactTitle,
       Phone:Phone,
       Fax:Fax,
       Address:Address,
       Region:Region,
       City:City,
       Country:Country,
       PostalCode:PostalCode,
       CompanyName:CompanyName
       }).toPromise().catch(error=>{
      console.log(error);
    });
   }
  
   }
  
}
