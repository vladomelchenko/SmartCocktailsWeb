import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {RegistrationModel} from '../models/registrationModel';

@Injectable()
export class RegistrationService {
    constructor(private http: HttpClient) {}

    register(reg: RegistrationModel) {
        const json = JSON.stringify({email: reg.email, password: reg.password, confirmPassword: reg.confirmPassword});
        const params = json;
        const myheaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:53201/api/Account/Register', params, {headers: myheaders});
    }
}