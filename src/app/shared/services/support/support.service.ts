import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  private apiUrl ="http://localhost:5164/api/Support/SubmitSupport"; // replace with your actual API URL
  getContactInfoUrl="http://localhost:5164/api/Support/GetContactInfo"
  constructor(private http: HttpClient) {}

  submitSupport(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getContactInfo(): Observable<any[]> { // Using any[] instead of interface
    return this.http.get<any[]>(this.getContactInfoUrl);
  }
}
