import { ChangeDetectorRef, Component } from '@angular/core';
import { BookingStatus } from '../../../../shared/types/SessionListViewModel';
import { SessionService } from '../../../../shared/services/Session/session.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
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
  }
  loadSessions() {
    this.SessionServ.getallSessionForDeveloper().subscribe(
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

