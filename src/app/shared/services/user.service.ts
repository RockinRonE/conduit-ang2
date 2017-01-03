import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {


  constructor(private http: Http) { }

  registerUser(username: string, email, password) {
   return this.http.get(`https://conduit.productionready.io/api/users/?username=${username}&email=${email}&password=${password}`)
    .map((res:Response) => res.json()); 

  }

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res:Response) => res.json()); 
  }

}
