import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http'


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCoursesComponent } from './home-courses/home-courses.component';
import { RouterModule } from '@angular/router';
import { storageServiceProvider } from './storage.service';
import { AuthActivate } from './guards/auth.guard';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeCoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    storageServiceProvider,
    AuthActivate
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeCoursesComponent
  ]
})
export class CoreModule { }
