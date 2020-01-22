import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { ProyectoService } from '../services/proyecto.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private ps: ProyectoService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    const user = this.ps.getUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    const user = this.ps.getUser();
    if (user) {
      if (route.data.role === user.role) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
      
      this.router.navigateByUrl('/login');
    }
  }

}
