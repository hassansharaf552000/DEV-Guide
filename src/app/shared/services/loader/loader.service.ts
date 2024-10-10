import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
isLoading:BehaviorSubject<boolean>
constructor() {
  this.isLoading = new BehaviorSubject<boolean>(false);
 }
 showLoader(): void {
  this.isLoading.next(true);
 }
 hideLoader(): void {
  this.isLoading.next(false);
 }

}
