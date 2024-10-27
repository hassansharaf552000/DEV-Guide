import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEducation } from '../../../core/enums/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private geteducations = 'http://localhost:5164/api/Account/GetAllEducations';
  private addeducations = 'http://localhost:5164/api/Account/AddEducation';
  private editeducations = 'http://localhost:5164/api/Account/UpdateEducation'

  private add='http://localhost:5164/api/Education/add'


  constructor(private http: HttpClient) {}

  // Fetch all experiences of the user
  getAllEducations(): Observable<IEducation[]> {
    return this.http.get<IEducation[]>(this.geteducations);
  }

  addEducation(education: IEducation): Observable<IEducation> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<IEducation>(this.add,education);
  }

  // Edit an existing education record
  editEducation(education: IEducation): Observable<IEducation> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IEducation>(`${this.editeducations}`, education, { headers });
  }


}
