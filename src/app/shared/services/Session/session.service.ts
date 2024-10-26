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

  constructor(private http: HttpClient) { }


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
getall() {
 
  return this.http.get(this.GetAllSessionForOneUser);
}

}
