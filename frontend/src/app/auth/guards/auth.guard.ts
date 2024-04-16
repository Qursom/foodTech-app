import { CanActivateFn } from '@angular/router';
import { Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
      if(userService.currentUser.token ) 
     return true;
    else{
       router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
       return false;
     }
  
  }

