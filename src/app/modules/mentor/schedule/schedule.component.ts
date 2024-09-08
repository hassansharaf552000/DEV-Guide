import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { log, time } from 'node:console';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})

export class ScheduleComponent {
  // form: FormGroup;
  constructor() {

  }
  Working_Hours: Array<any> =
    [{
      Day: 'Saturday',
      Available: false,
      Start: "",
      End: ""
    }
      ,
    {
      Day: 'Sunday',
      Available: false,
      Start: "",
      End: ""
    }
      ,
    {
      Day: 'Monday',
      Available: false,
      Start: "",
      End: ""
    }
      ,
    {
      Day: 'Tuesday',
      Available: false,
      Start: "",
      End: ""
    }
      ,
    {
      Day: 'Wednesday',
      Available: false,
      Start: "",
      End: ""
    }
      ,
    {
      Day: 'Thursday',
      Available: false,
      Start: "",
      End: ""
    }
      , {
      Day: 'Friday',
      Available: false,
      Start: "",
      End: ""
    }

    ];

  SessionPrice: number = 0;
  AllDone: boolean = true;
  isOpen: any = false;
  priceError: string = ""
  Errors: Array<string> = [];


  checkPrice(price: string): boolean {
    this.SessionPrice = parseInt(price)
    if (this.SessionPrice <= 0) {
      this.priceError = "Price Must be more than zero"
      return false;
    } else {
      this.priceError = ""
      return true;
    }

  }
  available(index: number) {
    this.Working_Hours[index].Available = true;
    this.checkTime(index);
    this.validateForm(); // Check entire form after this change
  }

  notavailable(index: number) {
    this.Working_Hours[index].Available = false;
    this.Working_Hours[index].Start = "";
    this.Working_Hours[index].End = "";
    this.isOpen = this.Working_Hours.some(i => i.Available === true);
    this.Errors[index] = "";
    this.validateForm(); // Check entire form after this change
  }

  setTime(index: number, isStart: boolean, element: any) {
    if (isStart) {
      this.Working_Hours[index].Start = element.target.value;
    } else {
      this.Working_Hours[index].End = element.target.value;
    }
    this.checkTime(index);
    this.validateForm(); // Check entire form after this change
  }



  checkTime(index: number): boolean {
    if (this.Working_Hours[index].Start === this.Working_Hours[index].End) {
      this.Errors[index] = `Sorry, your duration in ${this.Working_Hours[index].Day} is NOT valid.`;
      return false;
    } else if (this.Working_Hours[index].Start > this.Working_Hours[index].End) {
      this.Errors[index] = `Sorry, your duration in ${this.Working_Hours[index].Day} is NOT valid.`;
      return false;
    } else {
      this.Errors[index] = "";
      return true;
    }
  }




  validateForm() {
    let hasAvailableDay = false; // Flag to check if at least one day is available
    let isGood = true; // Assume form is valid initially

    this.Working_Hours.forEach((element, index) => {
      if (element.Available) {
        hasAvailableDay = true; // Mark that there's at least one available day
        if (!this.checkTime(index)) {
          isGood = true; // If any available day has invalid times, mark as not good
        }

      }
    });

    // Check if price is valid and there is at least one available day with valid time
    if (this.checkPrice(this.SessionPrice.toString()) && !hasAvailableDay && !isGood) {
      this.AllDone = true; // Enable submit button
    } else {
      this.AllDone = false; // Disable submit button
    }
  }


}


