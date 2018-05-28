import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = Parse.User.current();
      console.log(currentUser);
      if (currentUser) {
          // do stuff with the user
          return true;
      } else {
          // show the signup or login page
          this.router.navigate(['admin/login']);
      }
  }
}
