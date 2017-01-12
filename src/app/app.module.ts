import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module'; 

import { HomeComponent } from './home/home.component'; 

import { RouterModule } from '@angular/router'; 
import { HeaderComponent } from './shared/layout/header/header.component';
import { ProfileComponent } from './profile/profile/profile.component'; 
import { UserService } from './shared/services/user.service';
import { JwtService } from './shared/services/jwt.service';


// const rootRouting: ModuleWithProviders = RouterModule.forRoot([
//   {
//     path: 'signin',
//     component: AuthComponent
//   },
//   {
//     path: 'register',
//     component: AuthComponent
//   },
//   {
//     path: '',
//     component: HomeComponent
//   }
// ], {useHash: true});

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    rootRouting,
    AuthModule
  ],
  providers: [UserService, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
