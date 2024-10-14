import { MatDialog } from '@angular/material/dialog';
import { IEducation } from './../../../core/enums/Education';
import { Component } from '@angular/core';
import { AddEducationComponent } from '../add-education/add-education.component';

@Component({
  selector: 'app-educations',
  templateUrl: './education-list.component.html',
  styleUrl: './education-list.component.css'
})
export class EducationsComponent {
  // Static data
  educationList:IEducation[]= [
    {
      degree: 'Bachelor of Science',
      fieldOfStudy: 'Computer Science',
      university: 'University of Example',
      countryOfStudy: 'USA',
      faculty: 'Faculty of Engineering',
      startDate: new Date(2015, 8, 1),  // Month is 0-indexed, so September is 8
      endDate: new Date(2019, 5, 15),
      tillNow: false
    },
    {
      degree: 'Master of Science',
      fieldOfStudy: 'Data Science',
      university: 'Example Institute of Technology',
      countryOfStudy: 'Germany',
      faculty: 'Faculty of Computer Science',
      startDate: new Date(2015, 8, 1),  // Month is 0-indexed, so September is 8
      endDate: new Date(2019, 5, 15),
      tillNow: true
    }
  ];
  constructor(private dialog: MatDialog) {}

  // Method to open the "Add Education" dialog
  openAddEducationDialog(): void {
    const dialogRef = this.dialog.open(AddEducationComponent, {
      width: '400px'
    });

    // After the dialog is closed, handle the result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Append the new education entry to the list
        this.educationList.push(result);
      }
    });
  }

  // Utility function to format dates
  formatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

}
