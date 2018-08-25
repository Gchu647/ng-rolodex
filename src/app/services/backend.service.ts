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

  search(term) {
    const contactUrl = this.url + `contacts/search/${term}?user=1`; // hard coded
    return this.http.get(contactUrl).toPromise();
  }

  contacts() {
    const contactUrl = this.url + 'contacts?user=1'; // hard coded
    return this.http.get(contactUrl).toPromise();
  }

  addContact(data) {
    const contactUrl = this.url + 'contacts'; // hard coded
    return this.http.post(contactUrl, data).toPromise();
  }

  login(data) {
    const loginUrl = this.url + 'login';
    return this.http.post(loginUrl, data).toPromise();
  }

  logout() {
    const logoutUrl = this.url + 'logout';
    return this.http.get(logoutUrl).toPromise();
  }
}