import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperience } from '../../../core/enums/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private allexperiences = 'http://localhost:5164/api/Account/GetAllExperiences';
  private updateexperience = 'http://localhost:5164/api/Account/UpdateExperience'

  constructor(private http: HttpClient) {}

  // Fetch all experiences of the user
  getAllExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(this.allexperiences);
  }

  editExperience(experience: IExperience): Observable<IExperience> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IExperience>(`${this.updateexperience}`, experience, { headers });
  }
}
