import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  SetScheduleURL="http://localhost:5164/api/Schedule/CheckAndHandleSchedule"
  GetUserPriceURL="http://localhost:5164/api/Schedule/GetUserPrice"
  UpdateUserPriceURL="http://localhost:5164/api/Schedule/UpdateUserPrice"


  constructor(private http: HttpClient) { }

  SetSchedule(Schedule:any) {
    return this.http.post(this.SetScheduleURL,Schedule)
  }
  GetUserPrice(){
    return this.http.get(this.GetUserPriceURL)
  }
  
  UpdateUserPrice(Price:any)  {
    return this.http.post(this.UpdateUserPriceURL,Price)
  }

}
