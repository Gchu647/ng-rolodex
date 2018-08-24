import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contactsData: {id: number, text: string}[];

  constructor(private backend: BackendService) {}

  // WORKING on
  ngOnInit() {
    this.backend.contacts()
    .then((response) => {
      // this.contactsData = response;
      console.log('response', response);
    })
    this.contactsData = [
      {id:1, text: 'George'},
      {id: 2, text: 'Andy'}
    ];
  }
}