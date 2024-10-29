import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingStatus, SessionListViewModel } from '../../types/SessionListViewModel';

@Injectable({
  providedIn: 'root'
})


export class SessionService {

  // GetAllSessionForOneUser="http://localhost:5164/api/Session/GetAllSessionForOneUser"
  GetAllSessionForOneUser="http://localhost:5164/api/Session/GetAllSessionForOneUser"

  GetSessionDetailsURL="http://localhost:5164/api/Session/GetSessionById"
  UpdateFeedbackURL="http://localhost:5164/api/Session/UpdateFeedback"
  UpdateFeedbackForCanceledURL="http://localhost:5164/api/Session/UpdateFeedbackForCanceled"

  UpdateMeetingLinkURL="http://localhost:5164/api/Session/UpdateMeetingLink"

  GetAllSessionForDeveloper="http://localhost:5164/api/Session/GetAllSessionForOneDeveloper"

  AddReviewURR= "http://localhost:5164/api/Review//AddReview"

  constructor(private http: HttpClient) { }

  // addreview(review:any ,id: number): Observable<any> {
  //   return this.http.post<any>(`${this.AddReviewURR}/${id}`, review);
  // }

  UpdateFeedbackForCanceled(sessionId: string, feedback: string): Observable<any> {
    const body = { Feedback: feedback }; // Wrap the feedback in an object
  
    return this.http.put<any>(`${this.UpdateFeedbackForCanceledURL}/${sessionId}`, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // Ensure the content type is JSON
    });
  }
  
  addreview( reviewData: any,sessionId: number) {
    const url = `http://localhost:5164/api/Review/AddReview/${sessionId}`;
    return this.http.post(url, reviewData);
  }


 
  GetAllSession(Status:any):any{
    return this.http.get(this.GetAllSessionForOneUser,Status)
  }
  getSessionsForUser(status?: number): Observable<SessionListViewModel[]> {
    

    return this.http.get<SessionListViewModel[]>(`${this.GetAllSessionForOneUser}/GetAllSessionForOneUser`, {
    });
  }

//   getall(Status:BookingStatus) {
//     const params: any = {};
//     if (Status) params.Status = Status;

//     return this.http.get(this.GetAllSessionForOneUser, { params });
// }
// addreview(review: any ,sessionId:any): Observable<any> {
  
//   return this.http.post<any>(this.AddReviewURR, review , sessionId);
// }


getSessionById(id: string): Observable<any> {
  return this.http.get<any>(`${this.GetSessionDetailsURL}/${id}`);
}
// updateFeedback(sessionId: string, feedback: string): Observable<any> {
//   return this.http.put<any>(`${this.UpdateFeedbackURL}/${sessionId}`, {feedback});
// }
updateFeedback(sessionId: string, feedback: string): Observable<any> {
  const body = { Feedback: feedback }; // Wrap the feedback in an object

  return this.http.put<any>(`${this.UpdateFeedbackURL}/${sessionId}`, body, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // Ensure the content type is JSON
  });
}




UpdateMeeting(sessionId: string,feedback: string): Observable<any> {
  const body = { Feedback: feedback }; // Wrap the feedback in an object

  return this.http.put<any>(`${this.UpdateMeetingLinkURL}/${sessionId}`, body, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) // Ensure the content type is JSON
  });
}



getallSessionForMentor() {

  return this.http.get(this.GetAllSessionForOneUser);
}
getallSessionForDeveloper() {
  return this.http.get(this.GetAllSessionForDeveloper);
}

}
