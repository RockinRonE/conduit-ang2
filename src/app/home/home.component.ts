import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   

  constructor(private userService: UserService) { }
  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }

  registerUser(username, email, password) {
    this.userService.registerUser(username, email, password).subscribe(data => this.profile = data);
  }
  
  ngOnInit() {
  }

// get diagnostic() { return JSON.stringify(this.model)}
}
// /Users/ronnyewanek/Desktop/conduit-app/src/app/shared/services/user.service.



// /Users/ronnyewanek/Desktop/conduit-app/src/app/home/home.component.ts