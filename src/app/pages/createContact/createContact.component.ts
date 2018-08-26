import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
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
    created_by: 1 // hard coded
  }

  constructor(
    private backend: BackendService,
    private router: Router,
  ) {}
  
  create() {
    this.backend.addContact(this.newContact)
    .then(() => {
       console.log('contact added!');
    })
    .then(() => {
      console.log('navigate to contacts page!');
      this.router.navigate(['/contacts']);
    })
    .catch((err) => console.log('error: ', err.message));
  }

}