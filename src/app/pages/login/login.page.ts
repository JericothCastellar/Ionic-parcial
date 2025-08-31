import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false, 
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      this.email === savedUser.email &&
      CryptoJS.SHA256(this.password).toString() === savedUser.password
    ) {
      localStorage.setItem('session', JSON.stringify({ email: this.email }));
      this.router.navigate(['/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
