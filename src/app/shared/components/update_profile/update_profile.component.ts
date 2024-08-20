import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css'],
})
export class Update_profileComponent implements OnInit {
  profileForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = '01.jpg'; // Default image

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      UserName: ['', Validators.required],
      job_Title: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      PersonalDetails: ['', Validators.required],
      Skills: ['', Validators.required],
      Experience: ['', Validators.required],
      Portfolio: ['', Validators.required],
      // Add other form controls here if needed
    });
  }

  ngOnInit(): void {}

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Perform your form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
 
}
