import { ChangeDetectorRef, Component } from '@angular/core';
import { ScheduleService } from '../../../../shared/services/Schedule/schedule.service';
import { AuthService } from '../../../../shared/services/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';

enum Day {
  Sunday = 0,
Monday = 1,
Tuesday = 2,
Wednesday = 3,
Thursday = 4,
Friday = 5,
Saturday = 6
}

interface WorkingHour {
  Day: Day;
  Available: boolean;
  StartTime: string;
  EndTime: string;
  User_Id: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})

export class ScheduleComponent {
  Working_Hours: Array<WorkingHour> = [
    
    { Day: Day.Sunday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Monday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Tuesday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Wednesday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Thursday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Friday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
    { Day: Day.Saturday, Available: false, StartTime: '00:00:00', EndTime: '00:00:00', User_Id: '' },
  ];

  ScheduleData: {
    "Price": any,
    "Schedules": any[]
  };
  SessionPrice: any;
  AllDone: boolean = true;
  priceError: string = '';
  Errors: Array<string> = [];
  isOpen: boolean = false;

  constructor(private Schedule: ScheduleService, Auto: AuthService,private cdr: ChangeDetectorRef,
    private toastr: ToastrService) {
    console.log("session", this.SessionPrice);
  }

  ngOnInit() {
    this.Schedule.GetSchedulesWithPrice().subscribe({
      next: (res: any) => {
        this.Working_Hours.forEach(day => {
          const schedule = res.Schedules.find(s => s.Day === day.Day);
          if (schedule) {
            day.Available = schedule.Available;
            day.StartTime = this.convertTimeSpanToString(schedule.StartTime);
            day.EndTime = this.convertTimeSpanToString(schedule.EndTime);
          } else {
            day.Available = false;
            day.StartTime = '00:00:00';
            day.EndTime = '00:00:00';
          }
          this.SessionPrice = res.Price;
        });
        console.log("workinghour", this.Working_Hours);
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
       
      }
    });
    this.cdr.detectChanges();
  }

  convertTimeSpanToString(timeSpan: string): string {
    const timeParts = timeSpan.split(':');
  
    // Make sure to return the full 'hh:mm:ss' format
    if (timeParts?.length === 3) {
      return `${timeParts[0]}:${timeParts[1]}:${timeParts[2]}`; // Return "hh:mm:ss" format
    } else {
      // Fallback if time doesn't contain seconds
      return `${timeParts[0]}:${timeParts[1]}:00`;
    }
  }
  

  getDayName(day: Day): string {
    return Day[day];
  }

  checkPrice(price: string): void {
    this.SessionPrice = parseInt(price, 10);
    if (this.SessionPrice <= 0) {
      this.priceError = 'Price must be more than zero';
    } else {
      this.priceError = '';
    }
    this.validateForm();
  }

  available(index: number): void {
    this.Working_Hours[index].Available = true;
    this.checkTime(index);
    this.validateForm();
  }

  notavailable(index: number): void {
    this.Working_Hours[index].Available = false;
    this.Working_Hours[index].StartTime = '00:00:00';
    this.Working_Hours[index].EndTime = '00:00:00';
    this.Errors[index] = '';
    this.validateForm();
  }

  setTime(index: number, isStart: boolean, event: any): void {
    const value = event.target.value; // This gets the time in 'hh:mm' format
  
    // Append ":00" to represent seconds
    const timeWithSeconds = value + ':00';
  
    if (isStart) {
      this.Working_Hours[index].StartTime = timeWithSeconds;
    } else {
      this.Working_Hours[index].EndTime = timeWithSeconds;
    }
  
    this.checkTime(index);
    this.validateForm();
  }
  

  
  checkTime(index: number): boolean {
    const start = this.Working_Hours[index].StartTime;
    const end = this.Working_Hours[index].EndTime;

    if (start === end) {
      this.Errors[index] = `Start and end time for ${this.getDayName(this.Working_Hours[index].Day)} cannot be the same.`;
      return false;
    } else if (start > end) {
      this.Errors[index] = `Start time for ${this.getDayName(this.Working_Hours[index].Day)} cannot be later than the end time.`;
      return false;
    } else {
      this.Errors[index] = '';
      return true;
    }
  }

  validateForm(): void {
    let validDaysCount = 0;
    let allTimesValid = true;

    this.Working_Hours.forEach((element, index) => {
      if (element.Available) {
        if (this.checkTime(index)) {
          validDaysCount++;
        } else {
          allTimesValid = false;
        }
      }
    });

    if (validDaysCount >= 1 && allTimesValid && this.SessionPrice > 0) {
      this.AllDone = false;
    } else {
      this.AllDone = true;
    }
  }

  SetSchedule() {
    if (!this.ScheduleData) {
      this.ScheduleData = {
        "Schedules": [],
        "Price": 0,
      };
    }

    this.ScheduleData.Schedules = this.Working_Hours.map((hour) => {
      return {
        Day: hour.Day,
        Available: hour.Available,
        StartTime: hour.StartTime,
        EndTime: hour.EndTime,
        User_Id: hour.User_Id
      };
    });
    this.ScheduleData.Price = this.SessionPrice;

    console.log("ScheduleData", this.ScheduleData);

    this.Schedule.SetSchedule(this.ScheduleData).subscribe({
      next: (response) => {
        console.log('Schedule set successfully:', response);
        this.toastr.success('Suheule is added successfully');
      },
      error: (error) => {
        console.error('Error setting schedule:', error);
        this.toastr.error('Message is failed', error?.error?.message);
      }
    });
  }
}
