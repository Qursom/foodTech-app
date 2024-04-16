import { Component, Input } from '@angular/core';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'order-form-list',
  templateUrl: './order-form-list.component.html',
  styleUrl: './order-form-list.component.css'
})
export class OrderFormListComponent {
  @Input()
  order!:Order;

}
