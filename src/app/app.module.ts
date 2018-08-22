import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Shared
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';

// Services
import { BackendService } from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactsComponent,
    ProfileComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomepageComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: 'profile', component: ProfileComponent},
      ]
    )
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
