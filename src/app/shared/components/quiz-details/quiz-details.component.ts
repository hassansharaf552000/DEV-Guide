import { Component } from '@angular/core';
interface Question {
  text: string;
  options: string[];
  correctOptionIndex: number;
  selectedOptionIndex?: number;
}
@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css',
})
export class QuizDetailsComponent {
  totalQuestions: number = 15;
  attemptedQuestions: number = 15; // Assume all questions were attempted
  correctAnswers: number = 10; // Assume 10 questions were answered correctly

  questions: Question[] = [
    {
      text: 'Which SQL keyword is used to retrieve data from a database?',
      options: ['GET', 'SELECT', 'FETCH', 'EXTRACT'],
      correctOptionIndex: 1,
      selectedOptionIndex: 1, // Correct
    },
    {
      text: 'What does CSS stand for?',
      options: [
        'Creative Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Sheets',
        'Colorful Style Sheets',
      ],
      correctOptionIndex: 1,
      selectedOptionIndex: 2, // Incorrect
    },
    {
      text: 'Which HTML element is used to define a hyperlink?',
      options: ['<a>', '<link>', '<href>', '<hyperlink>'],
      correctOptionIndex: 0,
      selectedOptionIndex: 0, // Correct
    },
    {
      text: 'Which programming language is known as the backbone of web development?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correctOptionIndex: 2,
      selectedOptionIndex: 3, // Incorrect
    },
    {
      text: 'What does HTTP stand for?',
      options: [
        'Hypertext Transfer Protocol',
        'Hyper Transfer Text Protocol',
        'Hypertext Transfer Program',
        'Hyperlink Transfer Protocol',
      ],
      correctOptionIndex: 0,
      selectedOptionIndex: 0, // Correct
    },
    {
      text: 'Which programming language is primarily used for Android development?',
      options: ['Swift', 'Kotlin', 'JavaScript', 'Ruby'],
      correctOptionIndex: 1,
      selectedOptionIndex: 1, // Correct
    },
    {
      text: 'Which of the following is a NoSQL database?',
      options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
      correctOptionIndex: 2,
      selectedOptionIndex: 2, // Correct
    },
    {
      text: 'Which CSS property is used to change the text color?',
      options: ['font-style', 'color', 'text-align', 'font-weight'],
      correctOptionIndex: 1,
      selectedOptionIndex: 1, // Correct
    },
    {
      text: 'Which language is used for styling web pages?',
      options: ['HTML', 'JQuery', 'CSS', 'XML'],
      correctOptionIndex: 2,
      selectedOptionIndex: 3, // Incorrect
    },
    {
      text: 'Which tool can you use to ensure code quality?',
      options: ['Angular', 'jQuery', 'ESLint', 'React'],
      correctOptionIndex: 2,
      selectedOptionIndex: 2, // Correct
    },
    {
      text: 'Which HTML element is used to create a dropdown list?',
      options: ['<select>', '<input>', '<list>', '<dropdown>'],
      correctOptionIndex: 0,
      selectedOptionIndex: 1, // Incorrect
    },
    {
      text: 'What is the correct syntax for referring to an external script called "script.js"?',
      options: [
        '<script href="script.js">',
        '<script name="script.js">',
        '<script src="script.js">',
        '<script file="script.js">',
      ],
      correctOptionIndex: 2,
      selectedOptionIndex: 2, // Correct
    },
    {
      text: 'Inside which HTML element do we put the JavaScript?',
      options: ['<js>', '<scripting>', '<script>', '<javascript>'],
      correctOptionIndex: 2,
      selectedOptionIndex: 3, // Incorrect
    },
    {
      text: 'Which of the following is used to find an element in an array in JavaScript?',
      options: ['find()', 'search()', 'locate()', 'lookup()'],
      correctOptionIndex: 0,
      selectedOptionIndex: 0, // Correct
    },
    {
      text: 'Which HTML attribute is used to define inline styles?',
      options: ['class', 'font', 'style', 'styles'],
      correctOptionIndex: 2,
      selectedOptionIndex: 2, // Correct
    },
  ];
}
