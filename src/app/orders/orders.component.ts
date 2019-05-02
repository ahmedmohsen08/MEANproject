import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:7000/getOrders',{params:{username:'FRANS'}}).subscribe(result=>{
      this.orders=result;
      console.log(this.orders);
    })
  }

}
