import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ProfileService } from '../../services/profile.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private fb: FormBuilder,private http: HttpClient,private fb1: FormBuilder) {
    this.profileForm = this.fb.group({
      UserName: ['' , Validators.required],
      job_Title: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
      PersonalDetails: ['', Validators.required],
      Skills: ['', Validators.required],
      Experience: ['', Validators.required],
      Portfolio: ['', Validators.required],
      // Add other form controls here if needed
    });
    this.passwordForm = this.fb1.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: [this.passwordMatchValidator] });
  }
  onUpdatePassword(): void {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword } = this.passwordForm.value;
      // Simulate password update (replace with actual logic)
      this.message = 'Password changed successfully!';
      // Clear the form fields
      this.passwordForm.reset();
    } else {
      this.message = 'Please fill in all fields correctly.';
    }
  }
  toggleNewPassword(): void {
    this.newPasswordVisible = !this.newPasswordVisible;
    const newPasswordField = document.querySelector('input[formControlName="newPassword"]') as HTMLInputElement;
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


  ngOnInit(): void {}

  onImageChange(event: Event): void {
    // Log the event to ensure it's being triggered
    console.log('onImageChange triggered', event);
  
    const input = event.target as HTMLInputElement;
  
    // Ensure that the input element has files selected
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      // Log the selected file for debugging
      console.log('Selected file:', file);
  
      // Handle the file read success
      reader.onload = () => {
        // Log the result of the file reader
        console.log('FileReader result:', reader.result);
  
        // Update the selectedImage variable with the file's data URL
        this.selectedImage = reader.result;
      };
  
      // Handle errors during file reading
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
  
      // Read the file as a data URL
      reader.readAsDataURL(file);
    } else {
      // Log if no file was selected
      console.warn('No file selected');
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
  onConnectGoogle() {
    // Implement the logic here
    console.log('Facebook connect clicked');
    this.http.post('https://api.FaceBook.com/v2/me', {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`
      }
    }).subscribe(response => {
      console.log('LinkedIn connection successful', response);
    }, error => {
      console.error('LinkedIn connection failed', error);
    });
    
  }
    // Method to handle LinkedIn connect button click
    onConnectLinkedIn() {
      // Implement the logic here
      console.log('LinkedIn connect clicked');
      this.http.post('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`
        }
      }).subscribe(response => {
        console.log('LinkedIn connection successful', response);
      }, error => {
        console.error('LinkedIn connection failed', error);
      });
    }
  
  
    // Method to handle Facebook connect button click
    onConnectFacebook() {
      // Implement the logic here
      console.log('Facebook connect clicked');
      this.http.post('https://api.FaceBook.com/v2/me', {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`
        }
      }).subscribe(response => {
        console.log('LinkedIn connection successful', response);
      }, error => {
        console.error('LinkedIn connection failed', error);
      });
      
    }
  
    // Method to handle email update form submission
    onUpdateEmail() {
      // Implement the logic here
      console.log('Email update submitted');
    }
 
 
}
