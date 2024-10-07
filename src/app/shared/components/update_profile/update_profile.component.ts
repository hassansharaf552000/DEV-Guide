import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service'; // Import the ProfileService
import { Profile } from '../../profile';
//import { Profile } from '../profile'; // Import the Profile interface

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css'],
})
export class Update_profileComponent implements OnInit {
  profileForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = '01.jpg'; // Default image
  passwordForm: FormGroup;
  message: string | null = null;
  newPasswordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private profileService: ProfileService // Inject the ProfileService
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

    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: [this.passwordMatchValidator] }
    );
  }

  ngOnInit(): void {
    // Get the existing profile when the component initializes
    this.profileService.getProfile().subscribe((profile) => {
      this.profileForm.patchValue(profile); // Fill the form with the existing profile data
    });
  }

  onUpdatePassword(): void {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword } = this.passwordForm.value;
      // Simulate password update (replace with actual logic)
      this.message = 'Password changed successfully!';
      this.passwordForm.reset();
    } else {
      this.message = 'Please fill in all fields correctly.';
    }
  }

  toggleNewPassword(): void {
    this.newPasswordVisible = !this.newPasswordVisible;
    const newPasswordField = document.querySelector(
      'input[formControlName="newPassword"]'
    ) as HTMLInputElement;
    newPasswordField.type = this.newPasswordVisible ? 'text' : 'password';
  }

  private passwordMatchValidator(group: FormGroup): void {
    const { newPassword, confirmPassword } = group.controls;
    if (newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
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
      this.profileService.updateProfile(updatedProfile).subscribe((profile) => {
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
    // Add your email update logic here
  }
}
