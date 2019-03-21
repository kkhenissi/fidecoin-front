import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
         RouterStateSnapshot, Router, CanActivateChild,
         NavigationExtras, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

component: Object;
route: ActivatedRouteSnapshot;
constructor(private authenticationService: AuthenticationService, private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  let url: string = state.url;

  return this.checkLogin(url);
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.canActivate(route, state);
}

canLoad(route: Route): boolean {
  let url = `/${route.path}`;

  return this.checkLogin(url);
}

checkLogin(url: string): boolean {
  if (this.authenticationService.isAuthenticated) { return true; }

  // Store the attempted URL for redirecting
  this.authenticationService.redirectUrl = url;

  // Create a dummy session id
  const sessionId = 123456789;

  // Set our navigation extras object
  // that contains our global query params and fragment
  const navigationExtras: NavigationExtras = {
    // tslint:disable-next-line:object-literal-key-quotes
    queryParams: { 'session_id': sessionId },
    fragment: 'anchor'
  };

  // Navigate to the login page with extras
  this.router.navigate(['/login'], navigationExtras);
  return false;
}
}






  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }


