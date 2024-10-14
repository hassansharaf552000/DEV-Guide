import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IExperience } from "../../../core/enums/Experience";
import { Component, Inject } from "@angular/core";
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
    @Inject(MAT_DIALOG_DATA) public experience: IExperience
  ) {
    // Initialize form with experience data
    this.experienceForm = this.fb.group({
      job: [this.experience.job, Validators.required],
      organization: [this.experience.organization, Validators.required],
      startDate: [this.experience.startDate, Validators.required],
      endDate: [this.experience.endDate],
      tillNow: [this.experience.tillNow]
    });

    // Conditional validation for endDate
  }

  onSave(): void {
    if (this.experienceForm.valid) {
      // Close the dialog and pass the updated experience data back
      this.dialogRef.close(this.experienceForm.value);
    }
  }

  onCancel(): void {
    // Close the dialog without saving
    this.dialogRef.close();
  }
}
