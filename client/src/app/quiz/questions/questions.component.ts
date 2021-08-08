import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, DoCheck {
  questions!: any[];
  currentQuestion!: string;
  currentOptions!: string;
  correctAnswer!: string;
  userAnswer!: string | undefined;

  @Input() questionIndex!: number;
  @Output() answers =
    new EventEmitter<{ user_answer: string, correct_answer: string }>();
  constructor() { }

  @Output() totalQuestions = new EventEmitter<number>();


  ngOnInit(): void {
    this.questions = [
      {
        question: 'What ____ he want?',
        options: ['does', 'is', 'do'],
        answer: 'does'
      },
      {
        question: 'What.....you do?',
        options: ['do', 'are', 'does'],
        answer: 'do'
      },
      {
        question: '____ do you have dinner?',
        options: ['When time', 'What time', 'What kind of'],
        answer: 'What time'
      },
      {
        question: 'He ____ to go home.',
        options: ['didn\'t want', 'did', 'want'],
        answer: 'didn\'t want'
      },
      {
        question: 'The boy  ____ cake when his mother came into the room.',
        options: ['was eat', 'was eating', 'eats'],
        answer: 'was eating'
      },
      {
        question: 'There are  __________ French speakers in Montreal.',
        options: ['too much', 'a little', 'a lot of'],
        answer: 'a lot of'
      },
      {
        question: 'Would you like  ____ to the theatre tonight?',
        options: ['to go', 'going', 'to going'],
        answer: 'to go'
      },
      {
        question: 'I ____ to Peru on holiday next month.',
        options: ['will flying', 'flyed', 'am flying'],
        answer: 'am flying'
      },
      {
        question: 'Oh! It ____. I’ll take an umbrella with me.',
        options: ['rains', 'will raining', '\'s raining'],
        answer: '\'s raining'
      },
      {
        question: 'My coffee was ____ yours. I almost burned by mouth.',
        options: ['hotter than', 'hotter as', 'as hot'],
        answer: 'hotter than'
      },
      {
        question: 'I ____ sushi.',
        options: ['eaten', 'have never eaten', 'have eat'],
        answer: 'have never eaten'
      },
      {
        question: 'I don’t think you ____ them.',
        options: ['should to email', 'should email', 'should emailing'],
        answer: 'should email'
      },
      {
        question: 'If my new company is successful, I  ____ employ people to help me.',
        options: ['be able to', 'will be able to', 'will able to'],
        answer: 'will be able to'
      },
      {
        question: 'The film Avatar was directed ____ James Cameron.',
        options: ['by', 'from', 'with'],
        answer: 'by'
      },
      {
        question: 'Her horse is lovely. She _____ it since she was a teenager.',
        options: ['has', 'has had', 'had'],
        answer: 'has had'
      },
      {
        question: 'I mostly ____ my friends via email.',
        options: ['get on well with', 'keep in touch with', 'see each other'],
        answer: 'keep in touch with'
      },
      {
        question: 'I am very ___ in old cars.',
        options: ['keen', 'fond', 'intersted'],
        answer: 'intersted'
      },
      {
        question: 'He ___ his exam because he didn’t study.',
        options: ['failed', 'passed', 'fell'],
        answer: 'failed'
      },
      {
        question: 'The house will look cleaner when you have finished the ____.',
        options: ['home', 'homework', 'housework'],
        answer: 'housework'
      },
      {
        question: 'There was a nice meal and a band at the wedding ____',
        options: ['group', 'speech', 'ceremony'],
        answer: 'ceremony'
      }
      
    ]

    this.totalQuestions.emit(this.questions.length);
  }
  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
    this.correctAnswer = this.questions[this.questionIndex].answer;
  }
  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;

    this.answers.emit(
      { user_answer: this.userAnswer, correct_answer: this.correctAnswer });
  }
}

