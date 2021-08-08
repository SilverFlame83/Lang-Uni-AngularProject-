import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuestionsComponent } from './questions/questions.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
