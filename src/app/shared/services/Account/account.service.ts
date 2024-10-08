import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   formData: BehaviorSubject<FormData>;
 urlCompleteProfile = "http://localhost:5164/api/Account/CompleteProfile"
  constructor(private http:HttpClient) { 
    this.formData = new BehaviorSubject<FormData>(new FormData()); 
  }

  updateFormData(key: string, data: any) {
    let oldData:FormData = this.formData.value
    oldData.append(key,data)
    this.formData.next(oldData); // Update the BehaviorSubject
  }

  // Retrieve the complete form data
  getFormData() {
    return this.formData.value;
  }

  CompleteProfile(data:any){
    return this.http.put(this.urlCompleteProfile, data)
  }
}
