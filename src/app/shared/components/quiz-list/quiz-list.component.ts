import { Component } from '@angular/core';
import { IQuizResult } from '../../../core/enums/QuizResult';
import { QuizService } from '../../services/Quiz/quiz.service';
declare var bootstrap: any;
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent {
  takenQuizzes: IQuizResult[] = [];
  selectedQuiz: IQuizResult | null = null; // Holds the currently selected quiz for the modal

  constructor(
    private quizService: QuizService,

  ) {}

  ngOnInit(): void {
    this.loadTakenQuizzes();
  }

  loadTakenQuizzes(): void {
    this.quizService.getUserTakenQuizzes().subscribe({
      next: (quizzes) => (this.takenQuizzes = quizzes),
      error: (error) => console.error('Error loading taken quizzes:', error)
    });
  }
  openScoreModal(quiz: any) {
    this.selectedQuiz = quiz;
    const scoreModal = new bootstrap.Modal(
      document.getElementById('scoreModal'),
      {}
    );
    scoreModal.show();
  }



}
