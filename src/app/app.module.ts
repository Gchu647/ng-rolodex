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
import { GuardService } from './services/guard.service';

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
        {path: '', component: LoginComponent},
        {path: 'home', component: HomepageComponent, canActivate: [GuardService]},
        {path: 'contacts', component: ContactsComponent, canActivate: [GuardService]},
        {path: 'newcontact', component: CreateContactComponent, canActivate: [GuardService]},
        {path: 'profile', component: ProfileComponent, canActivate: [GuardService]},
        {path:'**', redirectTo:'', pathMatch:'full'},
      ]
    )
  ],
  providers: [
    BackendService,
    AuthService,
    SessionService,
    GuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
