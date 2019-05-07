import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;
  products;
  f = -1;
  valid = true;
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  selectRow(i) {
    this.products = this.orders[i].products;
  }

  Index(i) {
    this.f = i;
  }

  Update(quantity, i) {
    if (quantity <= this.products[i].product.UnitsInStock) {
      this.products[i].Quantity = quantity;
      this.valid = true;
    }
    else {
      this.valid = false;
    }
    this.f = -1;
  }

  Delete(i){
    this.products.splice(i,1);
  }

  Checkout() {
    if (this.cookie.get("accountUserName") == "") {
      this.router.navigateByUrl('login');
    }
    if (this.cookie.get("accountUserName") != "") {
      this.http.post('checkout',
        {
          ProductsCart: this.products,
          CustomerName: this.cookie.get('accountUserName')
        }).toPromise()
        .then(() => {
          console.log("done");
        })
        .catch(error => {
          console.log(error);
        });
    }

  }

  ngOnInit() {
    this.http.post('http://127.0.0.1:7000/getOrders', {username:this.cookie.get('accountUserName')}).subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    })
  }

}
