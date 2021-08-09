import { Injectable } from '@angular/core';
import { CanActivate, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private _route: Route) {
  }
  canActivate(): boolean {
    if (this._auth.loggedIn()) { return true }
    else return false
  }
}
