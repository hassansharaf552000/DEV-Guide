import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuiz } from '../../../core/enums/Quiz';
import { QuizService } from '../../services/Quiz/quiz.service';
import { Subscription, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AnswerViewModel } from '../../../core/enums/AnswerViewModel';
import { IQuizResult } from '../../../core/enums/QuizResult';
import { QuestionDto } from '../../../core/enums/QuestionDto';
import { QuizSubmissionViewModel } from '../../../core/enums/QuizSubmissionViewModel';
import { AuthService } from '../../services/Auth/auth.service';

interface Question {
  text: string;
  options: string[];
  selectedOption?: number; // Store the selected option index here
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit, OnDestroy {
  quiz: IQuiz | null = null;
  currentQuestionIndex: number = 0;
  errorMessage: string | null = null;
  remainingTime: number = 0; // remaining time in seconds
  timerSubscription!: Subscription;
  selectedAnswers: AnswerViewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,private auth: AuthService
  ) {

    this.role = `/${this.auth.getStoredRole().toLocaleLowerCase()}/finish-quiz/`
  }
  role = "";

  ngOnInit(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));
    if (quizId) {
      this.loadQuiz(quizId);
    }
  }

  ngOnDestroy(): void {
    // Ensure to unsubscribe from the timer when the component is destroyed
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  loadQuiz(id: number): void {
    this.quizService.getQuizById(id).subscribe(
      (data) => {
        this.quiz = data;
        this.startTimer(data.Duration); // Start timer with quiz duration in minutes
      },
      (error) => {
        console.error('Error fetching quiz:', error);
        this.errorMessage = 'Error loading quiz. Please try again later.';
      }
    );
  }

  startTimer(durationInMinutes: number): void {
    // Convert duration from minutes to seconds
    this.remainingTime = durationInMinutes * 60;

    // Start a 1-second interval that counts down
    this.timerSubscription = interval(1000)
      .pipe(takeWhile(() => this.remainingTime > 0)) // Stop when remainingTime reaches 0
      .subscribe(() => {
        this.remainingTime--;

        if (this.remainingTime === 0) {
          this.submitQuiz(); // Auto-submit when time runs out
        }
      });
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < (this.quiz?.Questions.length ?? 0) - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectOption(questionIndex: number, optionIndex: number): void {
    // Store the selected option index in each question object
    if (this.quiz) {
      this.quiz.Questions[questionIndex].SelectedOption = optionIndex;
    }
  }

  allQuestionsAnswered(): boolean {
    // Ensure all questions have a selected option index
    return this.quiz?.Questions.every((question) => question.SelectedOption !== undefined) ?? false;
  }

  // submitQuiz(): void {
  //   console.log('Quiz submitted successfully!');
  //   if (this.timerSubscription) {
  //     this.timerSubscription.unsubscribe(); // Stop the timer when quiz is submitted
  //   }
  //   if (this.quiz) {
  //     // Map selected answers to the model expected by backend
  //     this.selectedAnswers = this.quiz.Questions.map((q) => ({
  //       QuestionId: q.QuestionId,
  //       SelectedOptionId: q.Options.find((option) => option['selected'])?.OptionId,
  //     }));

  //     // Call the QuizService's submitQuiz method
  //     this.quizService.SubmitQuiz(this.quiz.QuizId, this.selectedAnswers).subscribe(
  //       (result: IQuizResult) => {
  //         console.log('Quiz submission result:', result);

  //         // Navigate based on result (pass or fail)
  //         if (result.Passed) {
  //           this.router.navigate(['developer/finish-quiz', this.quiz.QuizId], {
  //             state: { message: 'Congratulations, you passed!', score: result.Score },
  //           });
  //         } else {
  //           this.router.navigate(['developer/finish-quiz',this.quiz.QuizId], {
  //             state: { message: 'Unfortunately, you did not pass.', score: result.Score },
  //           });
  //         }
  //       },
  //       (error) => {
  //         console.error('Error submitting quiz:', error);
  //       }
  //     );
  //   }
  // }


  // submitQuiz(): void {
  //   console.log('Starting quiz submission process...');

  //   if (this.timerSubscription) {
  //     this.timerSubscription.unsubscribe(); // Stop the timer when quiz is submitted
  //   }

  //   if (this.quiz) {
  //     // Map the answers with the structure expected by the backend (including IsSelected)
  //     const answers: QuestionDto[] = this.quiz.Questions.map((question) => ({
  //       QuestionId: question.QuestionId,
  //       Text: question.Text,
  //       Options: question.Options.map((option) => ({
  //         OptionId: option.OptionId,
  //         OptionText: option.OptionText,
  //         IsCorrect: option.IsCorrect,
  //         IsSelected: option.OptionId === question.SelectedOption, // Mark the selected option
  //       })),
  //     }));

  //     // Call the QuizService's submitQuiz method with the correctly formatted answers
  //     this.quizService.SubmitQuiz(this.quiz.QuizId, answers).subscribe(
  //       (result: IQuizResult) => {
  //         console.log('Quiz submission result:', result);

  //         // Navigate based on the result (pass or fail)
  //         const resultMessage = result.Passed
  //           ? 'Congratulations, you passed!'
  //           : 'Unfortunately, you did not pass.';

  //         this.router.navigate(['developer/finish-quiz', this.quiz.QuizId], {
  //           state: { message: resultMessage, score: result.Score },
  //         });
  //       },
  //       (error) => {
  //         console.error('Error submitting quiz:', error);
  //       }
  //     );
  //   }
  // }

  submitQuiz(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

      if (this.quiz) {
        const answers: AnswerViewModel[] = this.quiz.Questions.map((q) => ({
          QuestionId: q.QuestionId,
          SelectedOptionId: q.SelectedOption
        }));

      // Call the submit function from the QuizService
      this.quizService.SubmitQuiz(this.quiz.QuizId, answers).subscribe(
        (result: IQuizResult) => {
          console.log('Quiz submission result:', result);

          // Navigate based on result
          const resultMessage = result.Passed
            ? 'Congratulations, you passed!'
            : 'Unfortunately, you did not pass.';

          this.router.navigate([this.role, this.quiz.QuizId], {
            state: { message: resultMessage, score: Math.round(result.Score) },
          });
        },
        (error) => {
          console.error('Error submitting quiz:', error);
        }
      );
    }
  }







  // Format remaining time as mm:ss for display
  get formattedTime(): string {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
