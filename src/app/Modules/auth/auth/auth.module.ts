import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from '../signup/signup.component'; 
//import { TrimPipe } from '../../../core/pipes/trim.pipe';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
    //TrimPipe
  ]
})
export class AuthModule { }
