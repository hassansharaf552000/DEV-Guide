import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  SetScheduleURL="http://localhost:5164/api/Schedule/CheckAndHandleSchedule"
  GetSchedulesWithPriceURL="http://localhost:5164/api/Schedule/GetSchedulesWithPrice"
  //CheckAndHandleScheduleURL="http://localhost:5164/api/Schedule/CheckAndHandleSchedule"


  constructor(private http: HttpClient) { }

  SetSchedule(Schedule:any) {
    return this.http.post(this.SetScheduleURL,Schedule)
  }
  GetSchedulesWithPrice(){
    return this.http.get(this.GetSchedulesWithPriceURL)
  }
  
  // SetSchedule(Price:any)  {
  //   return this.http.post(this.SetScheduleURL,Price)
  // }

}
