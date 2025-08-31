import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const session = localStorage.getItem('session');
    if (session) {
      return true; // Usuario logueado
    } else {
      this.router.navigate(['/login']); // Redirige al login
      return false;
    }
  }
}
