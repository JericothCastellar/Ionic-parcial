import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null;

  constructor() {}

  setUser(userData: any) {
    this.user = userData;
  }

  getUser() {
    return this.user;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  logout() {
    this.user = null;
  }
}
