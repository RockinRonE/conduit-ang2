import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/services/user.service';

import { User } from '../shared/models/user.model'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   user: User = {
     username: '',
     email: '',
     password: ''
   };
  

  // model = new User('Ronny', 'ronny@gmail.com', 'password');

  // user = new User(); 
  
  submitted = false; 

 



  constructor(private userService: UserService) {

  }

   onSubmit(register) {
      let registerUser = new User(register.username, register.email, register.password);
      this.userService.registerUser(registerUser); 
      // this.userService.registerUser(registerUser); 
    }

  ngOnInit() {
  }



}
