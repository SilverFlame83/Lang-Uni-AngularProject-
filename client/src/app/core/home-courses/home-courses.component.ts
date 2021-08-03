import { Component} from '@angular/core';
import { CoursesService } from 'src/app/courses.service';
import { ICourse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.css']
})
export class HomeCoursesComponent {

  courses: ICourse[] | undefined;

  constructor(private courseService: CoursesService) { 
    this.fetchCourses();
  }

   fetchCourses():void{
     this.courses= undefined;
     this.courseService.loadCourses(4).subscribe(courses => this.courses = courses)
   }
}