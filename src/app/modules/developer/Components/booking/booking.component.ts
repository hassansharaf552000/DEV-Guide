import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Time } from '../../../../shared/types/time';
import { MatCalendar } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { ScheduleService } from '../../../../shared/services/Schedule/schedule.service';
import { IMentor } from '../../../../core/enums/Mentor';


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
  GetProfileURL = "http://localhost:5164/api/Account/GetOneUser"
  MentorID = ""
  schedules:Array<any>;
  constructor(private route: ActivatedRoute, private AccService: AccountService, private ScheduleService: ScheduleService) {
    this.list = [];
    this.MentorID = this.route.snapshot.paramMap.get('id');
    if (this.MentorID) {
      console.log(' mentor ID provided in the route');

    }
    this.selectedMonth = this.today.getMonth();
    this.selectedYear = this.today.getFullYear();
    this.selectedDate = new Date(); // Set default selected date to today

    // Reset this.today to just the date part
    this.today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
   this.onDaySelect(this.today)
   this.ScheduleService.getUnbookedschedules(this.MentorID).subscribe((data) => {
    this.schedules = data.schedules;
    console.log("schedules",this.schedules);
    
  });
  }
  ngOnInit() {
    // this.MentorID = this.route.snapshot.paramMap.get('id');
    const mentorId = this.route.snapshot.paramMap.get('id');
    console.log("mentorid", mentorId)
    if (mentorId) {
      // Fetch mentor profile
      this.AccService.getProfile(mentorId).subscribe(
        data => {
          this.mentorProfile = data;
          console.log('Profile: ', this.mentorProfile);

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
  }


  // schedules = [
  //   {
  //     "Date": "2024-10-27T00:00:00+03:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "07:00:00",
  //     "EndTime": "08:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "02:00:00",
  //     "EndTime": "03:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "04:00:00",
  //     "EndTime": "05:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "05:00:00",
  //     "EndTime": "06:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "15:00:00",
  //     "EndTime": "16:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "07:00:00",
  //     "EndTime": "08:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "08:00:00",
  //     "EndTime": "09:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "09:00:00",
  //     "EndTime": "10:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "10:00:00",
  //     "EndTime": "11:00:00"
  //   },
  //   {
  //     "Date": "2024-11-03T00:00:00+02:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "15:00:00",
  //     "EndTime": "16:00:00"
  //   },
  //   {
  //     "Date": "2024-11-03T00:00:00+02:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "16:00:00",
  //     "EndTime": "17:00:00"
  //   },
  //   // Add more entries as needed
  // ];
  today: Date = new Date();

  availableDates: Set<string> = new Set();
  selectedTimes: any[] = [];
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
  currentTimePage = 0;    // Current time page index

  onTimeSelect(startTime: string, endTime: string) {
    if (!this.selectedDate) return;

    const datePart = this.selectedDate.toISOString().split('T')[0]; // Get date in 'yyyy-mm-dd'

    // Concatenate date with start time and format as 'yyyy-mm-dd hh:mm:ss'
    this.selectedDateTime = `${datePart} ${startTime}`;
    this.selectedTime = startTime;
    console.log("Selected DateTime:", this.selectedDateTime); // Log to verify
    this.confirmButtonEnabled = true;
  }


  // schedules = [
  //   {
  //     "Date": "2024-10-27T00:00:00+03:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "07:00:00",
  //     "EndTime": "08:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "02:00:00",
  //     "EndTime": "03:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "04:00:00",
  //     "EndTime": "05:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "05:00:00",
  //     "EndTime": "06:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "15:00:00",
  //     "EndTime": "16:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "07:00:00",
  //     "EndTime": "08:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "08:00:00",
  //     "EndTime": "09:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "09:00:00",
  //     "EndTime": "10:00:00"
  //   },
  //   {
  //     "Date": "2024-10-28T00:00:00+03:00",
  //     "Day": 1, // Monday
  //     "StartTime": "10:00:00",
  //     "EndTime": "11:00:00"
  //   },
  //   {
  //     "Date": "2024-11-03T00:00:00+02:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "15:00:00",
  //     "EndTime": "16:00:00"
  //   },
  //   {
  //     "Date": "2024-11-03T00:00:00+02:00",
  //     "Day": 0, // Sunday
  //     "StartTime": "16:00:00",
  //     "EndTime": "17:00:00"
  //   },
  //   // Add more entries as needed
  // ];
  confirmButtonEnabled: boolean = false; 



 
  isFutureDate(date: Date): boolean {
    // Get today's date without time
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return selectedDate > today;
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
    
    if (this.selectedTimes?.length === 0 && date > this.today) {
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


}