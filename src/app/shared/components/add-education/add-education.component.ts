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
  ) {
    // Initialize the form
    this.educationForm = this.fb.group({
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      university: ['', Validators.required],
      faculty: [''],
      countryOfStudy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      tillNow: [false]
    });
  }

  onSave(): void {
    if (this.educationForm.valid) {
      const newEducation: IEducation = this.educationForm.value;
      this.dialogRef.close(newEducation); // Return the new education data
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }

}
