import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEducation } from '../../../core/enums/Education';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EducationService } from '../../services/Education/education.service';
import { Router } from '@angular/router';

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
    private educationservice:EducationService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public education: IEducation
  ) {
    // Initialize form with education data
    this.educationForm = this.fb.group({
      Degree: [education.Degree, Validators.required],
      FieldOfStudy: [education.FieldOfStudy, Validators.required],
      University: [education.University, Validators.required],
      Faculty: [education.Faculty],
      CountryOfStudy: [education.CountryOfStudy, Validators.required],
      StartDate: [education.StartDate, Validators.required],
      EndDate: [education.EndDate],
      TillNow: [education.TillNow],
    });
  }

  onSave(): void {
    if (this.educationForm.valid) {
      const updatedEducation: IEducation = {
        ...this.educationForm.value,
        Id: this.education.Id  // Ensure the Id is included for editing
      };

      // Call the service to update the education
      this.educationservice.editEducation(updatedEducation).subscribe(
        (response: IEducation) => {
          console.log('Education updated successfully:', response);
          this.dialogRef.close(response);
          this.router.navigateByUrl("/educations");// Close dialog and pass back the updated education
        },
        (error) => {
          console.error('Error updating education:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
