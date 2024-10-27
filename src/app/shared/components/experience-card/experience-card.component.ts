import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IExperience } from '../../../core/enums/Experience';
import { MatDialog } from '@angular/material/dialog';
import { EditExperienceComponent } from '../edit-experience/edit-experience.component';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input() experience!: IExperience;

  constructor(private dialog: MatDialog,private cdr: ChangeDetectorRef) {}

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
    const dialogRef = this.dialog.open(EditExperienceComponent, {
      width: '400px',
      data: this.experience,
    });

    // Handle dialog close and update the experience data
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.experience = result; // Update the education with the new data
      }
    });
  }

}
