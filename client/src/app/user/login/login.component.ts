import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../form-style.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  submitFormHandler(value:{username: string, password: string}): void {
  
    this.isLoading = true;
    this.errorMessage = '';
    
    this.userService.login(value).subscribe(()=>{
      this.isLoading = false;
      this.router.navigate(['/']);
    }, (err)=>{
      this.errorMessage = 'ERROR!';
      this.isLoading = false;
    });
  }

}
