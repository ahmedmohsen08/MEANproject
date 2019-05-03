import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  ProductID;
  ProductName;
  UnitPrice ;
  UnitsInStock;
  productsID=[]
  valid;
  constructor(private route:ActivatedRoute,private cookie:CookieService) {
   //this.cookie.delete("productsID")
   //this.cookie.set("productsID",JSON.stringify(this.productsID));
   }
  AddToCart(ProdQuantity)
  {
    console.log(this.UnitsInStock);
    console.log(ProdQuantity);

    if(( Number(ProdQuantity)>0) && (Number(ProdQuantity) <=Number(this.UnitsInStock)))
    {        
      this.productsID=JSON.parse(this.cookie.get("productsID"));
      console.log(this.productsID)
      console.log(this.productsID.length)

    
      var index=this.productsID.findIndex(p=>p.productid==this.ProductID)

      if(index!=-1)
      {
        var obj= this.productsID[index]
        var NewQuant=Number(obj.quantity)+Number(ProdQuantity);
          if(NewQuant<=Number(this.UnitsInStock))
            {
              this.valid=true;
              var NewTotalPrice=(NewQuant*obj.UnitPrice);
              this.productsID[index]={"productid":this.ProductID,"productName":this.ProductName,"quantity":NewQuant,"UnitPrice":Number(this.UnitPrice),"TotalPrice":NewTotalPrice,"UnitsInStock":this.UnitsInStock};
              console.log(this.productsID[index]);
            }
          else
            {
              console.log("invalid quantity")
              this.valid=false
              //3yza atl3 prompt t2olo elquantity invalid
            }
      }
      else
      {
        this.valid=true;
        var newQ=Number(this.UnitPrice)*Number(ProdQuantity)
        this.productsID.push({"productid":this.ProductID,"productName":this.ProductName,"quantity":Number(ProdQuantity),"UnitPrice":Number(this.UnitPrice),"TotalPrice":newQ,"UnitsInStock":this.UnitsInStock});

      }

     this.cookie.set("productsID",JSON.stringify(this.productsID));
        console.log(JSON.parse(this.cookie.get("productsID")));
      console.log("valid")
    }
  
    else
    {
      console.log("invalid")
      this.valid=false;
    }
    
   

  }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      console.log(data);
      this.ProductID=data.get("ProductID");
      console.log("ngoninit"+ this.ProductID);
      this.ProductName=data.get("ProductName");
      this.UnitPrice =data.get("UnitPrice ");
      this.UnitsInStock=data.get("UnitsInStock");
      this.valid=true;
    })
  }

}
