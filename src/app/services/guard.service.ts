import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor( 
    private session: SessionService,
    private router: Router,
  ) {}

  canActivate() {
    if(!this.session.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}