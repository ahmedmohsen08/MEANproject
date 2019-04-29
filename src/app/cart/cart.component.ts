import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ProductsCart=[];
  constructor(private cookie:CookieService) { 
    this.ProductsCart=JSON.parse(this.cookie.get("productsID"));
  }
  DeleteFromCart(index){
    console.log(this.ProductsCart)
    console.log(index);
    console.log(this.ProductsCart[index]);
    this.ProductsCart.splice(index,1);
    console.log(this.ProductsCart);
    this.cookie.set("productsID",JSON.stringify(this.ProductsCart));
    console.log(JSON.parse(this.cookie.get("productsID")));

  }
  ngOnInit() {
   console.log(JSON.parse(this.cookie.get("productsID")))
  }

}
