import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExperienceViewModel } from '../../../modules/developer/interfaces/UserExperance';
import { EducationViewModel } from '../../../modules/developer/interfaces/UserEducation';
import { Profile } from '../../profile';
import { skillItem } from '../../../modules/developer/interfaces/Profile';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  formData: BehaviorSubject<FormData>;
  CompleteProfileURL = "http://localhost:5164/api/Account/CompleteProfile"
   ExpertsListURL="http://localhost:5164/api/Account/Filter"
 //ExpertsListURL="http://localhost:5164/api/Account/GetAll"
  Experiences:ExperienceViewModel[]=[]
  Educations:EducationViewModel[]=[]
  skills:skillItem[]=[]
  AddExperienceURL = "http://localhost:5164/api/Account/AddExperience"
  AddEducationURL = "http://localhost:5164/api/Account/AddEducation"
  GetProfileURL="http://localhost:5164/api/Account/GetOneUser"
  GetReviewsURL="http://localhost:5164/api/Account/GetReview"
  constructor(private http: HttpClient) {
    this.formData = new BehaviorSubject<FormData>(new FormData());
  }

  updateFormData(key: string, data: any) {
    let oldData: FormData = this.formData.value
    oldData.append(key, data)
    this.formData.next(oldData); // Update the BehaviorSubject
  }
  
  // Retrieve the complete form data
  getFormData() {
    return this.formData.value;
  }
  

  CompleteProfile() {
    return this.http.put(this.CompleteProfileURL, this.formData.value)
  }

  // ExpertsList(Data:any) {
  //   return this.http.get(this.ExpertsListURL,Data)
  // }
  // getFilteredMentors(name: string, role: string, department: string, minprice: number, maxprice: number, rate: number | null): Observable<any> {
  //   const params = { name, role, title: department, minprice, maxprice, rate };
  //   return this.http.get<any>(this.ExpertsListURL, { params });
  // }
  // getall(name: string = '', role: string = '', title: string = '', minprice: number = 0, maxprice: number = 0, rate: number | null = null, page:number = 1, pageSize:number ): Observable<any> {
  //   const params: any = {};
  
  //   if (name) params.name = name;
  //   if (role) params.role = role;
  //   if (title) params.title = title;
  //   if (minprice) params.minprice = minprice;
  //   if (maxprice) params.maxprice = maxprice;
  //   if (rate !== null) params.rate = rate;
  //   if (pageSize) params.pageSize = pageSize;
  //   if(page) params.page=page;
  
  //   return this.http.get<any>(this.ExpertsListURL, { params });
  // }
  getall(name: string = '', role: string = '', title: string = '', minprice: number = 0, maxprice: number = 0, rate: number | null = null, page: number = 1, pageSize: number, skills: string[] = [], mentorId: string = ''): Observable<any> {
    const params: any = {};

    if (name) params.name = name;
    if (role) params.role = role;
    if (title) params.title = title;
    if (minprice) params.minprice = minprice;
    if (maxprice) params.maxprice = maxprice;
    if (rate !== null) params.rate = rate;
    if (pageSize) params.pageSize = pageSize;
    if (page) params.page = page;
    if (skills && skills.length > 0) params.skills = skills.join(',');
    if (mentorId) params.excludeMentorId = mentorId;  // Add mentorId to params to exclude it

    return this.http.get<any>(this.ExpertsListURL, { params });
}


  
  // getall(){
  //   return this.http.get(this.ExpertsListURL)
  // }

  getMentorById(id: string): Observable<any> {
    return this.http.get<any>(`${this.ExpertsListURL}/${id}`);
  }

  AddExperience(formData:any) {
    return this.http.put(this.AddExperienceURL, formData)
  }
  AddEducation(formData:any) {
    return this.http.put(this.AddEducationURL, formData)
  }

  getProfile(id: string): Observable<any> {
    return this.http.get<any>(`${this.GetProfileURL}/${id}`);
  }

  // Fetch reviews by user ID
  getReviews(id: string): Observable<any> {
    return this.http.get<any>(`${this.GetReviewsURL}/${id}`);
  }

}
