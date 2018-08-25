import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: object;

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router,
  ) { 
    this.user = session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  logout() {
    return this.auth.logout()
    .then(() => {
      console.log('user logged out');
    })
    .then(() => {
      this.router.navigate(['/']);
    })
    .catch((err) => {
      console.log('error: ', err.message);
    });
  }
}