import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrl: './order-track-page.component.css'
})
export class OrderTrackPageComponent {

  order!:Order;

  constructor(activatedRoute: ActivatedRoute,
    orderService:OrderService) {
const params = activatedRoute.snapshot.params;
if(!params.orderId) return;

orderService.trackOrderById(params.orderId).subscribe(order => {

this.order = order;
})

}

}
