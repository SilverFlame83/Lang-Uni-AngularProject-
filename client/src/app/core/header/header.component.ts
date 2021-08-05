import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.user?.username || '';
  }
  
  constructor(
    public userService: UserService,
    private router: Router) { }

  // loginHandler(data:any):void{
  //   this.userService.login(data);
  // }

  logoutHandler():void{
    this.userService.logout().subscribe(()=>{
    this.router.navigateByUrl('/user/register');
    });
  }

}
