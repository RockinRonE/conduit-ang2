import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { HomeComponent } from './home/home.component'; 

import { RouterModule } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './shared/layout/header/header.component'; 

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
