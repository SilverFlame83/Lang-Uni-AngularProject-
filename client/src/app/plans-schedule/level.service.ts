import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILevel } from '../shared/interfaces/level';

@Injectable()
export class LevelService {

  constructor(private http: HttpClient) { }

  loadLevels(){
    return this.http.get<ILevel[]>(`http://localhost:3000/levels`)
  }
}
