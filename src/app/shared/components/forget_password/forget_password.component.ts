import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../../services/forgetPassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget_password',
  templateUrl: './forget_password.component.html',
  styleUrls: ['./forget_password.component.css'],
})
export class Forget_passwordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  constructor(
    private fb: FormBuilder,
    // private forgotPasswordService: ForgetPasswordService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}
  // onSubmit(): void {
  //   if (this.forgotPasswordForm.valid) {
  //     this.forgotPasswordService
  //       .requestPasswordReset(this.forgotPasswordForm.value.email)
  //       .subscribe((response) => {
  //         this.successMessage = 'Password reset link sent to your email!';
  //       });
  //   }
  // }
}
