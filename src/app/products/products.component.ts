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
  f=-1;
  p=1;
  productID;
  productName;
  productPrice;
  productQuantity;
  constructor(private http: HttpClient,private cookie: CookieService) { }

  DeleteProductByAdmin(index){
   console.log(this.products[index]);
   console.log(this.products[index].ProductID);
     

   this.http.post('http://127.0.0.1:7000/deleteProduct',{
     productid:this.products[index].ProductID
   }).subscribe(data=>{

   })
   this.products.splice(index,1);

  }

 
  UpdateProductByAdmin(pid,pname,pprice,punits){
  
    console.log(pid);
    console.log(pname);
    console.log(pprice);
    console.log(punits);

    this.http.post('http://127.0.0.1:7000/updateProduct',{
     productID:pid,
     productName:pname,
     UnitPrice:pprice,
     UnitsInStock:punits
    }).subscribe(res=>{
      this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(result => {
        this.products = result;
      });
    })


  }

  updateField(index){
    this.f=index;
    this.productID=this.products[index].ProductID;
    this.productName=this.products[index].ProductName;
    this.productPrice=this.products[index].UnitPrice;
    this.productQuantity=this.products[index].UnitsInStock;
    console.log(index);
  }
  
 
  ngOnInit() {
    this.cookie.get('role')=='admin'?this.IsUser=false:this.IsUser=true;
    this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(result => {
      this.products = result;
      console.log(this.products);
    });
  }

}
