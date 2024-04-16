import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../shared/models/Order';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent  implements OnInit{
  order:Order = new Order();
  checkoutForm!:FormGroup;

  constructor(
      private cartService:CartService,
      private userService:UserService,
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private orderService:OrderService,
      private router: Router

  ){
        const cart = cartService.getCart();
        this.order.items = cart.items;
        this.order.totalPrice = cart.totalPrice;

  }

  ngOnInit():void{
    let {name, address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required]
    })


  }
  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    if(!this.order.addressLatLng){
      this.toastrService.warning('Please select your location on the map', 'Location');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    console.log('this.order',this.order);

    this.orderService.create(this.order).subscribe({
      next:() => {
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse:any) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })
  }

}
