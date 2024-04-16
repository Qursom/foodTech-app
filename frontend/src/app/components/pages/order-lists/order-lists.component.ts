import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Observable } from 'rxjs';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
  styleUrl: './order-lists.component.css'
})
export class OrderListsComponent {
  orders:Order[] =[];
  constructor( private orderService:OrderService,activatedRoute:ActivatedRoute){
    let ordersObservalbe:Observable<Order[]>;
    ordersObservalbe = orderService.getAllOrders();
  
   

    ordersObservalbe.subscribe((serverOrders) => {
      
      this.orders = serverOrders;
    })
  }
}
