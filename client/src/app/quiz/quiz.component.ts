import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentIndex = 0;
  totalQuestions!: number;
  score = 0;
  answers: any;
  click!: boolean;
  quizOver!: boolean;
  
  
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  goNext(){
    this.currentIndex++;
    this.updateScore();
    
    if(this.currentIndex === this.totalQuestions){
      this.endQuiz();
    }
  }

  goPrevious(){
    this.currentIndex--;
  }

  goBack(){
    this.router.navigate(['/']);
  }
  receiveAnswers(recievedAnswer: any){
    this.answers = recievedAnswer;
  }

  updateScore(){
    if(this.answers.user_answer === this.answers.correct_answer){
      this.score ++;
    }
  }

  getTotalQuestions(totalQuestions: number){
    this.totalQuestions = totalQuestions;

  }

  endQuiz(){
    this.quizOver = true;
    if (this.score<5){
      alert('Your level is Begginer');
    }
    if(this.score>=5 && this.score<10){
    alert('Well Done! Your level is Elementary. You can start from Elementary level')
    }
    if(this.score>=10 && this.score<15){
      alert('Congrats! Your level is Pre-Intermediate. You can start from Pre-Intermediate')
      }
      if(this.score>=15 && this.score<=20){
        alert('Excellent! Your level is Intermediate.')
        }
    //alert('Quiz Over! Score is' + this.score + '/' + this.totalQuestions);
  }
  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }

}
