import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
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

  constructor() {}

  getProfile(): Observable<Profile> {
    return of(this.profile);
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(this.profile);
  }
}
