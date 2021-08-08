import { ApplicationRef, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../form-style.css','./register.component.css']
})
export class RegisterComponent implements OnDestroy {

  killSubscription = new Subject();
  
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required, sameValueAsFactory(
        () => this.form?.get('password'), this.killSubscription
      )]]
    
    });
    
  }
   
  submitHandler(){
    console.log(this.form.value);
   if(this.form.invalid){return;}
   this.userService.register(this.form.value).subscribe({
     next:()=>{
      this.router.navigate(['/']);
     },
    error:(err)=>{
      console.log(err);
    }
  })
  }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }

}


