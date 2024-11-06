// import { ChangePassword } from '../../change-password';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { CookieService } from 'ngx-cookie-service';
// import { BehaviorSubject, Observable, throwError } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = 'http://localhost:5164/api/Account/change-password'; // Your API base URL
//   private loginapi = 'http://localhost:5164/api/Account/Login';
//   private RegisterURL = 'http://localhost:5164/api/Account/Register';
//   isloggedUserSubject: BehaviorSubject<boolean>
//   private tokenKey = 'authToken'; // Name of the cookie

//   constructor(private http: HttpClient,private CookieServ:CookieService) {
//     this.isloggedUserSubject = new BehaviorSubject<boolean>(this.getToken()==null?false:true)
//   }

//   // Change password method
//   ChangePasswordgit(changePassword: ChangePassword): Observable<ChangePassword> {
//     return this.http.put<ChangePassword>(`${this.apiUrl}/change-password`, changePassword);
//   }

//   login(obj: any) {
//     return this.http.post(this.loginapi, obj)
//   }


//   register(user: any) {
//     return this.http.post(this.RegisterURL, user);
//   }







//   userlogin(token: string) {
//     if(token=="")
//     this.isloggedUserSubject.next(false)

//     this.setToken(token)
//     this.isloggedUserSubject.next(true)
//   }
//   userlogout() {
//     this.removeToken()
//     this.isloggedUserSubject.next(false)
//   }
//   // Set token in cookies
//   setToken(token: string): void {
//     console.log('Setting Token in Cookies:', token);  // Add this to verify the token
//     this.CookieServ.set(this.tokenKey, token);
//   }

//   // Get token from cookies
//   getToken(): string | null {
//     const token = this.CookieServ.get(this.tokenKey);
//     console.log('Retrieved Token from Cookies:', token);  // Add this to verify token retrieval
//     return token;
//   }


//   // Remove token by setting its expiry date to the past
//   removeToken(): void {
//     this.CookieServ.delete(this.tokenKey)
//   }

// }

import { ChangePassword } from '../../change-password';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { Profile } from '../../profile';
import { ProfileService } from '../profile.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5164/api/Account/change-password'; // Your API base URL
  private loginapi = 'http://localhost:5164/api/Account/Login';
  private RegisterURL = 'http://localhost:5164/api/Account/Register';
  private updateprofile = "http://localhost:5164/api/Account/update-profile";
  private getprofile = "http://localhost:5164/api/Account/get-profile";
  isloggedUserSubject: BehaviorSubject<boolean>;
  userProfileSubject: BehaviorSubject<Profile | null>; // Profile BehaviorSubject
  //private userProfile$: Observable<Profile | null>;
  private tokenKey = 'authToken'; // Name of the cookie
  private roleKey = 'userRole';   // Key for storing user role

  constructor(private http: HttpClient, private CookieServ: CookieService, private profileservice: ProfileService, private injector: Injector) {
    this.isloggedUserSubject = new BehaviorSubject<boolean>(this.checkToken());
    this.userProfileSubject = new BehaviorSubject<Profile | null>(null);
  }

  // Method to get the Authorization header with the token
  private getAuthHeaders(): HttpHeaders {
    //const authService = this.injector.get(AuthService); // Lazy load AuthService
    const token = this.getToken();
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

  // Change password method
  ChangePasswordgit(changePassword: ChangePassword): Observable<ChangePassword> {
    return this.http.put<ChangePassword>(`${this.apiUrl}`, changePassword);
  }

  login(obj: any) {
    return this.http.post(this.loginapi, obj)
  }


  register(user: any) {
    return this.http.post(this.RegisterURL, user);
  }

  private loadUserProfile(): void {
    this.getProfile().pipe(
      catchError((error) => {
        console.error('Error loading profile:', error);
        return of(null); // Return a null profile on error
      })
    ).subscribe(profile => {
      this.userProfileSubject.next(profile);
    });
  }








  // userlogin(token: string) {
  //   if (token == "") {
  //     this.isloggedUserSubject.next(false)
  //   }
  //   else {
  //     this.setToken(token);
  //     this.isloggedUserSubject.next(true);

  //     // Load user profile after successful login
  //     this.loadUserProfile();
  //   }
  // }

  setRole(role: string): void {
    this.CookieServ.set('userRole', role);
}
  userlogin(token: string, role: string) {
    if (token === "") {
        this.isloggedUserSubject.next(false);
    } else {
        // Store both token and role
        this.setToken(token);
        this.setRole(role); // New method to save the role

        this.isloggedUserSubject.next(true);

        // Load user profile after successful login
        this.loadUserProfile();
    }
}
  userlogout() {
    this.removeToken()
    this.isloggedUserSubject.next(false);
    //this.userProfileSubject.next(null); // Clear the profile on logout
  }
  // Set token in cookies
  setToken(token: string): void {
    this.CookieServ.set(this.tokenKey, token)

  }


  // Get token from cookies
  getToken(): string | null {
    return this.CookieServ.get(this.tokenKey)
  }

  // Remove token by setting its expiry date to the past
  removeToken(): void {
    this.CookieServ.delete(this.tokenKey)
    this.CookieServ.delete(this.roleKey);
    this.isloggedUserSubject.next(false);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp < Date.now() / 1000;
      return !isExpired;
    } catch (error) {
      console.error('Token decoding failed:', error);
      return false;
    }
  }


  private checkToken(): boolean {
    return this.CookieServ.check(this.tokenKey)
  }



  getRoleFromToken(token: string): string | null {
    token = this.getToken();
    if (token) {
      try {
        // Extract the payload from the token (middle part)
        const payloadBase64 = token.split('.')[1];
        const payloadJson = atob(payloadBase64); // Decode Base64
        const payload = JSON.parse(payloadJson);

        // Assuming the role is stored in the payload as `role`
        const role = payload?.Roles[0];
        if (role) {
          this.CookieServ.set(this.roleKey, role); // Store role in cookies
          return role;
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
    return null;
  }

  isValidToken(): boolean {
    const token = this.CookieServ.get(this.tokenKey);
    return !!token && !this.isTokenExpired(token); // Add further validation as needed
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      return decodedPayload.exp < Date.now() / 1000;
    } catch {
      return true;
    }
  }


  // Get the stored role directly from cookies
  getStoredRole(): string | null {
    return this.CookieServ.get(this.roleKey);
  }

  saveAuthData(token: string): void {
    this.CookieServ.set(this.tokenKey, token);

    const role = this.getRoleFromToken(token);
    if (role) {
      this.CookieServ.set(this.roleKey, role);  // Store role for easy access
    }
  }





}
