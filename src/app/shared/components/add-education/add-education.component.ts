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

  onSave(): void {
    if (this.educationForm.valid) {
      const newEducation: IEducation = this.educationForm.value;

      // Call the addEducation service function to save the new education
      this.educationservice.addEducation(newEducation).subscribe(
        (response: IEducation) => {
          console.log('Education added successfully:', response);
          this.dialogRef.close(response); // Close dialog and pass the added education back
        },
        (error) => {
          console.error('Error adding education:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }

}
