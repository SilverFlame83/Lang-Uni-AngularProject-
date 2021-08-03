import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { NewCourseComponent } from './new-course/new-course.component';

const routes: Routes = [
    {
        path: 'courses',
        children: [
            {
                path:'',
                pathMatch: 'full',
                component: CoursesComponent
            },
            {
                path: 'courseId',
                component: CourseComponent
            },
            {
                path: 'add-course',
                component:NewCourseComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }