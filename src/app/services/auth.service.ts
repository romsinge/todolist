import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  isLoggedIn: boolean = false

  login(credentials) {
    // TODO : login with server

    let { username, password } = credentials

    if (username == 'rom' && password == 'rom') {
      this.isLoggedIn = true
      this.router.navigateByUrl('tasks')
    }
  }
}
