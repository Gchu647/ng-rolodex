import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createContact',
  templateUrl: './createContact.component.html',
  styleUrls: ['./createContact.component.scss']
})

export class CreateContactComponent {
  newContact: {
    name: string,
    address: string,
    mobile: string,
    email: string,
    work: string | null,
    home: string | null,
    twitter: string | null,
    instagram: string | null,
    github: string | null,
    created_by: number,
  } = {
    name: '',
    address: '',
    mobile: '',
    email: '',
    work: null,
    home: null,
    twitter: null,
    instagram: null,
    github: null,
    created_by: 1 // get user from session
  }

  user: {
    loggedIn: boolean,
    username: string,
    userId: number,
  };

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router,
  ) {
    this.user = this.session.getSession(); // Get username and login from session
    this.newContact.created_by = this.user.userId;
  };
  
  // this passes newContact information to auth
  create() {
    console.log("our user!", this.user);
    if(this.session.isLoggedIn()) {
      return this.auth.addContact(this.newContact)
      .then(() => {
        console.log('contact added!');
     })
     .then(() => {
       console.log('navigate to contacts page!');
       this.router.navigate(['/contacts']);
     })
     .catch((err) => console.log('error: ', err.message));
    } else {
      console.log('Log in as a user first!');
    }
  }
}