import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user.model'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   

  // model = new User('Ronny', 'ronny@gmail.com', 'password');

  // user = new User(); 
  
  submitted = false; 

 



  constructor(user: User) {

    onSubmit(user.username, user.email, user.password) {
      this.submitted = true; 

      new user(this.username, this.email, this.password);
    }

  }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
