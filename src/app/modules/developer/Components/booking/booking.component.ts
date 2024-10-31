import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Time } from '../../../../shared/types/time';
import { MatCalendar } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { ScheduleService } from '../../../../shared/services/Schedule/schedule.service';
import { IMentor } from '../../../../core/enums/Mentor';
import { PaypalService } from '../../../../shared/services/paypal/paypal.service';
import { SessionService } from '../../../../shared/services/Session/session.service';
import { ToastrService } from 'ngx-toastr';


interface Schedule {
  Date: string;
  Day:number;
  StartTime: string;
  EndTime: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {

  @Input() mentorProfile!: IMentor
  list: Array<Time>;
  sesssionid!:string;
  GetProfileURL = "http://localhost:5164/api/Account/GetOneUser"
  MentorID = ""
  
  schedules:Array<any>;
  SessionData:any;
  NewSession:any;
  dataaa:any;
  Description:any;
  Topic:any;  
  canceled:boolean=false;
pay:boolean=false;
continue:boolean=true;
  today: Date = new Date();
  amount: number = 0;
  sessionId: string = '';
  // payment: any = {
  //   Amount: 0,
  //   Session_Id: '', // Initialize Session_Id
  // };
  availableDates: Set<string> = new Set();
  selectedTimes: any[] = [];
  href:string;
  // @Input() schedules: Schedule[]; 
  // today: Date = new Date();
  selectedMonth: number;
  selectedYear: number;
  monthDays: { date: Date | null; dayOfWeek: number }[] = [];
  daysOfWeek: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // availableDates: Set<string> = new Set();
  // selectedTimes: Schedule[] = [];
  selectedTime: string | null = null;

  message: string = '';
  selectedDate: Date | null = null;
  selectedDateTime: string | null = null; // Variable to store the selected date and time

  timeButtonsPerPage = 6; // Number of time buttons to show per page
  currentTimePage = 0;   
  // title: string = '';
  titleError: string | null = null; 
  @Input() title: string = '';
  // titleError: string = '';
  selectTime(time: string): void {
    this.selectedTime = time;
  }

  isSelected(time: string): boolean {
    return this.selectedTime === time;
  }
  constructor(private route: ActivatedRoute,private paymentService:PaypalService,
     private AccService: AccountService, private ScheduleService: ScheduleService
    ,private SeessionService: SessionService
  ,private toaster:ToastrService) {
    this.list = [];
    this.MentorID = this.route.snapshot.paramMap.get('id');
    if (this.MentorID) {
      console.log(' mentor ID provided in the route');

    }
    this.selectedMonth = this.today.getMonth();
    this.selectedYear = this.today.getFullYear();
    // this.selectedDate = new Date(); // Set default selected date to today
    this.selectedDate = new Date(); // Set default selected date to today
    
    // Reset this.today to just the date part
    this.today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
  //  this.onDaySelect(this.today)
   this.ScheduleService.getUnbookedschedules(this.MentorID).subscribe((data) => {
    this.schedules = data.schedules;
    this.onDaySelect(this.today)
    console.log("schedules",this.schedules);
    
  });
  this.initButtonSelection();
  }
  ngOnInit() {
   
    this.MentorID = this.route.snapshot.paramMap.get('id');
    // this.MentorID = this.route.snapshot.paramMap.get('id');
    const mentorId = this.route.snapshot.paramMap.get('id');
    console.log("mentorid", mentorId)
    if (mentorId) {
      // Fetch mentor profile
      this.AccService.getProfile(mentorId).subscribe(
        data => {
          this.mentorProfile = data;
          console.log('Profile: ', this.mentorProfile);
          this.amount = this.mentorProfile.Price;

          console.log("paymentamount", this.amount);
          
         
        },
        error => {
          console.error('Error fetching profile', error);
        }
      );
      this.ScheduleService.getUnbookedschedules(this.MentorID).subscribe((data) => {
        this.schedules = data.schedules;
        console.log("schedules",this.schedules);
        
      });

    }
   
    this.processAvailableSchedules();
    this.generateCalendar();
    this.SessionData={
      "MentorId":this.MentorID,
      "Topic":".Net",
      "Description":"I need to solve some problems in my project",
      "DateTime": "",
      "Duration":1
  
    }
  }

  displaypayment(){
    this.pay=false;
    this.continue=true;
    this.canceled=false;
    setTimeout(()=>{
      this.pay=true;
      this.continue=false;
      this.canceled=true;
    },1000);
  
  }
  displaycontinue(){
    this.pay=true;
    this.continue=false;
    this.canceled=true;
    setTimeout(()=>{
      this.pay=false;
      this.continue=true;
      this.canceled=false;
    },100);
  
  }
  validateForm() {
    this.confirmButtonEnabled = !!this.Topic && !!this.Description && !!this.selectedDateTime;
    if (typeof document !== 'undefined') {
      // Place the code that uses `document` here
      this.initButtonSelection(); // e.g., calling initButtonSelection function only on the client
    }
    
    // document.addEventListener('DOMContentLoaded', () => {
    //   this.initButtonSelection();
    // });
}
// validateTitle():boolean {
//   if (this.title.length < 4 || this.title.length > 30) {
//     this.titleError = 'This is an invalid title. It must be between 4 and 30 characters.';
//     return false
//   } else {
//     this.titleError = null; // Clear the error if valid
//     return true
//   }
// }
validateTitle() {
  if (this.title.length > 0 && (this.title.length < 4 || this.title.length > 30)) {
    this.titleError = 'Title must be between 4 and 30 characters.';
  } else {
    this.titleError = ''; // Clear error if title length is valid
  }
}

onTitleInputChange() {
  this.titleError = ''; // Clear error message as soon as user starts typing
}

// onTitleChange() {
//   if (this.titleError) {
//     // Clear error message when the user starts typing
    
//   }
//   if(this.validateTitle()){
//     this.titleError = '';
//   }else{
//    if(this.validateTitle()) {
//     this.titleError = '';
//    }
//   }
   // Call validation on change
 
// }
  onTimeSelect(startTime: string, endTime: string) {
    if (!this.selectedDate) {
        console.error("selectedDate is not defined.");
        return;
    }

    const timeMatch = startTime.match(/^(\d{2}):(\d{2})(?::\d{2})?$/);
    if (!timeMatch) {
        console.error("Invalid startTime format:", startTime);
        return;
    }

    const [hours, minutes] = [parseInt(timeMatch[1], 10), parseInt(timeMatch[2], 10)];

    // Clone selectedDate to avoid modifying the original date object
    const selectedDateTime = new Date(this.selectedDate);
    selectedDateTime.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, and milliseconds

    // Store the full date and time in local time without converting to UTC
    this.selectedDateTime = selectedDateTime.toLocaleString(); // Local date and time format
    // this.confirmButtonEnabled = true;
    this.validateForm()
 this.selectTime(startTime)
//  this.displaypayment()
 
//  this.validateTitle()
    console.log("Selected DateTime:", this.selectedDateTime);
}

convertToISO(dateTimeString: string): string {
  if (!dateTimeString) {
      console.error('Invalid dateTimeString:', dateTimeString);
      return null;
  }

  const date = new Date(dateTimeString);
  if (isNaN(date.getTime())) {
      console.error('Invalid Date object created from dateTimeString:', date);
      return null;
  }

  // Manually construct the ISO string in local time
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
  confirmButtonEnabled: boolean = false; 

  isFutureDate(date: Date): boolean {
    // Get today's date without time
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return selectedDate >= today;
  }

  formatDateWithoutTimeZone(date: Date): string {
    // Ensures consistent format 'YYYY-MM-DD' without time component
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);  // Months are 0-indexed, so add 1
    const day = ('0' + date.getDate()).slice(-2);           // Ensure 2 digits for day
    return `${year}-${month}-${day}`;
  }

  handleSelectedDay(selectedDate: string) {
    const selectedDateObject = new Date(selectedDate);
    const selectedDay = selectedDateObject.getDay(); // 0 for Sunday, 1 for Monday, etc.

    // Filter schedules for the selected day
    const filteredSchedules = this.schedules?.filter(schedule => {
      const scheduleDate = new Date(schedule.Date);
      return (
        scheduleDate.toDateString() === selectedDateObject.toDateString() &&
        schedule.Day === selectedDay
      );
    });
    console.log("selectedDay",selectedDay);

    return filteredSchedules;
  }


  processAvailableSchedules() {
    this.schedules?.forEach(schedule => {
      this.availableDates.add(schedule.Date.split('T')[0]);
    });
  }

  generateCalendar() {
    this.monthDays = [];
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const startingDay = firstDay.getDay();

    // Fill empty slots for days before the 1st of the month
    for (let i = 0; i < startingDay; i++) {
      this.monthDays.push({ date: null, dayOfWeek: i });
    }

    // Fill days of the current month
    for (let i = 1; i <= totalDays; i++) {
      this.monthDays.push({ date: new Date(this.selectedYear, this.selectedMonth, i), dayOfWeek: (startingDay + i - 1) % 7 });
    }
  }

  isAvailable(date: Date): boolean {
    // Allow today and future dates to be clickable, but disable past dates
    return date >= this.today;
  }

  onDaySelect(date: Date) {
    // date=this.today
    const selectedDateString = this.formatDateWithoutTimeZone(date);
    this.selectedTimes = this.schedules?.filter(schedule => this.formatDateWithoutTimeZone(new Date(schedule.Date)) === selectedDateString)
      .map(schedule => ({
        ...schedule,
      }));
    
    this.currentTimePage = 0; // Reset to first page on new day selection
    
    if (this.selectedTimes?.length === 0 && date >= this.today) {
      this.message = 'No available time for the selected day';
    } else {
      this.message = '';
    }
    
    this.selectedDate = date;
    this.confirmButtonEnabled = false;
  }

  // Pagination functions for time buttons
  get paginatedTimeButtons(): Schedule[] {
    const start = this.currentTimePage * this.timeButtonsPerPage;
    const end = start + this.timeButtonsPerPage;
    return this.selectedTimes.slice(start, end);
  }

  hasNextPage(): boolean {
    return (this.currentTimePage + 1) * this.timeButtonsPerPage < this.selectedTimes?.length;
  }

  hasPrevPage(): boolean {
    return this.currentTimePage > 0;
  }

  nextPage() {
    if (this.hasNextPage()) {
      this.currentTimePage++;
    }
  }

  prevPage() {
    if (this.hasPrevPage()) {
      this.currentTimePage--;
    }
  }
  formatTimeToAmPm(time: string): string {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${this.padZero(formattedHour)}:${minutes} ${period}`;
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar();
  }

  getMonthName(month: number): string {
    return new Date(0, month).toLocaleString('default', { month: 'long' });
  }
 
  BookSession() {
    // Convert selected date and time to ISO
    const isoDateTime = this.convertToISO(this.selectedDateTime);
    console.log('ISO DateTime:', isoDateTime);

    // Construct SessionData
    this.SessionData = {
        MentorId: this.MentorID,
        Topic: this.Topic,
        Description:this.Description,
        DateTime: isoDateTime,
        Duration: 1
    };

    // Log SessionData before sending
    console.log('Session Data before sending:', this.SessionData);

    this.ScheduleService.BookingSession(this.SessionData).subscribe(
        data => {
            this.NewSession = data.Session;
            this.sesssionid=data.Session.Id;
            console.log('session: ', this.NewSession);
            console.log('id: ', this.sesssionid);
            this.sessionId = this.sesssionid;
            console.log("paymentsessionid",  this.sessionId );

        },
        error => {
            console.error('Error booking session', error);
        }
    );
    this.displaypayment();
}
// Get all elements with the "time-button" class

// Add a click event listener to each button
initButtonSelection() {
  // Track the currently selected time button
  let selectedTime: HTMLButtonElement | null = null;

  // Select all time buttons with class "time-button"
  const timeButtons = document.querySelectorAll<HTMLButtonElement>('.time-button');

  // Loop through each button and add click event listener
  timeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // If there was a previously selected button, remove 'active' class
      if (selectedTime) selectedTime.classList.remove('active');

      // Add 'active' class to the clicked button and set it as the selected button
      button.classList.add('active');
      selectedTime = button; // Update the selected button
    });
  });

  // Optional: Watch for form submissions and prevent form reset if necessary
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Do something with the selected time, if needed
      console.log("Selected time:", selectedTime?.textContent);
    });
  }
}

// Initialize after DOM is fully loaded



// Call the function to initialize button selection functionality

// onSubmitpayment() {
//   this.paymentService.createPayPalPayment(this.payment).subscribe(
//     (response) => {
//       // Handle success response
//       console.log('Payment created successfully:', response);
//       // Redirect to PayPal or show a success message
//       window.location.href = response.result; // Redirecting to PayPal approval URL
//     },
//     (error) => {
//       // Handle error response
//       console.error('Error creating payment:', error);
//     }
//   );
// }


onSubmitpayment() {
  
  console.log("paymentdata",this.amount,this.sessionId);
  this.paymentService.createPayment(this.amount,  this.sessionId).subscribe({
    
    
    // next: (response) => {
    //   if (response && response.result) {
    //     // Redirect the user to the PayPal approval URL
    //     window.location.href = response.result;
    //   } else {
    //     // Handle error case
    //     alert('Payment creation failed.');
    //   }
    next: (response) => {
      console.log('API Response:', response); // Log the entire response
      if (response && response.result) {
          // Redirect the user to the PayPal approval URL
          // window.location.href = response.result;
          // console.log("href",response.result);
          // this.href = response.result;
          window.location.href = response.result;
      } else {
          // Handle error case
          alert('Payment creation failed. No result in response.');
      
      }
    },
    error: (error) => {
      console.error('Payment error:', error);
      alert('An error occurred while creating the payment.');
    }
  });
}



cancelSession(id: string) {
  // id =this.sesssionid;
  id =this.sesssionid;

  this.SeessionService.cancelSession(id).subscribe(
    (response) => {
      this.toaster.success("Canceled your session successfully!")
      // alert(response.message); // Success message
    },
    (error) => {
      if (error.status === 401) {
        this.toaster.warning("User is not authenticated");
        // alert('User is not authenticated.');
      } else if (error.status === 404) {
        this.toaster.warning('Session not found.');
        // alert('Session not found.');
      } else if (error.status === 400) {
        alert(error.error.message); // Specific error message
      } else {
        this.toaster.warning('An unexpected error occurred.');
        // alert('An unexpected error occurred.');
      }
    }
  );
}
  
}

