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
import { CareersComponent } from './careers/careers.component';
import { LevelService } from './plans-schedule/level.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PlansScheduleComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule ,
    CoreModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    LevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
