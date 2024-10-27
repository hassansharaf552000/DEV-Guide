import { EducationService } from './../../services/Education/education.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEducation } from '../../../core/enums/Education';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrl: './add-education.component.css'
})
export class AddEducationComponent {
  educationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEducationComponent>
    ,private educationservice:EducationService
  ) {
    // Initialize the form
    this.educationForm = this.fb.group({
      Degree: ['', Validators.required],
      FieldOfStudy: ['', Validators.required],
      University: ['', Validators.required],
      Faculty: [''],
      CountryOfStudy: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: [''],
      TillNow: [false]
    });
  }

  // onSave(): void {
  //   if (this.educationForm.valid) {
  //     const newEducation: IEducation = {
  //       ...this.educationForm.value,
  //       StartDate: new Date(this.educationForm.value.StartDate).toISOString(),
  //       EndDate: this.educationForm.value.EndDate ? new Date(this.educationForm.value.EndDate).toISOString() : null
  //     };

  //     // Call the addEducation service function to save the new education
  //     this.educationservice.addEducation(newEducation).subscribe(
  //       (response: IEducation) => {
  //         console.log('Education added successfully:', response);
  //         this.dialogRef.close(response); // Close dialog and pass the added education back
  //       },
  //       (error) => {
  //         console.error('Error adding education:', error);
  //       }
  //     );
  //   }
  // }

  onSave(): void {
    // Check if form is valid before submission
    if (this.educationForm.valid) {
      // Convert form values to match backend expectations, particularly with dates
      const newEducation: IEducation = {
        ...this.educationForm.value,
        StartDate: new Date(this.educationForm.value.StartDate).toISOString(), // Convert StartDate to ISO string
        EndDate: this.educationForm.value.TillNow ? null : new Date(this.educationForm.value.EndDate).toISOString() // Convert EndDate if TillNow is false
      };

      // Call the addEducation service function to save the new education
      this.educationservice.addEducation(newEducation).subscribe(
        (response: IEducation) => {
          console.log('Education added successfully:', response);
          this.dialogRef.close(response); // Close dialog and pass the added education back to the parent component
        },
        (error) => {
          console.error('Error adding education:', error); // Log error details for debugging
        }
      );
    } else {
      // Optionally, mark all controls as touched to trigger validation messages
      this.educationForm.markAllAsTouched();
      console.warn('Form is invalid:', this.educationForm.errors);
    }
  }


  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }

}
