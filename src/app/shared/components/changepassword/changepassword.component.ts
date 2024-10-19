// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProfileService } from '../../services/profile.service';

// @Component({
//   selector: 'app-changepassword',
//   templateUrl: './changepassword.component.html',
//   styleUrl: './changepassword.component.css'
// })
// export class ChangepasswordComponent {
//   changePasswordForm!: FormGroup;
//   oldPasswordFromService: string = ''; // To store the old password fetched from service

//   constructor(private fb: FormBuilder, private profileService: ProfileService) {}

//   ngOnInit(): void {
//     // Fetch old password from service
//     // this.profileService.getOldPassword().subscribe((oldPassword: string) => {
//     //   this.oldPasswordFromService = oldPassword;
//     // });

//     // Initialize the form
//     this.changePasswordForm = this.fb.group({
//       CurrentPassword: ['', [Validators.required, this.validateOldPassword.bind(this)]], // Custom validator to compare old password
//       NewPassword: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')
//         ]
//       ],
//       ConfirmPassword: ['', [Validators.required]]
//     }, { validators: this.passwordsMatchValidator }); // Custom validator to ensure passwords match
//   }

//   // Custom validator to ensure the new and confirm password fields match
//   passwordsMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
//     const newPassword = group.get('NewPassword')?.value;
//     const confirmPassword = group.get('ConfirmPassword')?.value;

//     return newPassword === confirmPassword ? null : { 'passwordsMismatch': true };
//   }

//   // Custom validator to compare old password
//   validateOldPassword(control: AbstractControl): { [key: string]: boolean } | null {
//     return control.value === this.oldPasswordFromService ? null : { 'incorrectOldPassword': true };
//   }

//   onSubmit(): void {
//     if (this.changePasswordForm.valid) {
//       const newPassword = this.changePasswordForm.get('NewPassword')?.value;

//       // Call service to update the password
//       // this.profileService.updatePassword(newPassword).subscribe(() => {
//       //   console.log('Password updated successfully');
//       //   // Optionally, you can reset the form or display a success message
//       // });
//     } else {
//       // Mark all fields as touched to show validation errors
//       this.changePasswordForm.markAllAsTouched();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { ToastrService } from 'ngx-toastr'; // Import toastr for notifications
import { AuthService } from '../../services/Auth/auth.service';
import { ChangePassword } from '../../change-password';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  oldPasswordFromService: string = ''; // To store the old password fetched from service

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService, // Inject ProfileService
    private toastr: ToastrService // Inject Toastr for notifications
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.changePasswordForm = this.fb.group({
      CurrentPassword: ['', [Validators.required]], // Custom validator for old password
      NewPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$') // Password pattern
        ]
      ],
      ConfirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator }); // Custom validator for password match

    // Uncomment and complete if you fetch old password from service
    // this.profileService.getOldPassword().subscribe((oldPassword: string) => {
    //   this.oldPasswordFromService = oldPassword;
    // });
  }

  // Custom validator to ensure the new and confirm password fields match
  passwordsMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = group.get('NewPassword')?.value;
    const confirmPassword = group.get('ConfirmPassword')?.value;
    return newPassword === confirmPassword ? null : { 'passwordsMismatch': true };
  }

  // Custom validator to compare old password
  validateOldPassword(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === this.oldPasswordFromService ? null : { 'incorrectOldPassword': true };
  }

  // Function to handle form submission
  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const currentPassword = this.changePasswordForm.get('CurrentPassword')?.value;
      const newPassword = this.changePasswordForm.get('NewPassword')?.value;
      const confirmPassword = this.changePasswordForm.get('ConfirmPassword')?.value;

      // Prepare the object matching the ChangePassword interface
      const changePasswordData: ChangePassword = {
        CurrentPassword: currentPassword,
        NewPassword: newPassword,
        ConfirmPassword: confirmPassword
      };

      // Call the service to change the password
      this.authservice.ChangePasswordgit(changePasswordData).subscribe({
        next: (response) => {
          this.toastr.success('Password changed successfully!', 'Success'); // Show success notification
          this.changePasswordForm.reset(); // Optionally reset the form after success
        },
        error: (err) => {
          console.error('Error changing password:', err);
          this.toastr.error('Failed to change password. Please try again.', 'Error');
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.changePasswordForm.markAllAsTouched();
    }
  }

}
