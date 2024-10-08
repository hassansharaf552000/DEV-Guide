// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-step-four',
//   templateUrl: './step-four.component.html',
//   styleUrls: ['./step-four.component.css']
// })
// export class StepFourComponent implements OnInit {
//   stepFourForm!: FormGroup;
//   skills = [
//     { id: 1, name: 'JavaScript' },
//     { id: 2, name: 'Angular' },
//     { id: 3, name: 'React' },
//     { id: 4, name: 'CSS' },
//     // Add more skills as needed
//   ];

//   constructor(private fb: FormBuilder, private router: Router) {}

//   ngOnInit(): void {
//     this.stepFourForm = this.fb.group({
//       experience: ['', Validators.required],
//       skills: [[], Validators.required] // Initialize as an empty array for multiple selections
//     });
//   }

//   onNext(): void {
//     if (this.stepFourForm.valid) {
//       console.log(this.stepFourForm.value);
//       // Handle the form data (e.g., save to service, navigate to next step)
//       this.router.navigate(['/developer/step-five']);
//     }
//   }

//   goToPreviousStep(): void {
//     this.router.navigate(['/developer/step-three']);
//   }

//   // Custom method to handle changes in the skills select
//   onSkillsChange(event: Event): void {
//     const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
//     const values: string[] = [];
//     for (let i = 0; i < selectedOptions.length; i++) {
//       values.push(selectedOptions[i].value);
//     }
//     this.stepFourForm.get('skills')?.setValue(values);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { SkillService } from '../../../../shared/services/Skill/skill.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.css',
})
export class StepFourComponent implements OnInit {
  stepFourForm!: FormGroup;
  Skills :any[] = []
  // skills = [
  //   { id: 'angular', name: 'Angular' },
  //   { id: 'react', name: 'React' },
  //   { id: 'vue', name: 'Vue' },
  //   { id: 'node', name: 'Node.js' },
  //   // Add more skills as needed
  // ];

  constructor(private fb: FormBuilder, private router: Router,private Account:AccountService,private SkillService:SkillService) {
    this.SkillService.getAll().subscribe((res:any)=>{
      this.Skills = res
    })
  }

  ngOnInit(): void {
    this.stepFourForm = this.fb.group({
      experience: ['', Validators.required],
      // role: ['', Validators.required],
      skills: [[], Validators.required],
    });
  }

  onNext(): void {
    if (this.stepFourForm.valid) {
      for (const element in this.stepFourForm.controls) {
        Object.keys(this.stepFourForm.controls).forEach((key) => {
          this.Account.updateFormData(key, this.stepFourForm.get(key)?.value);
        });
        // this.Account.updateFormData(element,this.stepFourForm.controls[element] )
        console.log(element);
        console.log(this.stepFourForm.controls[element]);
        
      }
      this.router.navigate(['/developer/step-five']);
    }
  }

  goToPreviousStep(): void {
    this.router.navigate(['/developer/step-three']);
  }
}
