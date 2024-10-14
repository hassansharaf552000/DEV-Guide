import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  changePasswordForm!: FormGroup;
  oldPasswordFromService: string = ''; // To store the old password fetched from service

  constructor(private fb: FormBuilder, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Fetch old password from service
    // this.profileService.getOldPassword().subscribe((oldPassword: string) => {
    //   this.oldPasswordFromService = oldPassword;
    // });

    // Initialize the form
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, this.validateOldPassword.bind(this)]], // Custom validator to compare old password
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')
        ]
      ],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator }); // Custom validator to ensure passwords match
  }

  // Custom validator to ensure the new and confirm password fields match
  passwordsMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { 'passwordsMismatch': true };
  }

  // Custom validator to compare old password
  validateOldPassword(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === this.oldPasswordFromService ? null : { 'incorrectOldPassword': true };
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      const newPassword = this.changePasswordForm.get('newPassword')?.value;

      // Call service to update the password
      // this.profileService.updatePassword(newPassword).subscribe(() => {
      //   console.log('Password updated successfully');
      //   // Optionally, you can reset the form or display a success message
      // });
    } else {
      // Mark all fields as touched to show validation errors
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
