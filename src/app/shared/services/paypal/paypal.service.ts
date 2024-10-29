import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  baseUrl = "http://localhost:5164/api/Payment/create-paypal-payment"// Update with your API base URL

  constructor(private http: HttpClient) {}

  // createPayPalPayment(paymentData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/create-paypal-payment`, paymentData);
  // }
  createPayPalPayment(paymentData: any): Observable<any> {
    return this.http.post(this.baseUrl, paymentData);
  }
}