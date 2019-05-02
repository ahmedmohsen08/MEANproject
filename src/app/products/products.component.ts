import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  IsUser;
  products
  constructor(private http: HttpClient,private cookie: CookieService) { }

  ngOnInit() {
    this.cookie.get('role')=='admin'?this.IsUser=false:this.IsUser=true;
    this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(result => {
      this.products = result;
    });
  }

}
