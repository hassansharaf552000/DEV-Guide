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
    imagePath: '',      // Path to the user's image
    firstName: '',
    lastName: '',
    title: '',
    price: 0,
    cvPath: '',         // Path to the user's CV
    level: 'string',
    country: 'string',
    phoneNumber: 'string',
    yearsOfExperience: 0,      // Optional number
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
