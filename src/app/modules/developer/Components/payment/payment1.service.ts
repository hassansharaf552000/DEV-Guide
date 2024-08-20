import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
// https://your-backend-api.com/payment
export class Payment1Service {

  private paymentApiUrl = '#';

  constructor(private http: HttpClient) {}

  processPayment(paymentDetails: any): Observable<any> {
    return this.http.post(this.paymentApiUrl, paymentDetails);
  }

}
