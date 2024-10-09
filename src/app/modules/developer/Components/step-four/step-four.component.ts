// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AccountService } from '../../../../shared/services/Account/account.service';
// import { SkillService } from '../../../../shared/services/Skill/skill.service';

// @Component({
//   selector: 'app-step-four',
//   templateUrl: './step-four.component.html',
//   styleUrl: './step-four.component.css',
// })
// export class StepFourComponent implements OnInit {
//   stepFourForm!: FormGroup;
//   Skills: any[] = [];
//   filteredSkills: any[] = [];
//   searchQuery: string = '';
//   formArray: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private Account: AccountService,
//     private SkillService: SkillService
//   ) {
//     this.SkillService.getAll().subscribe((res: any) => {
//       this.Skills = res;
//       this.filteredSkills = [...this.Skills]; // Initialize with all skills
//     });
//     this.formArray = this.fb.group({
//       educations: this.fb.array([])});
//   }

//   ngOnInit(): void {
   
//     this.stepFourForm = this.fb.group({
//       experience: ['', Validators.required],
//       selectedSkills: this.fb.array([], Validators.required), // FormArray for skills
//     });

//   }
//  get experience(): FormArray {
//     return this.formArray.get('experience') as FormArray;
//   }
//   addExperience(): void {
//     const experienceGroup = this.fb.group({
//       organization: ['', Validators.required],
//       field: ['', Validators.required],
//       startDate: ['', Validators.required],
//       endDate: ['', Validators.required],
//       tillnow: [false],
//     });

//     this.experience.push(experienceGroup);
//   }
//   // Getter for the FormArray
//   get selectedSkillsArray(): FormArray {
//     return this.stepFourForm.get('selectedSkills') as FormArray;
//   }

//   // Add skill from suggestion
//   addSkillFromSuggestion(skill: string): void {
//     // Add to the FormArray if not already included
//     if (!this.selectedSkillsArray.controls.some(control => control.value === skill)) {
//       this.selectedSkillsArray.push(this.fb.control(skill));
//       console.log(this.selectedSkillsArray);
//     }
//   }

//   // Remove skill from the selected list
//   removeSkill(skill: string): void {
//     const index = this.selectedSkillsArray.controls.findIndex(control => control.value === skill);
//     if (index >= 0) {
//       this.selectedSkillsArray.removeAt(index);
//     }
//   }

//   // Filter suggested skills based on input
//   filterSkills(): void {
//     const searchTerm = this.searchQuery.toLowerCase();

//     if (searchTerm === '') {
//       this.filteredSkills = [...this.Skills]; // Show all skills if no input
//     } else {
//       this.filteredSkills = this.Skills.filter((skill: any) =>
//         skill.toLowerCase().includes(searchTerm)
//       );
//     }
//   }

//   // Handle input change for search and filter
//   onSearchInputChange(input: string): void {
//     this.searchQuery = input;
//     this.filterSkills(); // Filter skills on input change
//   }

//   onNext(): void {
//     if (this.stepFourForm.valid && this.formArray.valid) {
//       Object.keys(this.stepFourForm.controls).forEach((key) => {
//         this.Account.updateFormData(key, this.stepFourForm.get(key)?.value);
//       });
//       const formData = this.formArray.value;
//           Object.keys(formData).forEach(key => {
//             this.Account.updateFormData(key, formData[key]);
//           });
//       this.router.navigate(['/developer/step-five']);
//     }
//   }

//   goToPreviousStep(): void {
//     this.router.navigate(['/developer/step-three']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { SkillService } from '../../../../shared/services/Skill/skill.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
})
export class StepFourComponent implements OnInit {
  stepFourForm!: FormGroup;
  Skills: any[] = [];
  filteredSkills: any[] = [];
  searchQuery: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private Account: AccountService,
    private SkillService: SkillService
  ) {
    // Fetch skills from the service
    this.SkillService.getAll().subscribe((res: any) => {
      this.Skills = res;
      this.filteredSkills = [...this.Skills]; // Initialize with all skills
    });

    // Initialize the stepFourForm with FormArray for experiences and validators
    this.stepFourForm = this.fb.group({
      experience: ['', [Validators.required, Validators.min(0)]], // Ensure non-negative numbers
      selectedSkills: this.fb.array([], Validators.required), // FormArray for selected skills with required validation
      experiences: this.fb.array([]), // FormArray for work experiences
    });
  }

  ngOnInit(): void {}

  // Access the experiences FormArray
  get experiences(): FormArray {
    return this.stepFourForm.get('experiences') as FormArray; // Access FormArray correctly
  }

  // Add a new experience entry
  addExperience(): void {
    const experienceGroup = this.fb.group({
      organization: ['', Validators.required],
      field: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      tillnow: [false],
    });

    this.experiences.push(experienceGroup); // Push to the experiences FormArray
  }

  // Access the selectedSkills FormArray
  get selectedSkillsArray(): FormArray {
    return this.stepFourForm.get('selectedSkills') as FormArray;
  }

  // Add skill from suggestion
  addSkillFromSuggestion(skill: string): void {
    // Add to the FormArray if not already included
    if (!this.selectedSkillsArray.controls.some(control => control.value === skill)) {
      this.selectedSkillsArray.push(this.fb.control(skill));
    }
  }

  // Remove skill from the selected list
  removeSkill(skill: string): void {
    const index = this.selectedSkillsArray.controls.findIndex(control => control.value === skill);
    if (index >= 0) {
      this.selectedSkillsArray.removeAt(index);
    }
  }

  // Handle input change for search and filter
  onSearchInputChange(input: string): void {
    this.searchQuery = input;
    this.filterSkills(); // Filter skills on input change
  }

  // Access the experience control for validation
  get experienceControl() {
    return this.stepFourForm.get('experience');
  }

  // Access the selected skills control for validation
  get selectedSkillsControl() {
    return this.stepFourForm.get('selectedSkills');
  }

  // Filter suggested skills based on input
  filterSkills(): void {
    const searchTerm = this.searchQuery.toLowerCase();

    if (searchTerm === '') {
      this.filteredSkills = [...this.Skills]; // Show all skills if no input
    } else {
      this.filteredSkills = this.Skills.filter((skill: any) =>
        skill.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Validate and navigate to the next step
  onNext(): void {
    if (this.stepFourForm.valid) {
      Object.keys(this.stepFourForm.controls).forEach((key) => {
        this.Account.updateFormData(key, this.stepFourForm.get(key)?.value);
      });
      this.router.navigate(['/developer/step-five']);
    } else {
      // Optional: Mark all controls as touched to trigger validation messages
      this.stepFourForm.markAllAsTouched();
    }
  }

  // Navigate to the previous step
  goToPreviousStep(): void {
    this.router.navigate(['/developer/step-three']);
  }
}

