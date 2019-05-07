import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form, ContactName, Password) {
    console.log(form.valid);
    if (form.valid) {
      console.log('logging in');
      this.http.post('login',
        {
          ContactName: ContactName,
          Password: Password,
        }).toPromise()
        .then(data=>{
          console.log('role: '+JSON.parse(JSON.stringify(data)));
          this.router.navigateByUrl('');
        })
        .catch(error => {
          console.log(error);
        });
    }

  }


}
