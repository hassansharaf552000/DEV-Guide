import { ChangeDetectorRef, Component } from '@angular/core';
import { SessionService } from '../../../../shared/services/Session/session.service';
import { BookingStatus } from '../../../../shared/types/SessionListViewModel';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  Status:BookingStatus;
  activeTab: string = 'upcoming';
  sessions:any;
  completedBookings:any[]=[];
  pendingBookings:any[]=[];
  canceledBookings:any[]=[];

  constructor(private SessionServ: SessionService,
    private cdr: ChangeDetectorRef
  ) {
    this.loadSessions()
    // this.SessionServ.GetAllSession(BookingStatus.Completed).subscribe({
    //   next: (response:any[]) => {
    //     this.completedBookings=response
    //     console.log('Completed Sessions :', response);
    //   },
    //   error: (error) => {
    //     console.error('Error setting schedule:', error);
    //   }
    // });
    // this.SessionServ.GetAllSession(2).subscribe({
    //   next: (response:any[]) => {
    //     this.pendingBookings=response
    //     console.log('Pending Sessions :', response);
    //   },
    //   error: (error) => {
    //     console.error('Error setting schedule:', error);
    //   }
    // });
    // this.SessionServ.GetAllSession(3).subscribe({
    //   next: (response:any[]) => {
    //     this.canceledBookings=response
    //     console.log('Canceled Sessions :', response);
    //   },
    //   error: (error) => {
    //     console.error('Error setting schedule:', error);
    //   }
    // });
   }
  // completedBookings = [
  //   {
  //     title: 'France to New York',
  //     id: 'CGDSUAH12548',
  //     type: 'Business class',
  //     timeDetails:
  //       'Departure: Tue 05 Aug 12:00 AM • Arrival: Tue 06 Aug 4:00 PM',
  //     bookedBy: 'Frances Guerrero',
  //   },
  //   {
  //     title: 'Chicago to San Antonio',
  //     id: 'CGDSUAH12548',
  //     type: 'Camry, Accord',
  //     timeDetails: 'Pickup: 40764 Winchester Rd • Drop: 11185 Mary Ball Rd',
  //     bookedBy: 'Frances Guerrero',
  //   },
  // ];
  // loadSessions(status?: number) {
  //   this.SessionServ.getSessionsForUser(status).subscribe(
  //     (data) => {
  //       console.log("Sessions data:", data);  // Log the data
  //       this.completedBookings = data;                // Assign the data to sessions
  //     },
  //     (error) => {
  //       console.error('Error fetching sessions:', error);  // Log any errors
  //     }
  //   );
  // }
  loadSessions() {
    this.SessionServ.getallSessionForMentor().subscribe(
      (data) => { 
        this.sessions=data
        this.sessions.forEach(element => {
          if(element.Status==1){
            this.completedBookings.push(element)
          } else if(element.Status==2){
            this.pendingBookings.push(element)
          }else if(element.Status==3){
            this.canceledBookings.push(element)
          }
        });
        console.log("complete data:", this.completedBookings);
        console.log("pending data:", this.pendingBookings); 
        console.log("canceled data:", this.canceledBookings); 
        this.cdr.detectChanges();
        //if(d.Status==) // Log the data
        //this.completedBookings = data;                // Assign the data to sessions
      },
      (error) => {
        console.error('Error fetching sessions:', error);  // Log any errors
      }
    );
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  convertToCustomFormat(isoString: string): string {
    // Append 'Z' to treat it as UTC if no timezone info is provided
    const date = new Date(isoString + 'Z'); // This treats the input as UTC

    // Get day of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];

    // Get day, month, and year
    const day = this.pad(date.getUTCDate());
    const month = this.getMonthAbbreviation(date.getUTCMonth());
    
    // Get hours and minutes, and determine AM/PM
    let hours = date.getUTCHours();
    const minutes = this.pad(date.getUTCMinutes());
    const meridian = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    return `${dayOfWeek} ${day} ${month} ${hours}:${minutes} ${meridian}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  private getMonthAbbreviation(monthIndex: number): string {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[monthIndex];
  }
}