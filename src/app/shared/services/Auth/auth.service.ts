import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private RegisterURL = 'http://localhost:5164/api/Account/Register';

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(this.RegisterURL, user);
  }
}