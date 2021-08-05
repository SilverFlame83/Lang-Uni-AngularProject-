import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  
  apply(form: NgForm): void{
    if(form.invalid){return;}
   const{name, email,address,city, image, phone, bdate} = form.value;
    this.userService.apply({name, email,address,city, image, phone, bdate}).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
  
}
