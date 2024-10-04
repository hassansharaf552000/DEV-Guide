import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hr-payments',
  templateUrl: './hr-payments.component.html',
  styleUrl: './hr-payments.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(1000, style({ opacity: 1 }))]),
    ]),
  ],
})
export class HrPaymentsComponent {
  salesThisMonth = 12825;
  toBePaid = 15356;
  expectedPayoutDate = new Date(2022, 9, 5); // 05/10/2022
  totalBalance = 32000;
  cardLastFour = '1569';
  cardValidThru = '12/26';

  currentMonthEarnings = 35000;
  currentMonthChange = 0.2;
  lastMonthEarnings = 28000;
  lastMonthChange = 0.1;

  invoiceHistory = [
    {
      id: '#254684',
      date: new Date(2022, 7, 29),
      amount: 3999,
      status: 'Paid',
    },
    {
      id: '#158468',
      date: new Date(2022, 8, 2),
      amount: 3000,
      status: 'Pending',
    },
    { id: '#245778', date: new Date(2022, 8, 5), amount: 4258, status: 'Paid' },
    {
      id: '#245778',
      date: new Date(2022, 8, 7),
      amount: 1225,
      status: 'Cancelled',
    },
    {
      id: '#254896',
      date: new Date(2022, 8, 10),
      amount: 2588,
      status: 'Paid',
    },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Paid':
        return 'text-success';
      case 'Pending':
        return 'text-warning';
      case 'Cancelled':
        return 'text-danger';
      default:
        return '';
    }
  }
}
