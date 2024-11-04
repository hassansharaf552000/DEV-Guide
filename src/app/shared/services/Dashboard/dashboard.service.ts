import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IQuiz } from '../../../core/enums/Quiz';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private DevelopersCountUrl = 'http://localhost:5164/api/Account/Developer-Count';
  private MentorsCountUrl = 'http://localhost:5164/api/Account/Mentor-Count';
  private HRCountUrl = 'http://localhost:5164/api/Account/HR-Count';
  private TotalSessionsUrl = 'http://localhost:5164/api/Session/AllBookedSessions';
  private TotalQuizzesTakenUrl = 'http://localhost:5164/api/Quize/AllQuizzesCompleted';

  private quizzesUrl = 'http://localhost:5164/api/Quize/AllQuizzes';

  private quizzessolved = 'http://localhost:5164/api/Quize/AllQuizzesSolved'

  constructor(private http: HttpClient) { }

  getAllQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(this.quizzesUrl);
  }

  getAllQuizzesSolved(): Observable<any[]> {
    return this.http.get<any[]>(this.quizzessolved);
  }


  getDevelopersCount(): Observable<number> {
    return this.http.get<{ DeveloperCount: number }>(this.DevelopersCountUrl).pipe(
      map(response => response.DeveloperCount),
      catchError(() => of(0)) // Return 0 if there's an error
    );
  }

  getMentorsCount(): Observable<number> {
    return this.http.get<{ MentorCount: number }>(this.MentorsCountUrl).pipe(
      map(response => response.MentorCount),
      catchError(() => of(0))
    );
  }

  getHRCount(): Observable<number> {
    return this.http.get<{ HRCount: number }>(this.HRCountUrl).pipe(
      map(response => response.HRCount),
      catchError(() => of(0))
    );
  }

  getTotalSessions(): Observable<number> {
    return this.http.get<{ TotalSessions: number }>(this.TotalSessionsUrl).pipe(
      map(response => response.TotalSessions),
      catchError(() => of(0))
    );
  }

  getTotalQuizzesTaken(): Observable<number> {
    return this.http.get<{ TotalQuizzesSolved: number }>(this.TotalQuizzesTakenUrl).pipe(
      map(response => response.TotalQuizzesSolved),
      catchError(() => of(0))
    );
  }
}


