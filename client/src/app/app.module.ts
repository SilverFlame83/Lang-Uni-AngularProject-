import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesService } from './courses.service';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PlansScheduleComponent } from './plans-schedule/plans-schedule.component';
import { LevelService } from './plans-schedule/level.service';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherService } from './teachers/teacher.service';
import { QuizModule } from './quiz/quiz.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PlansScheduleComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule ,
    SharedModule,
    QuizModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    LevelService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
