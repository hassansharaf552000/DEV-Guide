import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuiz } from '../../../core/enums/Quiz';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { AnswerViewModel } from '../../../core/enums/AnswerViewModel';
import { IQuizResult } from '../../../core/enums/QuizResult';
import { QuizSubmissionViewModel } from '../../../core/enums/QuizSubmissionViewModel';
import { CreateQuiz } from '../../../core/enums/CreateQuiz';
import { QuestionDto } from '../../../core/enums/QuestionDto';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private qetquizzes = "http://localhost:5164/api/Quize/user/quizzes";
  private getQuizByIdUrl = 'http://localhost:5164/api/Quize';
  private submitQuizUrl = 'http://localhost:5164/api/Quize/submit';
  private gettakenquizzes = 'http://localhost:5164/api/Quize/quizzes/taken'
  private createquizurl = 'http://localhost:5164/api/Quize/CreateQuiz'



  constructor(private http: HttpClient) { }

  getUserQuizzes(): Observable<IQuiz[]> {
    return this.http.get<IQuiz[]>(this.qetquizzes).pipe(
      tap((Quizzes) => console.log('API response for user Quizzes:', Quizzes)),
      catchError((error) => {
        console.error('Error fetching user quizzes:', error);
        return throwError(() => error);
      })
    );
  }
  getUserTakenQuizzes(): Observable<IQuizResult[]> {
    return this.http.get<IQuizResult[]>(this.gettakenquizzes).pipe(
      tap((Quizzes) => console.log('API response for User Taken Quizzes:', Quizzes)),
      catchError((error) => {
        console.error('Error fetching user Taken quizzes:', error);
        return throwError(() => error);
      })
    );
  }

  getQuizById(id: number): Observable<IQuiz> {
    const url = `${this.getQuizByIdUrl}/${id}`;
    return this.http.get<IQuiz>(url).pipe(
      tap((quiz) => console.log('API response for quiz details:', quiz)),
      catchError((error) => {
        console.error('Error fetching quiz by ID:', error);
        return throwError(() => error);
      })
    );
  }

  // SubmitQuiz(quizId: number, userAnswers: AnswerViewModel[]): Observable<IQuizResult> {
  //   const url = `${this.submitQuizUrl}/${quizId}`;
  //   return this.http.post<IQuizResult>(url, { UserAnswers: userAnswers }, {
  //     headers: { 'Content-Type': 'application/json' }
  //   }).pipe(
  //     tap((result) => console.log('Quiz submission result:', result)),
  //     catchError((error) => {
  //       console.error('Error submitting quiz:', error);
  //       return throwError(() => error);
  //     })
  //   );
  // }

  SubmitQuiz(quizId: number, userAnswers: AnswerViewModel[]): Observable<IQuizResult> {
    const url = `${this.submitQuizUrl}/${quizId}`;

    // Construct the payload according to the QuizSubmissionViewModel
    const submissionPayload: QuizSubmissionViewModel = {
      UserAnswers: userAnswers // Use camelCase to match the TypeScript interface
    };

    return this.http.post<IQuizResult>(url, submissionPayload, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap((result) => console.log('Quiz submission result:', result)),
      catchError((error) => {
        console.error('Error submitting quiz:', error);
        return throwError(() => error);
      })
    );
  }


  createQuiz(model: CreateQuiz): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.createquizurl}`, model, { headers });
  }


 






}
