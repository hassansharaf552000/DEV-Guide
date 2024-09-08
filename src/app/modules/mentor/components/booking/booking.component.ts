import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  activeTab: string = 'upcoming';

  completedBookings = [
    {
      title: 'France to New York',
      id: 'CGDSUAH12548',
      type: 'Business class',
      timeDetails:
        'Departure: Tue 05 Aug 12:00 AM • Arrival: Tue 06 Aug 4:00 PM',
      bookedBy: 'Frances Guerrero',
    },
    {
      title: 'Chicago to San Antonio',
      id: 'CGDSUAH12548',
      type: 'Camry, Accord',
      timeDetails: 'Pickup: 40764 Winchester Rd • Drop: 11185 Mary Ball Rd',
      bookedBy: 'Frances Guerrero',
    },
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
