import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IExperience } from '../../../core/enums/Experience';
import { ExperienceService } from '../../services/Experience/experience.service';
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css'
})
export class AddExperienceComponent {
  experienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddExperienceComponent>,
    private experienceService : ExperienceService
  ) {
    // Initialize the form
    this.experienceForm = this.fb.group({
      FieldOfStudy: ['', Validators.required],
      Organization: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: [''],
      TillNow: [false]
    });
  }

  onSave(): void {
    // Check if form is valid before submission
    if (this.experienceForm.valid) {
      // Convert form values to match backend expectations, particularly with dates
      const newExperience: IExperience = {
        ...this.experienceForm.value,
        StartDate: new Date(this.experienceForm.value.StartDate).toISOString(), // Convert StartDate to ISO string
        EndDate: this.experienceForm.value.TillNow ? null : new Date(this.experienceForm.value.EndDate).toISOString() // Convert EndDate if TillNow is false
      };

      // Call the addEducation service function to save the new education
      this.experienceService.addExperience(newExperience).subscribe(
        (response: IExperience) => {
          console.log('Experience added successfully:', response);
          this.dialogRef.close(response); // Close dialog and pass the added education back to the parent component
        },
        (error) => {
          console.error('Error adding Experience:', error); // Log error details for debugging
        }
      );
    } else {
      // Optionally, mark all controls as touched to trigger validation messages
      this.experienceForm.markAllAsTouched();
      console.warn('Form is invalid:', this.experienceForm.errors);
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }
}
