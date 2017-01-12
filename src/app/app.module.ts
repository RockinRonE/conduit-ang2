import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { HomeComponent } from './home/home.component'; 

import { RouterModule } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ProfileComponent } from './profile/profile/profile.component'; 
import { UserService } from './shared/services/user.service';
import { JwtService } from './shared/services/jwt.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  
  {
    path: 'signin',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  },
  {
    path: '',
    component: HomeComponent
  }
], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [UserService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
