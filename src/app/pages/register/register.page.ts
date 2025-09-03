import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false, 
})
export class RegisterPage implements OnInit {
  name = '';
  lastName = '';
  email = '';
  password = '';
  country = '';
  countries: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.http.get(environment.countriesApi).subscribe((res: any) => {
      this.countries = res.data.map((c: any) => ({
        name: c.name,
        flag: c.unicodeFlag
      }));
    });
  }

  register() {
    if (!this.name || !this.lastName || !this.email || !this.password || !this.country) {
      alert('Completa todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert('Correo inválido');
      return;
    }

    const hashedPassword = CryptoJS.SHA256(this.password).toString();

    const user = {
      id: uuidv4(),
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: hashedPassword,
      country: this.country
    };

    // Guardar en localStorage (
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registro exitoso');
    this.router.navigate(['/login']);
  }
}
