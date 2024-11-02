import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restpassword: ResetPasswordService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const resetData = this.resetPasswordForm.value;
      this.restpassword.resetPassword(resetData).subscribe({
        next: (response) => {
          this.toastr.success('Password has been reset successfully.', 'Success');
          this.resetPasswordForm.reset();
        },
        error: (err) => {
          this.toastr.error('Failed to reset password. Please check the details.', 'Error');
        }
      });
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}

