import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,

})
export class LoginPage {
 email: string = '';
  password: string = '';

  constructor(private router: Router) {}

login() {
  // Datos de prueba
  const usuarioValido = 'jane@doe.com';
  const passwordValida = '1234567890';

  if (this.email === usuarioValido && this.password === passwordValida) {
    // Guardar en localStorage para simular sesión
    localStorage.setItem('user', JSON.stringify({ email: this.email }));
    // Redirigir al home
    this.router.navigate(['/home']);
  } else {
    alert('Correo o contraseña incorrectos');
  }
}
}