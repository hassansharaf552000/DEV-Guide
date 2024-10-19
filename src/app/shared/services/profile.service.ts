// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Profile } from '../profile';
// import { HttpClient } from '@angular/common/http';
// import { ChangePassword } from '../change-password';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProfileService {
//   private updateprofile="http://localhost:5164/api/Account/update-profile";
//   private getprofile="http://localhost:5164/api/Account/get-profile"
//   //private apiurl1="http://localhost:5164/api/Account/change-password";
//   //constructor(private http:HttpClient){}
//   // private profile: Profile = {
//   //   imagePath: '',      // Path to the user's image
//   //   firstName: '',
//   //   lastName: '',
//   //   title: '',
//   //   cvPath: '',         // Path to the user's CV
//   //   level: 'string',
//   //   country: 'string',
//   //   phoneNumber: 'string',
//   //   yearsOfExperience: 0,
//   //   About:'string'     // Optional number
//   // };
//   private changepassword:ChangePassword={
//     CurrentPassword:'',
//     Newpassword:'',
//     ConfirmPassword:''
//   }



//   constructor(private http:HttpClient) {}

//   getProfile(): Observable<Profile> {
//     return this.http.get<Profile>(this.getprofile);
//   }







//   UpdateProfile(profile: Profile): Observable<Profile> {
//     return this.http.put<Profile>(this.updateprofile, profile);
//   }

//   // ChangePassword(changepassword:ChangePassword):Observable<ChangePassword>{
//   //   return this.http.put<ChangePassword>(`${this.apiurl1}`,changepassword);
//   // }
// }


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/Auth/auth.service'; // Import AuthService

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private updateprofile = "http://localhost:5164/api/Account/update-profile";
  private getprofile = "http://localhost:5164/api/Account/get-profile";

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Method to get the Authorization header with the token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // You can adjust the content type based on your API needs
      });
    } else {
      return new HttpHeaders(); // Return empty headers if no token
    }
  }

  // Get Profile with Authorization
  getProfile(): Observable<Profile> {
    const headers = this.getAuthHeaders();
    return this.http.get<Profile>(this.getprofile, { headers });
  }

  // Update Profile with Authorization
  UpdateProfile(profileData: FormData): Observable<Profile> {
    const headers = this.getAuthHeaders();
    return this.http.put<Profile>(this.updateprofile, profileData, {
      headers: headers.delete('Content-Type') // Let the browser set multipart/form-data headers
    });
  }
}
