import {OrderItem} from './app.order.model';
import {Injectable} from '@angular/core';

@Injectable()
export class AppOrderService {

  getItems(): OrderItem[] {

    const orderItem: OrderItem[] = [];
    orderItem.push({
      dish: 'Sandwich',
      size: '6"inch',
      price: 4,
    })
    orderItem.push({
      dish: 'Salad',
      size: '12"inch',
      price: 7
    })
    orderItem.push({
      dish: 'drinks',
      size: 'Small',
      price: 1.2
    })
    return orderItem;
  }

}
