import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';


import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from '../landing/components/login/login.component';
import { HomeComponent } from '../landing/views/home/home.component';
import { LoginFormComponent } from '../landing/components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    LoginFormComponent,


  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,

  ],
 
})
export class LandingModule { }
