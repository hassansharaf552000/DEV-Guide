import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Question {
  text: string;
  options: string[];
  selectedOption?: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    {
      text: 'What is Angular?',
      options: [
        'A JavaScript framework',
        'A CSS framework',
        'A database',
        'A text editor',
      ],
    },
    {
      text: 'Which directive is used to create a two-way data binding in Angular?',
      options: ['ngModel', 'ngBind', 'ngClass', 'ngIf'],
    },
    {
      text: 'What is a component in Angular?',
      options: [
        'A service',
        'A module',
        'A directive',
        'A reusable UI element',
      ],
    },
    {
      text: 'What is the purpose of Angular CLI?',
      options: [
        'To style Angular applications',
        'To test Angular applications',
        'To automate development tasks',
        'To build Angular modules',
      ],
    },
    {
      text: 'Which of the following is not a lifecycle hook in Angular?',
      options: ['ngOnInit', 'ngOnDestroy', 'ngStart', 'ngAfterViewInit'],
    },
    {
      text: 'What is dependency injection in Angular?',
      options: [
        'A way to define HTML templates',
        'A design pattern to manage service dependencies',
        'A method to create custom directives',
        'A tool for debugging Angular apps',
      ],
    },
    {
      text: 'What does AOT stand for in Angular?',
      options: [
        'Ahead of Time',
        'After One Task',
        'Angular on Time',
        'Acknowledgment of Technology',
      ],
    },
    {
      text: 'What is the purpose of a service in Angular?',
      options: [
        'To manipulate DOM elements',
        'To share data and logic across components',
        'To style components',
        'To configure routes',
      ],
    },
    {
      text: 'Which command is used to create a new Angular component?',
      options: [
        'ng g c component-name',
        'ng new component-name',
        'ng add component-name',
        'ng build component-name',
      ],
    },
    {
      text: 'What is the purpose of `@Input()` in Angular?',
      options: [
        'To bind a child component property to a parent component',
        'To create a form input field',
        'To inject services into components',
        'To trigger animations',
      ],
    },
    // Add more questions up to 30 here...
  ];

  currentQuestionIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectOption(questionIndex: number, optionIndex: number): void {
    this.questions[questionIndex].selectedOption = optionIndex;
  }
  allQuestionsAnswered(): boolean {
    return this.questions.every(
      (question) => question.selectedOption !== undefined
    );
  }
  submitQuiz(): void {
    console.log('Quiz submitted successfully!');
    this.router.navigate(['developer/finish-quiz']);
  }
}
