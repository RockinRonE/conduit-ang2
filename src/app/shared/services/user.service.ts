import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http'; 
import { JwtService } from './jwt.service'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

import { User } from '../models/user.model'; 

import 'rxjs/add/operator/map'; 

const apiRoute = 'https://conduit.productionready.io/api'; 
@Injectable()


export class UserService {
  private currentUser = new BehaviorSubject<User>(new User()); 

  constructor(
    private http: Http,
    private jwtService: JwtService

    ) { }


  private headers = new Headers({'Content-Type': 'application/json'});

  registerUser(user) {
    return this.http
      .post(`https://conduit.productionready.io/api/users`, JSON.stringify({user: {username: user.username, email: user.email, password: user.password }}), {headers: this.headers})
      .map(res => res.json())
      .subscribe(user => console.log(user) );
  }

  logIn(credentials): Observable<User> {
    console.log(credentials);

    return this.http.post(`${apiRoute}/users/login`, JSON.stringify({user: credentials}), {headers: this.headers})
      .map(data => {
        this.setUser(data.user);
        // return data; 
      }
      
  }

  setUser(user: User) {
    // save the JWT in localstorage
    this.jwtService.saveToken(user.token); 
    // set current user data into observable behavior subject
    this.currentUser.next(user); 
  }

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/UsernameRonny`)
      .map((res:Response) => res.json()); 
  }

}
