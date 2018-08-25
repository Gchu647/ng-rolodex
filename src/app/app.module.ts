import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateContactComponent } from './pages/createContact/createContact.component';
import { LoginComponent } from './pages/login/login.component';

// Shared
import { HeaderComponent } from './components/header/header.component';

// Services
import { BackendService } from './services/backend.service';
import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactsComponent,
    ProfileComponent,
    HeaderComponent,
    CreateContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomepageComponent},
        {path: 'contacts', component: ContactsComponent},
        {path: 'newcontact', component: CreateContactComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'login', component: LoginComponent},
        {path:'**', redirectTo:'', pathMatch:'full'},
      ]
    )
  ],
  providers: [
    BackendService,
    AuthService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
