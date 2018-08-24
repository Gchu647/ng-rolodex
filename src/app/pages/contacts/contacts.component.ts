import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contactsList: any;

  constructor(private backend: BackendService) {}

  // WORKING on sending user param id over
  // fetches all the contacts from a user after component initiate
  // the response is a weird array that is type object
  ngOnInit() {
    this.backend.contacts()
    .then((response) => {
      console.log(response);
      this.contactsList = response;
    })
  }
}