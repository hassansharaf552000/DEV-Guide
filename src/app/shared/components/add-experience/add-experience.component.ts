import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IExperience } from '../../../core/enums/Experience';
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrl: './add-experience.component.css'
})
export class AddExperienceComponent {
  experienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddExperienceComponent>
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
    if (this.experienceForm.valid) {
      const newExperience: IExperience = this.experienceForm.value;
      this.dialogRef.close(newExperience); // Return the new education data
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }
}
