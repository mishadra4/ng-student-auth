import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Injectable({providedIn: 'root'})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAdmin())
      return true;
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    }
    return false;
  }

}
