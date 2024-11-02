import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/Account/account.service';
import { Profile } from '../../../modules/developer/interfaces/Profile';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrl: './step-five.component.css',
})
export class StepFiveComponent {
  Country: any
  Level: any
  YearsOfExperience: any
  About: any
  Title: any
  PhoneNumber: any
  Image: any
  CV: any
  numbers=1;
  constructor(private router: Router, public accountService: AccountService, private toastr: ToastrService) {
    // Subscribe to the BehaviorSubject to get the form data from previous steps
    const formData = this.accountService.getFormData();

    // Extract data from formData and assign it to variables for rendering in the template

    this.CV = formData.get('CV')
    this.Image = formData.get('Image')
    this.Country = formData.get('Country')
    this.Title = formData.get('Title')
    this.About = formData.get('About')
    this.Level = formData.get('Level')
    this.YearsOfExperience = formData.get('YearsOfExperience')
    this.PhoneNumber = formData.get('PhoneNumber')
  }

  editSection(step: string): void {
    this.router.navigate([`/${step}`]);
  }

  goToPreviousStep(): void {
    this.router.navigate(['/step-four']);
  }

  // submitProfile(): void {
  //   // Send form data to the server via the AccountService
  //   this.accountService.CompleteProfile().subscribe({
  //     next: (res: any) => {
  //       console.log("CompleteProfile response:", res);

  //       // Check if the response has the necessary fields (Success and Roles)
  //       if (res && res.Success && res.Result && res.Result.Roles) {
  //         const userRole = res.Result.Roles[0];
  //         console.log('User Role:', userRole);

  //         // Process and save education data
  //         this.accountService.Educations.forEach(newEducation => {
  //           this.accountService.AddEducation(newEducation).subscribe({
  //             next: (edRes) => {
  //               console.log('Education saved:', edRes);
  //             },
  //             error: (edRes) => {
  //               console.error('Error saving education:', edRes);
  //             }
  //           });
  //         });

  //         // Process and save experience data
  //         this.accountService.Experiences.forEach(newExperience => {
  //           this.accountService.AddExperience(newExperience).subscribe({
  //             next: (expRes) => {
  //               console.log('Experience saved:', expRes);
  //             },
  //             error: (expRes) => {
  //               console.error('Error saving experience:', expRes);
  //             }
  //           });
  //         });

  //         // Route based on the user role
  //         switch (userRole) {
  //           case 'Developer':
  //             this.router.navigateByUrl('/developer/');
  //             break;
  //           case 'HR':
  //             this.router.navigateByUrl('/hr/');
  //             break;
  //           case 'Mentor':
  //             this.router.navigateByUrl('/mentor/');
  //             break;
  //           default:
  //             this.router.navigateByUrl('/home');
  //             break;
  //         }
  //       } else {
  //         // Handle invalid response
  //         console.error("Invalid response structure:", res);
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error occurred while completing the profile:', err);
  //       alert('Sorry, try again later');
  //     }
  //   });
  // }

  submitProfile(): void {
    // Send form data to the server via the AccountService
    this.accountService.CompleteProfile().subscribe({
      next: (res: any) => {
        console.log("CompleteProfile response:", res);

        // Check if the response has the necessary fields (Success and Role)
        if (res && res.Success && res.Role && Array.isArray(res.Role)) {
          const userRole = res.Role[0];
          console.log('User Role:', userRole);

          // Save education and experience data using forkJoin
          const educationObservables = this.accountService.Educations.map(newEducation =>
            this.accountService.AddEducation(newEducation)
          );

          const experienceObservables = this.accountService.Experiences.map(newExperience =>
            this.accountService.AddExperience(newExperience)
          );

          // Use forkJoin to wait for all save operations to complete
          forkJoin([...educationObservables, ...experienceObservables]).subscribe({
            next: (results) => {
              console.log('All education and experience data saved:', results);

              // After saving, route based on the user role
              switch (userRole) {
                case 'Developer':
                  this.router.navigateByUrl('/developer');
                  break;
                case 'HR':
                  this.router.navigateByUrl('/hr');
                  break;
                case 'Mentor':
                  this.router.navigateByUrl('/mentor');
                  break;
                default:
                  this.router.navigateByUrl('/home');
                  break;
              }

              this.toastr.success('Profile completed successfully!', 'Success');
            },
            error: (err) => {
              console.error('Error occurred while saving data:', err);
              this.toastr.error('Failed to save profile data. Please try again later.', 'Error');
        console.log("skills",this.accountService.skills);

            }
          });
        } else {
          // Handle invalid response
          console.error("Invalid response structure:", res);
          this.toastr.error('Invalid response from server. Please try again.', 'Error');
        console.log("skills",this.accountService.skills);

        }
      },
      error: (err) => {
        console.error('Error occurred while completing the profile:', err);
        this.toastr.error('Sorry, please try again later.', 'Error');
        console.log("skills",this.accountService.skills);
        
      }
    });
  }


navigateToRoleModule(role: string): void {
  //const userRole = res.Result.Roles[0]
  if(role === 'HR') {
  this.router.navigate(['/hr/']);  // HR Module
} else if (role === 'Developer') {
  this.router.navigate(['/developer/']);  // Developer Module
} else if (role === 'Mentor') {
  this.router.navigate(['/mentor/']);  // Mentor Module
} else {
  console.error('Unknown role, cannot navigate');
}
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
