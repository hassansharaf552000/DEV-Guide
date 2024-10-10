import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangePassword } from '../../change-password';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5164/api/Account/change-password'; // Your API base URL

  constructor(private http: HttpClient) { }


 

  // Change password method
  ChangePasswordgit(changePassword: ChangePassword): Observable<ChangePassword> {
    return this.http.put<ChangePassword>(`${this.apiUrl}/change-password`, changePassword);
  }


  }


  

