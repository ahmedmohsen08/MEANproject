import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  IsUser;
  products
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.IsUser=false;
    this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(result => {
      this.products = result;
    });
  }

}
