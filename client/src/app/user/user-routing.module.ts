import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate:  [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/',
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          authenticationRequired: false,
          authenticationFailureRedirectUrl: '/',
        }
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }