import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = true;
//  const router  = inject(Router);

  if (isLoggedIn) {
    console.log("inside if on routing page");
    return true;
  } else {
    console.log("inside else and will go to login page");
    // Optionally, you can navigate to a login page or another route.
  //  router.navigate(['/login']);
    return false;
  }
    return true;
};
