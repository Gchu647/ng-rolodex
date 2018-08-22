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
    const contactUrl = this.url + 'contact';
    console.log('contact backend');
    return this.http.post(contactUrl, null).toPromise();
  }
}