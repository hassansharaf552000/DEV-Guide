import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IExperience } from "../../../core/enums/Experience";
import { Component, Inject } from "@angular/core";
import { ExperienceService } from "../../services/Experience/experience.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-experience',  // Unique selector for this component
  templateUrl: './edit-experience.component.html',  // Path to the template file
  styleUrls: ['./edit-experience.component.css']  // Path to the styles file
})

export class EditExperienceComponent {
  experienceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditExperienceComponent>,
    private experienceservice:ExperienceService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public experience: IExperience
  ) {
    // Initialize form with experience data
    this.experienceForm = this.fb.group({
      FieldOfStudy: [this.experience.FieldOfStudy, Validators.required],
      Organization: [this.experience.Organization, Validators.required],
      StartDate: [this.experience.StartDate, Validators.required],
      EndDate: [this.experience.EndDate],
      TillNow: [this.experience.TillNow]
    });

    // Conditional validation for endDate
  }

  onSave(): void {
    if (this.experienceForm.valid) {
      const updatedexperience: IExperience = {
        ...this.experienceForm.value,
        Id: this.experience.Id  // Ensure the Id is included for editing
      };

      // Call the service to update the education
      this.experienceservice.editExperience(updatedexperience).subscribe(
        (response: IExperience) => {
          console.log('Experience updated successfully:', response);
          this.dialogRef.close(response);
          this.router.navigateByUrl("/experiences");
           // Close dialog and pass back the updated education
        },
        (error) => {
          console.error('Error updating education:', error);
        }
      );
    }
  }

  onCancel(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
