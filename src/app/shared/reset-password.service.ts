import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private apiUrl = 'http://localhost:5164/api/Account/ResetPassword';

  constructor(private http: HttpClient) {}

  // Reset Password method
  resetPassword(resetData: { email: string; code: string; newPassword: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, resetData, { headers });
  }
}
