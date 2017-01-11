import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; 


import 'rxjs/add/operator/toPromise'; 
import 'rxjs/add/operator/map'; 

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

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/UsernameRonny`)
      .map((res:Response) => res.json()); 
  }

}
