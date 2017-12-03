import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

import {CocktailModel} from '../models/cocktailModel';

@Injectable()
export class CocktailService {
    constructor(private http: HttpClient) {}

    getCocktails() {
        const myheaders = new HttpHeaders().set('Content-Type', 'application/json');
        var response = this.http.get('http://localhost:53201/api/Cocktails', {headers: myheaders});
        return response;
    }
}