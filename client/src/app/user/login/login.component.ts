import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../form-style.css']
})
export class LoginComponent  {

  isLoading = false;
  errorMessage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }




  login(form: NgForm): void {
    if (form.invalid) { return; }
    const { username, password } = form.value;
    this.userService.login({ username, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
        this.router.navigate([redirectUrl]);
        window.location.href = 'http://localhost:4200/home'
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
