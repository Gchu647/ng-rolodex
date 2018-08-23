import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contactsData: {
    name: string,
    address: string,
    mobile: string,
    email: string,
  } = {
    name: '',
    address: '',
    mobile: '',
    email: '',
  };

  constructor(private backend: BackendService) {}

  // WORKING on
  ngOnInit() {
    this.backend.contacts()
    .then((response) => {
      this.contactsData = response[0];
      console.log('response', response);
    })
  }
}