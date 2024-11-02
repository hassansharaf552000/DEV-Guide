import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  ReviewListUrl = "http://localhost:5164/api/Account/GetReviewByClaim"; 
   
 getuserUrl = "http://localhost:5164/api/Account/GetOneUserByClaim"; 
 getuserFeedback = "http://localhost:5164/api/Session/GetAllSessionsForUser"; 
 getReviewsUrl="http://localhost:5164/api/Review/GetREVIEWS"
 
    constructor(private http: HttpClient) {}
  
    getReviewsByClaim(): Observable<any> {
      return this.http.get(this.ReviewListUrl);
    }
    getuser(): Observable<any> {
      return this.http.get(this.getuserUrl);
    
  }
  getAllSessionsForUser(): Observable<any> { // Returning 'any' type here
    return this.http.get<any>(this.getuserFeedback);
  }
  getReviews(): Observable<any[]> { // Use 'any[]' here as well
    return this.http.get<any[]>(this.getReviewsUrl);
  }
}