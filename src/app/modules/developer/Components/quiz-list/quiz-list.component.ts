import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent {
  quizzes = [
    {
      level: 'EASY LEVEL',
      description:
        'You completed the Easy stage of the Computer Fundamentals quiz.',
      score: 85.83,
      points: 85.83,
      retake: false,
    },
    {
      level: 'MEDIUM LEVEL',
      description:
        'You completed the Medium stage of the Computer Fundamentals quiz.',
      score: 90.0,
      points: 90.0,
      retake: false,
    },
    {
      level: 'HARD LEVEL',
      description:
        'You completed the Hard stage of the Computer Fundamentals quiz.',
      score: 55.0,
      points: 55.0,
      isPro: true,
      retake: true,
    },
  ];
  selectedQuiz: any = null;

  openScoreModal(quiz: any) {
    this.selectedQuiz = quiz;
    const scoreModal = new bootstrap.Modal(
      document.getElementById('scoreModal'),
      {}
    );
    scoreModal.show();
  }
}
