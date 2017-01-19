import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 


import { HomeModule } from './home/home.module'; 
import { AuthModule } from './auth/auth.module'; 

// App Root 
import { AppComponent } from './app.component';
// import { UserService } from './shared/services/user.service';
import { ArticleService } from './shared/services/article.service';



// import { HttpModule } from '@angular/http';



// import { HeaderComponent } from './shared/layout/header/header.component';
import { ProfileComponent } from './profile/profile/profile.component'; 
// import { JwtService } from './shared/services/jwt.service';
// import { ArticlePreviewComponent } from './shared/article/article-preview.component';

import {
  HeaderComponent,
  UserService,
  JwtService
} from './shared'; 


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    // ArticlePreviewComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule, 
    // HttpModule,
    rootRouting,
  ],
  providers: [
    UserService, 
    JwtService,
    ArticleService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
