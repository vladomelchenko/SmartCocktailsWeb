import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './components/app/app.component';
import {RegComponent} from './components/reg/reg.component'
import { BadRequestComponent } from './components/badrequest/badrequest.component';
import { AuthComponent } from './components/auth/auth.component';
import {CocktailsComponent} from './components/cocktails/cocktails.component'

import {RegistrationService} from './services/registration.service'
import {LoginService} from './services/login.service'
import {CocktailService} from './services/cocktail.service'

import {Routes, RouterModule} from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';


// определение маршрутов
const appRoutes: Routes =[
   { path: 'registration', component: RegComponent},
   { path: '', component: AppComponent},
   { path: 'login',component:AuthComponent},
   { path:'cocktails',component:CocktailsComponent},
   { path: '**', component: BadRequestComponent}
];

@NgModule({
  declarations: [AppComponent,RegComponent,BadRequestComponent,AuthComponent,CocktailsComponent],
  imports: [ BrowserModule, RouterModule.forRoot(appRoutes),FormsModule, HttpClientModule],
  providers: [RegistrationService,LoginService,CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
