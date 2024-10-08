import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { ChangePassword } from '../change-password';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiurl="http://localhost:5164/api/Account/update-profile";
  private apiurl1="http://localhost:5164/api/Account/change-password";
  //constructor(private http:HttpClient){}
  private profile: Profile = {
    id: '',                     // Optional string
    name: '',                   // Required string
    cv: '',                     // Optional string
    country: '',                // Optional string
    degree: '',                 // Optional string
    fieldOfStudy: '',           // Optional string
    university: '',             // Optional string
    countryOfStudy: '',         // Optional string
    startDate: undefined,       // Optional Date object
    endDate: undefined,         // Optional Date object
    yearsOfExperience: undefined, // Optional number
    level: '',                  // Optional string
    image: '',                  // Optional string
    price: undefined,           // Optional number
  };
  private changepassword:ChangePassword={
    CurrentPassword:'',
    Newpassword:'',
    ComformPassword:''
  }
  

  constructor(private http:HttpClient) {}

 
 

  UpdateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return this.http.put<Profile>(`${this.apiurl}`, profile);
  }
  ChangePassword(changepassword:ChangePassword):Observable<ChangePassword>{
    return this.http.put<ChangePassword>(`${this.apiurl1}`,changepassword);
  }
}
