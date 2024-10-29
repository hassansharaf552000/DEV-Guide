import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/Payment.service';
import { PaypalService } from '../../services/paypal/paypal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  amount: number;

  constructor(private paypalService: PaypalService) {}

  ngOnInit() {
    this.createPayment();
}
  createPayment() {
    const paymentData: any = {
      Amount: this.amount // Using type 'any'
      
    };

    this.paypalService.createPayPalPayment(paymentData).subscribe(
      response => {
        console.log('Payment created successfully', response);
        // Redirect user to PayPal for approval using response.result
        window.location.href = response.result;
      },
      error => {
        console.error('Error creating payment', error);
      }
    );
  }
}