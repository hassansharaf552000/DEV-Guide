import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrl: './step-five.component.css',
})
export class StepFiveComponent implements OnInit {
  basicInfo: any;
  education: any;
  technicalSkills: any;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    // Subscribe to the BehaviorSubject to get the form data from previous steps
    const formData = this.accountService.getFormData();

    // Extract data from formData and assign it to variables for rendering in the template
    this.basicInfo = {
      firstName: formData.get('firstName') || 'John',
      lastName: formData.get('lastName') || 'Doe',
      country: formData.get('country') || 'USA',
      city: formData.get('city') || 'New York',
      phone: formData.get('phone') || '1234567890',
    };

    this.education = {
      university: formData.get('university') || 'Harvard University',
      country: formData.get('educationCountry') || 'USA',
      degree: formData.get('degree') || 'Bachelor',
      fieldOfStudy: formData.get('fieldOfStudy') || 'Computer Science',
      startYear: formData.get('startYear') || '2015',
      startMonth: formData.get('startMonth') || 'September',
      endYear: formData.get('endYear') || '2019',
      endMonth: formData.get('endMonth') || 'June',
      currentlyStudying: formData.get('currentlyStudying') || false,
    };

    this.technicalSkills = {
      experience: formData.get('experience') || 5,
      role: formData.get('role') || 'Developer',
      skills: formData.get('skills') || ['Angular', 'React', 'Node.js'],
    };
  }

  editSection(step: string): void {
    this.router.navigate([`/${step}`]);
  }

  goToPreviousStep(): void {
    this.router.navigate(['/developer/step-four']);
  }

  submitProfile(): void {
    // Handle form submission
    console.log('Profile submitted:', {
      basicInfo: this.basicInfo,
      education: this.education,
      technicalSkills: this.technicalSkills,
    });

    // Send form data to the server via the AccountService
    this.accountService.CompleteProfile(this.accountService.formData.value).subscribe(
      (res:any)=>{
        console.log(res);
        
        if(res.success == true){
          this.accountService.CompleteProfile(res.result)
        } 
      },
      (err)=>{
        console.log(err);
        alert("Sorry try again leter")
      }
    );
  }
}
// export class StepFiveComponent implements OnInit {
//   basicInfo: any;
//   education: any;
//   technicalSkills: any;

//   constructor(private router: Router,private Account:AccountService) {}

//   ngOnInit(): void {
//     // Retrieve the data from previous steps (using a service or directly from storage)
//     this.basicInfo = {
//       firstName: 'John',
//       lastName: 'Doe',
//       country: 'USA',
//       city: 'New York',
//       phone: '1234567890',
//     };

//     this.education = {
//       university: 'Harvard University',
//       country: 'USA',
//       degree: 'Bachelor',
//       fieldOfStudy: 'Computer Science',
//       startYear: '2015',
//       startMonth: 'September',
//       endYear: '2019',
//       endMonth: 'June',
//       currentlyStudying: false,
//     };

//     this.technicalSkills = {
//       experience: 5,
//       role: 'Developer',
//       skills: ['Angular', 'React', 'Node.js'],
//     };
//   }

//   editSection(step: string): void {
//     this.router.navigate([`/${step}`]);
//   }

//   goToPreviousStep(): void {
//     this.router.navigate(['/developer/step-four']);
//   }

//   submitProfile(): void {
//     // Handle form submission
//     console.log('Profile submitted:', {
//       basicInfo: this.basicInfo,
//       education: this.education,
//       technicalSkills: this.technicalSkills,
//     });
//     // Redirect to a success page or perform further actions
//   }
// }
