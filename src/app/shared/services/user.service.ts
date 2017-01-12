import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http'; 

import { User } from '../models/user.model'; 

import 'rxjs/add/operator/map'; 

const apiRoute = 'https://conduit.productionready.io/api'; 
@Injectable()


export class UserService {

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  registerUser(user) {
    return this.http
      .post(`https://conduit.productionready.io/api/users`, JSON.stringify({user: {username: user.username, email: user.email, password: user.password }}), {headers: this.headers})
      .map(res => res.json())
      .subscribe(user => console.log(user) );
  }

  logIn(credentials) {
    console.log(credentials);
    return this.http.post('${apiRoute}/users/login', JSON.stringify({user: credentials}), {headers: this.headers})
      .map(res => res.json())
      .subscribe(data => console.log(data));
      
  }

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/UsernameRonny`)
      .map((res:Response) => res.json()); 
  }

}
