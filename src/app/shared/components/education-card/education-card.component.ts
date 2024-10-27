import { Component, Input } from '@angular/core';
import { IEducation } from '../../../core/enums/Education';
import { EditEducationComponent } from '../edit-education/edit-education.component';
import { MatDialog,MatDialogModule  } from '@angular/material/dialog';
@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css'
})
export class EducationCardComponent {
  @Input() education!: IEducation;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  // Method to format date (e.g., Jan 2023)
  formatDate(date: string | Date): string {
    // Convert the date to a Date object if it’s in string format
    const parsedDate = typeof date === 'string' ? new Date(date) : date;

    // Format the date (e.g., Jan 2023)
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(parsedDate);
  }
  // Open the dialog and pass the education data
  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditEducationComponent, {
      width: '400px',
      data: this.education,
    });

    // Handle dialog close and update the education data
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.education = result; // Update the education with the new data
      }
    });
  }

}
