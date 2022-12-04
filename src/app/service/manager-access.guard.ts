import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerAccessGuard implements CanActivate {
  constructor(private authservice : AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token =  JSON.parse(this.authservice.getToken()) 
      const result = atob(token.split('.')[1])
      let data = JSON.parse(result)
      console.log(data.role);
      if(data.role === 'manager'){
        return true
      }
alert('you are not allowed to access this page')
    return false;
  }
  
}

