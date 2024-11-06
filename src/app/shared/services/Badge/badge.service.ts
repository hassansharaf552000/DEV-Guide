import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
   GetMyBadgeURL = "http://localhost:5164/api/Badge/my-badges"
   GetUserBadgeURL="http://localhost:5164/api/Badge/user-distinct-badges"
  constructor(private http: HttpClient,private authService:AuthService) {

   }
   GetMyBadge() {
    return this.http.get<any>(this.GetMyBadgeURL);
  }
  GetUserBadge(id: string): Observable<any> {
    return this.http.get<any>(`${this.GetUserBadgeURL}/${id}`);
  }
}
