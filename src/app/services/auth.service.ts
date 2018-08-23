import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  private _isLoggedIn: boolean = false

  get isLoggedIn() {
    return this._isLoggedIn
  }

  login(credentials) {
    // TODO : login with server

    let { username, password } = credentials

    if (username == 'rom' && password == 'rom') {
      this._isLoggedIn = true
      this.router.navigateByUrl('tasks')
    } else {
      this.router.navigateByUrl('')
    }
  }
}
