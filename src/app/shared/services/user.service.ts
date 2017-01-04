import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; 


import 'rxjs/add/operator/toPromise'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  registerUser(user): Promise<any> {

    let username = user.username;
    let password = 'password';
    let email = 'ronny@gmail.com';
    console.log(`this works!`);

    return this.http
      .post(`https://conduit.productionready.io/api/users`, JSON.stringify({user: {username: user.username, email: user.email, password: user.password }}), {headers: this.headers})
      .toPromise()
      .then(() => console.log(user));
      
      
      
      // .map((res:Response) => console.log(res.json())); 




  //  return this.http.post(`https://conduit.productionready.io/api/users/?username=ronny&email=ronny@gmail.com&password=mypassword`, '')
  //   .map((res:Response) => console.log(res.json())); 

  }

  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res:Response) => console.log(res.json())); 
  }

}
