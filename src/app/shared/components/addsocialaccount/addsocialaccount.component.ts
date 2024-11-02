import { SocialAccountService } from './../../services/SocialAccount/social-account.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ISocialAccount, SocialAccountsTypes } from '../../../core/enums/SocialAccount';

@Component({
  selector: 'app-addsocialaccount',
  templateUrl: './addsocialaccount.component.html',
  styleUrls: ['./addsocialaccount.component.css']  // Assuming we have a stylesheet
})
export class AddsocialaccountComponent {
  socialAccountForm: FormGroup;

  // Social media platforms dropdown options
  socialAccountTypes = [
    { value: SocialAccountsTypes.Facebook, viewValue: 'Facebook' },
    { value: SocialAccountsTypes.Linkedin, viewValue: 'LinkedIn' },
    { value: SocialAccountsTypes.GitHub, viewValue: 'GitHub' }
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddsocialaccountComponent>,
    private socialAccountService:SocialAccountService
  ) {
    this.socialAccountForm = this.fb.group({
      SocialName: ['', Validators.required],  // Social media platform selection is required
      SocialLink: ['', [Validators.required, Validators.pattern('(https?://[^\s]+)')]]  // URL validation
    });
  }

  // Handle form submission
  // onSave(): void {
  //   if (this.socialAccountForm.valid) {
  //     const newaccount: ISocialAccount = this.socialAccountForm.value;

  //     // Log the payload before sending the request
  //     console.log('Payload being sent to backend:', newaccount);

  //     this.socialAccountService.addaccount(newaccount).subscribe(
  //       (response: ISocialAccount) => {
  //         console.log('Account added successfully:', response);
  //         this.dialogRef.close(response);  // Close dialog on success
  //       },
  //       (error) => {
  //         console.error('Error adding Account:', error);
  //         console.error('Backend Validation Errors:', error.error?.errors); // Log backend errors
  //       }
  //     );
  //   }
  // }

  onSave(): void {
    if (this.socialAccountForm.valid) {
      const newAccount: ISocialAccount = {
        ...this.socialAccountForm.value,
        SocialName: Number(this.socialAccountForm.value.SocialName) // Ensure SocialName is sent as a number
      };

      this.socialAccountService.addaccount(newAccount).subscribe(
        (response: ISocialAccount) => {
          console.log('Account added successfully:', response);
          this.dialogRef.close(response);
        },
        (error) => {
          console.error('Error adding Account:', error);
          console.error('Backend Validation Errors:', error.error.errors); // Log validation errors for debugging
        }
      );
    } else {
      console.warn('Form is invalid:', this.socialAccountForm.errors);
    }
  }



  // Close modal without saving
  onCancel(): void {
    this.dialogRef.close();
  }
}
