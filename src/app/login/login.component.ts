import { Component, OnInit } from '@angular/core';

import { LoginStatus } from './login-status.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginStatus = LoginStatus;
  status: string = LoginStatus.autorization;
  changeValue: string = LoginStatus.registration;

  constructor() {}

  ngOnInit() {}

  changeLoginStatus(value: string): void {
    switch (value) {
      case LoginStatus.autorization:
        this.status = LoginStatus.autorization;
        this.changeValue = LoginStatus.registration;
        break;
      case LoginStatus.registration:
        this.status = LoginStatus.registration;
        this.changeValue = LoginStatus.autorization;
        break;
    }
  }
}
