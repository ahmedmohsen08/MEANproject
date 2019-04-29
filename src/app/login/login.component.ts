import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(form, ContactName, Password) {
    console.log(form.valid);
    if (form.valid) {
      console.log('logging in');
      this.http.post('http://127.0.0.1:7000/login',
        {
          ContactName: ContactName,
          Password: Password,
        }).toPromise()
        .then(data=>{
          console.log('role: '+JSON.parse(JSON.stringify(data)));
        })
        .catch(error => {
          console.log(error);
        });
    }

  }


}
