import { Injectable } from '@angular/core'; 
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service'; 

const api_url = `https://conduit.productionready.io/api`;

@Injectable()
export class ApiService{
    constructor(
        private http: Http,
        private jwtService: JwtService
    ) {}

    private setHeaders(): Headers {
        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        // if user has a JWT token, then add auth to header according to docs
        // Authentication Header:
        // Authorization: Token jwt.token.here
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        }

        return new Headers(headersConfig); 
    }

    private formatErrors(errors: any) {
        return Observable.throw(errors.json()); 
    }

    get(path: string, body: Object = {}, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${api_url}${path}`, { headers: this.setHeaders(), search: params})
            .catch(this.formatErrors);
    }
}