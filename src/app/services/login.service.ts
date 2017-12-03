import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {LoginModel} from '../models/loginModel';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    login(log: LoginModel) {
        const json = JSON.stringify({email: log.email, password: log.password,grant_type:"password"});
        const params = json;
        const myheaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:53201/Token', params, {headers: myheaders});
    }
}