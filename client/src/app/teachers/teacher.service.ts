import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeacher } from '../shared/interfaces';

@Injectable()
export class TeacherService {

  constructor(private http: HttpClient) { }

  loadTeachers(){
    return this.http.get<ITeacher[]>(`http://localhost:3000/teachers`)
  }
}
