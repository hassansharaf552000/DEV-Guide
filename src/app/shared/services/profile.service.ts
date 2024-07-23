import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: Profile = {
    UserName: '',
    Email: '',
    Password: '',
    PHoneNumber: '',
    PersonalDetails: '',
    Skills: '',
    Experience: '',
    Portfolio: '',
    AssignedTasks: '',
    Rating: '',
  };

  constructor() {}

  getProfile(): Observable<Profile> {
    return of(this.profile);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(this.profile);
  }
}
