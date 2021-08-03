import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lang-uni';

  get isAuthentic(): boolean{
    return this.userService.currentUser === undefined;
  }

  constructor (private userService: UserService){}
}
