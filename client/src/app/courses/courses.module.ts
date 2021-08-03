import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CourseRoutingModule } from './course-routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    NewCourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CoursesModule { }
