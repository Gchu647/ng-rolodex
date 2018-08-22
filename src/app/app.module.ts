import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//Shared
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
