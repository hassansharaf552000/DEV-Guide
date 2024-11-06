import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from '../../forget-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget_password',
  templateUrl: './forget_password.component.html',
  styleUrls: ['./forget_password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private forgetPasswordService: ForgetPasswordService,
    private toastr: ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      this.forgetPasswordService.getResetPasswordCode(email).subscribe({
        next: () => {
          this.toastr.success('Password reset code has been sent to your email.', 'Success');
          this.router.navigateByUrl('/resetpassword');
          this.forgotPasswordForm.reset();
        },
        error: (err) => {
          this.toastr.error('Failed to send reset code. Please check your email.', 'Error');
          console.error('Error:', err);
        }
      });
    } else {
      this.forgotPasswordForm.markAllAsTouched();
    }
  }
}
