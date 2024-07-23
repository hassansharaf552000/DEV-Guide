import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  private apiUrl = '#';

constructor(private http:HttpClient) { }
requestPasswordReset(email: string): Observable<any> {
  return this.http.post<any>(this.apiUrl, { email });
}

}
