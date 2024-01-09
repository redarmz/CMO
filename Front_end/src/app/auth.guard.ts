// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Logreg } from './Logreg.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private logregService: Logreg, private router: Router) {}

  canActivate(): boolean {
    if (this.logregService.isLoggedIn$.value) {
      return true; // L'utilisateur est connecté, il peut accéder à la page
    } else {
      this.router.navigate(['/login']);
      return false; // L'utilisateur n'est pas connecté, il est redirigé vers la page de connexion
    }
  }
}


