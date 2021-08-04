import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean { return !!this.user; }

  constructor(private http: HttpClient ,
    public router: Router) {
    
  }

  login(data: {username: string, password: string}){
    return this.http.post<IUser>(`${apiUrl}/login`, data, { withCredentials: true }).pipe(
      tap((user)=> this.user = user)
    );
  }

  register(data: { username: string, password: string }){
    return this.http.post<IUser>(`${apiUrl}/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  getUserInfo(){
    return this.http.get<IUser>(`${apiUrl}/users`, {withCredentials: true}).pipe(
      tap((user)=>this.user = user)
    )
  }

    logout(): Observable<any> {
      return this.http.get(`${apiUrl}/logout`, { withCredentials: true });
    }
    // return this.http.post<IUser>(`${apiUrl}/logout`, {}, { withCredentials: true }).pipe(
    //   tap(() => this.user = null)
    // );
  

}


