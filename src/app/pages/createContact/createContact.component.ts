import { Component } from '@angular/core';

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
    github: string | null
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
  }

  constructor() {}
  
  create() {
    console.log(this.newContact);
  }

}