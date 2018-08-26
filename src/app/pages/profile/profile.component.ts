import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  userProfile: {} = {
    name: null,
    email: null,
    created_at: null,
    updated_at: null,
  };

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.profile()
    .then(response => {
      console.log('user profile', response);
      this.userProfile = response;
    })
  }
}