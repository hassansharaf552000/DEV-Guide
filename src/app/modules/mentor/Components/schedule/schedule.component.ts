import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  Working_Hours: Array<any> = [
    { Day: 'Saturday', Available: false, Start: '', End: '' },
    { Day: 'Sunday', Available: false, Start: '', End: '' },
    { Day: 'Monday', Available: false, Start: '', End: '' },
    { Day: 'Tuesday', Available: false, Start: '', End: '' },
    { Day: 'Wednesday', Available: false, Start: '', End: '' },
    { Day: 'Thursday', Available: false, Start: '', End: '' },
    { Day: 'Friday', Available: false, Start: '', End: '' },
  ];

  SessionPrice: number = 0;
  AllDone: boolean = true; // Initially disabled button
  priceError: string = '';
  Errors: Array<string> = [];
  isOpen: boolean = false;

  // Check if price is valid
  checkPrice(price: string): void {
    this.SessionPrice = parseInt(price, 10);
    if (this.SessionPrice <= 0) {
      this.priceError = 'Price must be more than zero';
    } else {
      this.priceError = '';
    }
    this.validateForm();
  }

  // Mark a day as available
  available(index: number): void {
    this.Working_Hours[index].Available = true;
    this.checkTime(index);
    this.validateForm();
  }

  // Mark a day as not available
  notavailable(index: number): void {
    this.Working_Hours[index].Available = false;
    this.Working_Hours[index].Start = '';
    this.Working_Hours[index].End = '';
    this.Errors[index] = '';
    this.validateForm();
  }

  // Set time for start or end
  setTime(index: number, isStart: boolean, event: any): void {
    const value = event.target.value;
    if (isStart) {
      this.Working_Hours[index].Start = value;
    } else {
      this.Working_Hours[index].End = value;
    }
    this.checkTime(index);
    this.validateForm();
  }

  // Check if the time range for a day is valid
  checkTime(index: number): boolean {
    const start = this.Working_Hours[index].Start;
    const end = this.Working_Hours[index].End;

    if (start === end) {
      this.Errors[
        index
      ] = `Start and end time for ${this.Working_Hours[index].Day} cannot be the same.`;
      return false;
    } else if (start > end) {
      this.Errors[
        index
      ] = `Start time for ${this.Working_Hours[index].Day} cannot be later than the end time.`;
      return false;
    } else {
      this.Errors[index] = '';
      return true;
    }
  }

  // Validate the entire form
  validateForm(): void {
    let validDaysCount = 0;
    let allTimesValid = true;

    // Check if at least two days are valid
    this.Working_Hours.forEach((element, index) => {
      if (element.Available) {
        if (this.checkTime(index)) {
          validDaysCount++;
        } else {
          allTimesValid = false;
        }
      }
    });

    // Final validation: At least two valid days and a valid price
    if (validDaysCount >= 1 && allTimesValid && this.SessionPrice > 0) {
      this.AllDone = false; // Enable the submit button
    } else {
      this.AllDone = true; // Disable the submit button
    }
  }
}
