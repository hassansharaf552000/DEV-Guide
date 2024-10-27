// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { ProfileService } from '../../services/profile.service';
// import { Profile } from '../../profile';

// @Component({
//   selector: 'app-update_profile',
//   templateUrl: './update_profile.component.html',
//   styleUrls: ['./update_profile.component.css'],
// })
// export class Update_ProfileComponent implements OnInit {
//   InformationForm: FormGroup;
//   profile!: Profile;
//   selectedImage: string | ArrayBuffer | null = null;
//   selectedCV: File | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private profileService: ProfileService
//   ) {
//     this.InformationForm = this.fb.group({
//       firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
//       lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
//       title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
//       // price: [null, [Validators.required, Validators.min(5)]],
//       level: ["", Validators.required],
//       country: ["", Validators.required],
//       phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
//       yearsOfExperience: ["", [Validators.required, Validators.min(0), Validators.max(50)]],
//       About: ["", [Validators.required]],

//     });
//    }

//   ngOnInit(): void {
//     // Initialize form

//     // Load profile data
//     this.loadProfileData();
//   }
//   buildform() {
//     this.InformationForm = this.fb.group({
//       firstName: [this.profile.FirstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
//       lastName: [this.profile.LastName, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
//       title: [this.profile.Title, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
//       // price: [null, [Validators.required, Validators.min(5)]],
//       level: [this.profile.Level, Validators.required],
//       country: [this.profile.Country, Validators.required],
//       phoneNumber: [this.profile.PhoneNumber, [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
//       yearsOfExperience: [this.profile.YearsOfExperience, [Validators.required, Validators.min(0), Validators.max(50)]],
//       About: [this.profile.About, [Validators.required, Validators.minLength(50)]],

//     });
//   }
//   loadProfileData() {
//     this.profileService.getProfile().subscribe(
//       (data: Profile) => {
//         this.profile = data;
//         console.log(data);
//         this.buildform()
//       },
//       (error) => {
//         console.error('Error fetching profile:', error);
//       }
//     );
//   }

//   onImageChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       const img = new Image();
//       const reader = new FileReader();

//       reader.onload = (e: any) => {
//         img.src = e.target.result;

//         img.onload = () => {
//           const width = img.width;
//           const height = img.height;
//           const requiredWidth = 300; // Example size
//           const requiredHeight = 300;

//           if (width <= requiredWidth && height <= requiredHeight) {
//             this.selectedImage = e.target.result;
//           } else {
//             alert(`Invalid image size. Please upload an image with ${requiredWidth}x${requiredHeight} dimensions.`);
//           }
//         };
//       };

//       reader.readAsDataURL(file);
//     }
//   }

//   onCVChange(event: Event): void {
//     const input = event.target as HTMLInputElement;

//     if (input.files && input.files[0]) {
//       const file = input.files[0];
//       this.selectedCV = file;
//       this.InformationForm.patchValue({ cv: file });
//       this.InformationForm.get('cv')?.markAsTouched();
//       this.InformationForm.get('cv')?.markAsDirty();
//     }
//   }

//   onSubmit(): void {
//     if (this.InformationForm.valid) {
//       // Prepare profile update object
//       const updatedProfile: Profile = {
//         ...this.InformationForm.value,
//         imagePath: this.selectedImage as string,
//         cvPath: this.selectedCV ? this.selectedCV.name : this.profile.CVPath,
//       };

//       // Use the service to send updated profile data
//       this.profileService.UpdateProfile(updatedProfile).subscribe(
//         (updatedProfile: Profile) => {
//           this.profile = updatedProfile;
//           console.log('Profile updated successfully');
//         },
//         (error) => {
//           console.error('Error updating profile:', error);
//         }
//       );
//     } else {
//       this.InformationForm.markAllAsTouched();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../profile';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css'],
})
export class Update_ProfileComponent implements OnInit {
  InformationForm: FormGroup;
  profile!: Profile;
  selectedImage: string | ArrayBuffer | null = null;
  selectedCV: File | null = null;
  cvFileName: string | null = null; // Add a property to store the CV file name

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authservice: AuthService
  ) {
    this.InformationForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      title: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      level: ["", Validators.required],
      country: ["", Validators.required],
      phoneNumber: ["", [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      yearsOfExperience: ["", [Validators.required, Validators.min(0), Validators.max(50)]],
      About: ["", [Validators.required]],
      cv: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Load profile data
    this.loadProfileData();
  }

  buildform() {
    this.InformationForm.patchValue({
      firstName: this.profile.FirstName,
      lastName: this.profile.LastName,
      title: this.profile.Title,
      level: this.profile.Level,
      country: this.profile.Country,
      phoneNumber: this.profile.PhoneNumber,
      yearsOfExperience: this.profile.YearsOfExperience,
      About: this.profile.About,
      cv:this.profile.CVPath

    });
  }

  loadProfileData() {
    this.authservice.getProfile().subscribe(
      (data: Profile) => {
        this.profile = data;
        console.log(data);
        this.buildform();
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        img.src = e.target.result;

        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const requiredWidth = 300; // Example size
          const requiredHeight = 300;

          if (width <= requiredWidth && height <= requiredHeight) {
            this.selectedImage = e.target.result;
          } else {
            alert(`Invalid image size. Please upload an image with ${requiredWidth}x${requiredHeight} dimensions.`);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  }

  onCVChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      this.selectedCV = input.files[0];
      this.cvFileName = this.selectedCV.name; // Store the CV file name
      this.InformationForm.patchValue({ cv: this.selectedCV });
      this.InformationForm.get('cv')?.markAsTouched();
      this.InformationForm.get('cv')?.markAsDirty();
    }
  }

  onSubmit(): void {
    if (this.InformationForm.valid) {
      // Prepare FormData for the updated profile
      const formData = new FormData();

      formData.append('FirstName', this.InformationForm.get('firstName')?.value);
      formData.append('LastName', this.InformationForm.get('lastName')?.value);
      formData.append('Title', this.InformationForm.get('title')?.value);
      formData.append('Level', this.InformationForm.get('level')?.value);
      formData.append('Country', this.InformationForm.get('country')?.value);
      formData.append('PhoneNumber', this.InformationForm.get('phoneNumber')?.value);
      formData.append('YearsOfExperience', this.InformationForm.get('yearsOfExperience')?.value);
      formData.append('About', this.InformationForm.get('About')?.value);

      // Append Image file if available
      if (this.selectedImage instanceof File) {
        formData.append('Image', this.selectedImage); // Image is a File object
      }

      // Append CV file if available
      if (this.selectedCV instanceof File) {
        formData.append('CV', this.selectedCV); // CV is a File object
      }

      // Use the profile service to send the form data
      this.authservice.UpdateProfile(formData).subscribe(
        (updatedProfile: Profile) => {
          this.profile = updatedProfile;
          console.log('Profile updated successfully');
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    } else {
      this.InformationForm.markAllAsTouched();
    }
  }


}
