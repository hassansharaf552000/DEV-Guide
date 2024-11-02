import { ChangeDetectorRef, Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SessionService } from '../../../../shared/services/Session/session.service';
import { BookingStatus } from '../../../../shared/types/SessionListViewModel';
import { PaypalService } from '../../../../shared/services/paypal/paypal.service';

@Component({
  selector: 'app-mentor-payments',
  templateUrl: './mentor-payments.component.html',
  styleUrl: './mentor-payments.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(1000, style({ opacity: 1 }))]),
    ]),
  ],
})
export class MentorPaymentsComponent {
  paymentTotals: any;
  // Status:BookingStatus;
  // activeTab: string = 'upcoming';
  sessions:any;
  // completedBookings:any[]=[];
  // pendingBookings:any[]=[];
  // canceledBookings:any[]=[];

  //   salesThisMonth = 12825;
  // toBePaid = 15356;
  // expectedPayoutDate = new Date(2022, 9, 5); // 05/10/2022
  // totalBalance = 32000;
  // cardLastFour = '1569';
  // cardValidThru = '12/26';

  // currentMonthEarnings = 35000;
  // currentMonthChange = 0.2;
  // lastMonthEarnings = 28000;
  // lastMonthChange = 0.1;

  // invoiceHistory = [
  //   {
  //     id: '#254684',
  //     date: new Date(2022, 7, 29),
  //     amount: 3999,
  //     status: 'Paid',
  //   },
  //   {
  //     id: '#158468',
  //     date: new Date(2022, 8, 2),
  //     amount: 3000,
  //     status: 'Pending',
  //   },
  //   { id: '#245778', date: new Date(2022, 8, 5), amount: 4258, status: 'Paid' },
  //   {
  //     id: '#245778',
  //     date: new Date(2022, 8, 7),
  //     amount: 1225,
  //     status: 'Cancelled',
  //   },
  //   {
  //     id: '#254896',
  //     date: new Date(2022, 8, 10),
  //     amount: 2588,
  //     status: 'Paid',
  //   },
  // ];

  // getStatusClass(status: string) {
  //   switch (status) {
  //     case 'Paid':
  //       return 'text-success';
  //     case 'Pending':
  //       return 'text-warning';
  //     case 'Cancelled':
  //       return 'text-danger';
  //     default:
  //       return '';
  //   }
  // }


  constructor(private SessionServ: SessionService,
   private paymentser: PaypalService
  ) {
    // this.loadSessions()
  
   }
   ngOnInit(): void {
    this.getSessionsForMentor();

    this.paymentser.getPaymentTotals().subscribe({
      next: (data) => {
        this.paymentTotals = data;
        console.log("paymentTotals:", this.paymentTotals);  // Moved inside the next block
      },
      error: (err) => {
        console.error('Error fetching payment totals:', err);
      }
    });
  }
  
  getSessionsForMentor(): void {
    this.SessionServ.getallSessionForMentor().subscribe({
      next: (data) => {
        this.sessions = data; // Assign the fetched data to 'sessions'
        console.log("session data:", this.sessions);
      },
      error: (err) => {
        console.error('Error fetching sessions:', err);
      }
    });
  }
}
//   loadSessions() {
//     this.SessionServ.getallSessionForMentor().subscribe(
//       (data) => { 
//         this.sessions=data
//         console.log("session data:", this.completedBookings);
//         // this.sessions.forEach(element => {
        
//       //       this.completedBookings.push(element)
//       //     } else if(element.Status==2){
//       //       this.pendingBookings.push(element)
//       //     }else if(element.Status==3){
//       //       this.canceledBookings.push(element)
//       //     }
//       //   }
//       //  );
//         // console.log("complete data:", this.completedBookings);
//         // console.log("pending data:", this.pendingBookings); 
//         // console.log("canceled data:", this.canceledBookings); 
//         this.cdr.detectChanges();
//         //if(d.Status==) // Log the data
//         //this.completedBookings = data;                // Assign the data to sessions
//       },
//       (error) => {
//         console.error('Error fetching sessions:', error);  // Log any errors
//       }
//     );
//   }
// }