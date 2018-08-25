import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
  term: string = '';
  contactsMatch: any = '';

  constructor(private backend: BackendService) {}

  search() {
    this.backend.search(this.term)
    .then(response => {
      console.log('search result: ', response);
      this.contactsMatch = response;
    })
  }
}