import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CustomValidatorDirective } from './custom-validator.directive';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoaderComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoaderComponent,
    CustomValidatorDirective
  ]
})
export class SharedModule { }
