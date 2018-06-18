import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes
  ],
  declarations: [LoginComponent,
    AuthorizationComponent,
    RegistrationComponent
],
  exports: [
  ]
})
export class LoginModule { }
