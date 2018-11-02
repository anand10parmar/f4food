import { Component, OnInit } from '@angular/core';
import {OrderItem} from './app.order.model';
import {AppOrderService} from './app.order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './app.order.items.component.html',
  styleUrls: ['./order.component.css']
})
export class AppOrderItemsComponent implements OnInit {

  dishItems: OrderItem[] = [];
  constructor(appOrderService: AppOrderService) {
    this.dishItems = appOrderService.getItems();
  }

  ngOnInit() {
  }
}
