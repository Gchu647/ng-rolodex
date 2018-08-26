import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable ({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private backend: BackendService,
    private session: SessionService
  ){};

  login(data) {
    return this.backend.login(data)
    .then((response) => {
      console.log('auth got response from server login: ', response);
      return this.session.setSession(response['username'], response['id']); // set session information
    })
  }

  logout() {
    return this.backend.logout()
    .then(() => {
      return this.session.clearSession();
    })
  }

  addContact(contact) {
    return this.backend.addContact(contact)
    .then(() => {
      return true;
    });
  }
}