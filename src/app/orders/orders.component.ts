import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;
  constructor(private http: HttpClient,private cookie:CookieService) { }

  ngOnInit() {
    this.http.post('http://127.0.0.1:7000/getOrders', { username: "Paul Henriot" }/*{username:this.cookie.get('accountUserName')}*/).subscribe(data => {
      this.orders=data;
    })
  }

}
