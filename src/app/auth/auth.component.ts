import { Component, OnInit } from '@angular/core';


import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router'; 

import { UserService } from '../shared/services/user.service';

// import { User } from '../shared/models/user.model'; 

@Component({
  selector: 'auth-form',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
   form: FormGroup; 
   authType: String = ''; 
   title: String = ''; 


  constructor(
    private userService: UserService, 
    private fb: FormBuilder,
    private route: ActivatedRoute


    ) {
    this.form = this.fb.group({
      // "username": ['', Validators.required],
      "email": ['', Validators.required],
      "password": ['', Validators.required]
    });
  }

   onSubmit() {
     let credentials = this.form.value; 
     this.userService
      .logIn(this.form.value)
      .subscribe(
        data => console.log(data),
        err => {
          console.log(err); 
        }
      )


    }

  ngOnInit() {
    // console.log(this);
    this.route.url.subscribe(data => {
      // Get the last piece of the URL. URL segment is an array so...
      this.authType = data[data.length - 1].path; 

      // set page title
      this.title = (this.authType === 'signin') ? 'Sign In' : 'Register';

      if (this.authType === 'register') {
        this.form.addControl('username', new FormControl('', Validators.required)); 
      }

    })

  }



}
