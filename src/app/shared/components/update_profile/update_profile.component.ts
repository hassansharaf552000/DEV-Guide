import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../profile';

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

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    // Initialize form
    this.InformationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      price: [null, [Validators.required, Validators.min(5)]],
      level: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      yearsOfExperience: [null, [Validators.required, Validators.min(0), Validators.max(50)]],
      About: ['', [Validators.required, Validators.minLength(500)]],
      image: [Validators.required],
      imagePath: ['', Validators.required],
      cv: [Validators.required],
      cvPath: ['', Validators.required],
    });

    // Load profile data
    this.loadProfileData();
  }

  loadProfileData() {
    this.profileService.getProfile().subscribe(
      (data: Profile) => {
        this.profile = data;

        // Patch the form only after receiving data
        this.InformationForm.patchValue(this.profile);
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
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
      const file = input.files[0];
      this.selectedCV = file;
      this.InformationForm.patchValue({ cv: file });
      this.InformationForm.get('cv')?.markAsTouched();
      this.InformationForm.get('cv')?.markAsDirty();
    }
  }

  onSubmit(): void {
    if (this.InformationForm.valid) {
      // Prepare profile update object
      const updatedProfile: Profile = {
        ...this.InformationForm.value,
        imagePath: this.selectedImage as string,
        cvPath: this.selectedCV ? this.selectedCV.name : this.profile.cvPath,
      };

      // Use the service to send updated profile data
      this.profileService.UpdateProfile(updatedProfile).subscribe(
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
