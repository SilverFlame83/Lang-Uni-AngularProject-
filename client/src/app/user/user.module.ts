import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareersComponent } from './careers/careers.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
