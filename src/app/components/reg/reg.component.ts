import { Component } from '@angular/core';
import {RegistrationModel} from '../../models/registrationModel';
import {RegistrationService} from '../../services/registration.service'

@Component({
  selector: 'reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent{
  title = 'app';
  constructor(private registerService: RegistrationService) { }
  regModel: RegistrationModel = new RegistrationModel();
  responseMessage: string; // полученный пользователь
  done = false;
  submit(regModel: RegistrationModel) {
    this.registerService.register(regModel).subscribe(
      (data: string) => {this.responseMessage = data; this.done = true; },
      error => console.log(error));
  }
}
