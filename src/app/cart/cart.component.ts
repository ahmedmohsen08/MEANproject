import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ProductsCart=[];
  f=-1;
  valid;
  oldQuantity;
  constructor(private cookie:CookieService,private http:HttpClient) { 
    this.ProductsCart=JSON.parse(this.cookie.get("productsID"));
    
  }
  Update(quant,index){
    this.oldQuantity=this.ProductsCart[index].quantity;
     if(Number(quant)<=this.ProductsCart[index].UnitsInStock)
     {
      this.ProductsCart[index].quantity=quant;
      this.cookie.set("productsID",JSON.stringify(this.ProductsCart));
      console.log(this.ProductsCart[index].quantity)

     this.valid=true;
     }
     else
     {
       this.valid=false;
      // this.ProductsCart[index].quantity=this.oldQuantity;
       console.log(this.ProductsCart[index].quantity)

     }
     this.f=-1;

  }
  updateField(index)
  {
    this.oldQuantity=this.ProductsCart[index].quantity;
    this.f=index;
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

  Checkout(){
    console.log("checkout");
    console.log(this.cookie.get("accountUserName"));
    if(this.cookie.get("accountUserName")!=" ")
    {
      console.log(this.cookie.get("accountUserName").toString())
      this.http.post('http://127.0.0.1:7000/checkout',
      {
       ProductsCart:this.ProductsCart
      }).toPromise()
      .then(()=>{
        console.log("done");
      })
      .catch(error => {
        console.log(error);
      });
    }
 
  }
  ngOnInit() {
   console.log(JSON.parse(this.cookie.get("productsID")))
   this.valid=true; 
  }
  

}
