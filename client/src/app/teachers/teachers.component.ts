import { Component} from '@angular/core';
import { TeacherService } from './teacher.service';;
import { ITeacher } from '../shared/interfaces';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {

  teachers: ITeacher[] | undefined;

  constructor(private teacherService: TeacherService) {
    this.fetchTeachers()
   }

   fetchTeachers():void{
    this.teachers = undefined;
    this.teacherService.loadTeachers().subscribe(teachers=>this.teachers = teachers)
   }

}
