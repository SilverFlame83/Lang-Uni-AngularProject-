import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from './shared/interfaces';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient ) { }

  loadCourses(take?: number){
    const query = take ? `?take=${take}` : '';
    return this.http.get<ICourse[]>(`http://localhost:3000/courses${query}`)
  }
}
