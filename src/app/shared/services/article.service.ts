import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http'; 

import { Article } from '../models';

import 'rxjs/add/operator/map'; 

@Injectable() 

export class ArticleService {

    constructor(private http: Http ) {}

    getArticles(): Observable<Article> {
        return this.http
            .get(`https://conduit.productionready.io/api/articles?limit=10`)
            .map((res: Response) => {
                let articles = res.json();
                return articles; 
            })
        }
}