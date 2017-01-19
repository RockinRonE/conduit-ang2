import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map'; 

import { ArticleService } from '../shared/services/article.service'; 



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   

  constructor(
     private userService: UserService,
     private http: Http,
     private articleService: ArticleService
  ) { }


  profile = '';

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = JSON.stringify(data));
  }
  
  ngOnInit() {
    this.articleService.getArticles()
        .subscribe(
          data => JSON.stringify(data),
          err => {
            console.log(err);
          }
        )
    // console.log(`ngOnInit works!`);
    // return this.http.get(`https://conduit.productionready.io/api/articles`)
    //             .map((res: Response) => console.log(res.json())
                 
    //             );


  }
}
