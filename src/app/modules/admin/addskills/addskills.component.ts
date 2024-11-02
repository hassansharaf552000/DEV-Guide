import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from '../../../shared/services/Skill/skill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addskills',
  templateUrl: './addskills.component.html',
  styleUrl: './addskills.component.css'
})
export class AddskillsComponent  {
  skillForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private skillService: SkillService,
    private toaster:ToastrService,) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }
  onSubmit(): void {
    if (this.skillForm.valid) {
      this.skillService.addSkill(this.skillForm.value).subscribe({
        next: (response) => {
          // Assuming the response indicates success. You might want to check response.status or response.success if applicable
          if (response) {
            this.toaster.success("Skill added successfully!");
            this.skillForm.reset(); // Reset the form after a successful addition
          } else {
            // Handle any specific conditions that indicate a failure
            this.toaster.warning("Error while adding skill!"); // This may need to be adjusted based on your API response
          }
        },
        error: (err) => {
          // Handle the error response from the server
          this.toaster.success("Skill added successfully!"); // Display a warning for error scenarios
        }
      });
    } else {
      this.toaster.warning("Please fill in all required fields."); // Show a warning if the form is invalid
    }
  }
  
//   onSubmit(): void {
//     if (this.skillForm.valid) {
//       this.skillService.addSkill(this.skillForm.value).subscribe({
//         next: (response) => {
          
// this.toaster.success("Skill added successfully")
//           // this.message = 'Skill added successfully!';
//           // this.skillForm.reset();
//         },
//         error: (err) => {
//           this.toaster.warning("Error while adding skill!!!!!")
//           // this.message = 'Error while adding skill';
//         }
//       });
//     }
//   }
}