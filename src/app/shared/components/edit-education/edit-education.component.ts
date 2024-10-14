import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEducation } from '../../../core/enums/Education';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrl: './edit-education.component.css'
})
export class EditEducationComponent {
  educationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public education: IEducation
  ) {
    // Initialize form with education data
    this.educationForm = this.fb.group({
      degree: [education.degree, Validators.required],
      fieldOfStudy: [education.fieldOfStudy, Validators.required],
      university: [education.university, Validators.required],
      faculty: [education.faculty],
      countryOfStudy: [education.countryOfStudy, Validators.required],
      startDate: [education.startDate, Validators.required],
      endDate: [education.endDate],
      tillNow: [education.tillNow],
    });
  }

  onSave(): void {
    if (this.educationForm.valid) {
      this.dialogRef.close(this.educationForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
