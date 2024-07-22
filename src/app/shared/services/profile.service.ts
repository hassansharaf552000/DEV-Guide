import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private profile1:Profile) {
  
 }
 getprofile():Observable<Profile>{
  return of(this.profile1)
 }
 updateProfile(profile2:Profile):Observable<Profile>{
 this.profile1=profile2;
 return of(this.profile1)

 }

}
