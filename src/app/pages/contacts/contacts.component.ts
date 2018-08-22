import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  constructor(private backend: BackendService) {}

  // WORKING on
  ngOnInit() {
    this.backend.contacts()
    .then((response) => {
      console.log('response', response);
    })
  }
}