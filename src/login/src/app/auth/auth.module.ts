import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login';
import {NavigationModule} from "../navigation";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NavigationModule
  ]
})
export class AuthModule { }
