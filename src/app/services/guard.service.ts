import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor( private session: SessionService) {}

  canActivate() {
    return this.session.isLoggedIn();
  }
}