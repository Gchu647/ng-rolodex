import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
  providedIn: 'root'
})
export class BackendService {
  url:
  string='http://localhost:4200/api/';

  constructor(private http: HttpClient) {

  }

  // WORKING on
  contacts() {
    const contactUrl = this.url + 'contacts?user=1'; // hard coded
    return this.http.get(contactUrl).toPromise();
  }

  addContact(data) {
    const contactUrl = this.url + 'contacts'; // hard coded
    return this.http.post(contactUrl, data).toPromise();
  }
}