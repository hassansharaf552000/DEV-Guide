import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  ReviewListUrl = "http://localhost:5164/api/Account/GetReviewByClaim"; 
   
 getuserUrl = "http://localhost:5164/api/Account/GetOneUserByClaim"; 
 
    constructor(private http: HttpClient) {}
  
    getReviewsByClaim(): Observable<any> {
      return this.http.get(this.ReviewListUrl);
    }
    getuser(): Observable<any> {
      return this.http.get(this.getuserUrl);
    
  }}