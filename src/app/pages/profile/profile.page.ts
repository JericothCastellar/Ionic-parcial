import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user: any = {};
  countries: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadUser();
    this.loadCountries();
  }

  loadUser() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.user = { ...savedUser };
  }

  loadCountries() {
    this.http.get(environment.countriesApi).subscribe((res: any) => {
      this.countries = res.data.map((c: any) => ({
        name: c.name,
        flag: c.unicodeFlag
      }));
    });
  }

  updateProfile() {
    // Encriptar contraseña if cambio
    if (this.user.password) {
      this.user.password = CryptoJS.SHA256(this.user.password).toString();
    }

    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Perfil actualizado');
  }
}
