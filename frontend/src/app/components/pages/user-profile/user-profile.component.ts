import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user!:User;


  constructor(private userService:UserService){
 

   
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
}
