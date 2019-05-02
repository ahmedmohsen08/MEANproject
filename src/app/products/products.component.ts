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
  f=-1;
  p=1;
  constructor(private http: HttpClient) { }

  DeleteProductByAdmin(index){
   console.log(this.products[index]);
   console.log(this.products[index].ProductID);
     

   this.http.post('http://127.0.0.1:7000/deleteProduct',{
     productid:this.products[index].ProductID
   }).subscribe(data=>{

   })
   this.products.splice(index,1);

  }

 
  UpdateProductByAdmin(price,units,index){
   this.products[index].UnitPrice=price;
   this.products[index].UnitsInStock=units;
   this.f=-1;
  /* this.http.post('http://127.0.0.1:7000/updateProduct',{
    Productid:this.products[index].ProductID,
    ProductPrice: this.products[index].UnitPrice,
    productQuantity:this.products[index].UnitsInStock
  })*/
  }
  updateField(index){
    this.f=index;
  }
  
 
  ngOnInit() {
    this.IsUser=false;
    this.http.get('http://127.0.0.1:7000/getAllProducts').subscribe(result => {
      this.products = result;
    });
  }

}
