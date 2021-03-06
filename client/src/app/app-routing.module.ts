import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './user/careers/careers.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlansScheduleComponent } from './plans-schedule/plans-schedule.component';
import { TeachersComponent } from './teachers/teachers.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthActivate } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'plans',
    component: PlansScheduleComponent
  },
  {
    path:'careers',
    component: CareersComponent
  },{
    path:'quizes',
    component: QuizComponent,
    canActivate:[AuthActivate],
    data:{
        authenticationRequired: true,
        authenticationFailureRedirectUrl: '/login',
    }
  },
  {
    path:'teachers',
    component: TeachersComponent,
    canActivate:[AuthActivate],
    data:{
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
  }
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
