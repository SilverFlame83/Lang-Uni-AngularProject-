import { Component} from '@angular/core';
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

  constructor(public userService: UserService) { }

  loginHandler(data:any):void{
    this.userService.login(data);
  }

  logoutHandler():void{
    this.userService.logout();
  }

}
