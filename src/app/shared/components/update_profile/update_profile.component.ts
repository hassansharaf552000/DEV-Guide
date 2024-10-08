import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service'; // Import the ProfileService
import { Profile } from '../../profile';
import { ChangePassword } from '../../change-password';
import { AuthService } from '../../services/Auth/auth.service';
//import { Profile } from '../profile'; // Import the Profile interface

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css'],
})
export class Update_profileComponent implements OnInit {
  profileForm: FormGroup;
  changepasswordform: FormGroup;
  selectedImage: string | ArrayBuffer | null = '01.jpg'; // Default image
  
  message: string | null = null;
  newPasswordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private profileService: ProfileService ,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      id: [''], // Add id field for the profile
      name: ['', Validators.required],
      cv: [''],
      country: [''],
      degree: [''],
      fieldOfStudy: [''],
      university: [''],
      countryOfStudy: [''],
      startDate: [''],
      endDate: [''],
      yearsOfExperience: [''],
      level: [''],
      image: [''],
      price: [undefined],
    });
    this.changepasswordform = this.fb.group({
      CurrentPassword: ['', Validators.required],
      Newpassword: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    });
  
    

  }


  ngOnInit(): void {
    // Get the existing profile when the component initializes
    
  }

  ChangePassword(): void {
    if (this.changepasswordform.invalid) {
      alert('Form is invalid!');
      return;
    }
  
    const changepasswordValues = this.changepasswordform.value;
  
    // Ensure passwords match
    if (changepasswordValues.Newpassword !== changepasswordValues.ConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Call the AuthService to change the password
    this.profileService.ChangePassword(changepasswordValues).subscribe(
      response => {
        alert('Password changed successfully!');
      },
      error => {
        alert('Error changing password.');
      }
    );
  }
  

  

  onImageChange(event: Event): void {
    console.log('onImageChange triggered', event);

    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      console.log('Selected file:', file);

      reader.onload = () => {
        console.log('FileReader result:', reader.result);
        this.selectedImage = reader.result;
        // Update the form value for the image
        this.profileForm.patchValue({ image: this.selectedImage });
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsDataURL(file);
    } else {
      console.warn('No file selected');
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedProfile: Profile = this.profileForm.value; // Get the updated profile data
      this.profileService.UpdateProfile(updatedProfile).subscribe((profile) => {
        console.log('Profile updated:', profile);
      });

    } else {
      console.log('Form is invalid');
    }
  }

  onConnectGoogle() {
    console.log('Google connect clicked');
    // Add your Google connection logic here
  }

  onConnectLinkedIn() {
    console.log('LinkedIn connect clicked');
    // Add your LinkedIn connection logic here
  }

  onConnectFacebook() {
    console.log('Facebook connect clicked');
    // Add your Facebook connection logic here
  }

  onUpdateEmail() {
    console.log('Email update submitted');
    
  }
  selectedFileName: string | null = null;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }
}
