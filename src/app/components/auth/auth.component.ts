import { Component } from '@angular/core';

import {LoginService} from '../../services/login.service'
import { LoginModel } from '../../models/loginModel';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  title = 'app';
  constructor(private loginService: LoginService) { }
  logModel: LoginModel = new LoginModel();
  responseMessage: string; // полученный пользователь
  done = false;
  submit(logModel: LoginModel) {
    this.loginService.login(logModel).subscribe(
      (data: string) => {this.responseMessage = data; this.done = true; },
      error => console.log(error));
      console.log(this.responseMessage);
  }
}