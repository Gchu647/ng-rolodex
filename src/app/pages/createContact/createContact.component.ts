import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

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

  constructor(private backend: BackendService) {}
  
  create() {
    this.backend.addContact(this.newContact)
    .then( response => {
      console.log(response);
    });
  }

}