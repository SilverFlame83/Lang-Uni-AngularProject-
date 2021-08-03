import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  currentUser: IUser | null | undefined = undefined;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) {
    
  }

  login(data: {username: string, password: string}){
    return this.http.post<IUser>(`${apiUrl}/login`, data, { withCredentials: true }).pipe(
      tap((user)=> this.currentUser = user)
    );
  }

  register(data: { username: string, password: string }){
    return this.http.post<IUser>(`${apiUrl}/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.currentUser = user)
    );
  }

  getProfileInfo(){
    // return this.http.get<IUser>(`${apiUrl}/profile`, {withCredentials: true}).pipe(
    //   tap((user)=>this.currentUser = user)
    // )
  }

  logout():void {
    // return this.http.post(`${apiUrl}/logout`, {}, { withCredentials: true }).pipe(
    //   tap(() => this.currentUser = null)
    // );

  }

}


