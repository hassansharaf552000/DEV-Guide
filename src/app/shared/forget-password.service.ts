import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = 'http://localhost:5164/api/Account/ResetPasswordCode';

  constructor(private http: HttpClient) { }

  // Method to request the password reset code
  getResetPasswordCode(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams().set('email', email);
    return this.http.get(this.apiUrl, { headers, params });
  }
}
