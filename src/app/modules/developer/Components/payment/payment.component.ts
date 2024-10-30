import { Component, OnInit } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { NgForm } from '@angular/forms';
import { Payment1Service } from './payment1.service';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { PaypalService } from '../../../../shared/services/paypal/paypal.service';
import { AccountService } from '../../../../shared/services/Account/account.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  paymentMethod: string = 'creditCard';
   SessionID = ""
  // constructor(private paymentService: Payment1Service) {}
  change(paymant:string){

    this.paymentMethod = paymant;

 }
  constructor(private route: ActivatedRoute,private PaymentServ:PaypalService, private AccService: AccountService) {
   
    this.SessionID = this.route.snapshot.paramMap.get('id');
    if (this.SessionID) {
      console.log(' sessionID provided in the route',this.SessionID);

    }}

  // onSubmit(paymentForm: NgForm) {
  //   if (paymentForm.valid) {
  //     const paymentDetails = {
  //       cardName: paymentForm.value.cardName,
  //       cardNumber: paymentForm.value.cardNumber,
  //       expiryDate: paymentForm.value.expiryDate,
  //       cvv: paymentForm.value.cvv,
  //       billingAddress: paymentForm.value.billingAddress
  //     };

  //     this.paymentService.processPayment(paymentDetails).subscribe(
  //       response => {
  //         console.log('Payment successful:', response);
  //         paymentForm.reset();  // Reset form after successful payment
  //       },
  //       error => {
  //         console.error('Payment failed:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Form is invalid')
  //   }
  // }

}


