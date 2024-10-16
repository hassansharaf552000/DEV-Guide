import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  returnUrl = '/home';

  constructor(
    private authService: AuthService,
    private router: Router,
    private builder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.builder.group({
      LoginMethod: ['', Validators.required],  // For Username or Email
      Password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
      RememberMe: [false]  // Added RememberMe control
    });
  }

  ngOnInit(): void {}



  // login() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //     this.authService.login(this.form.value).subscribe({
  //       next: (res: any) => {
  //         if (res.Success === true) {
  //           this.authService.userlogin(res.result);
  //           this.router.navigateByUrl(this.returnUrl);
  //           this.toastr.success('Successfully logged in!', 'Success');
  //         } else {
  //           this.toastr.error('Login failed. Please try again.', 'Error');
  //         }
  //       },
  //       error: (err) => {
  //         console.log(err);
  //         this.toastr.error('Sorry, please try again later', 'Login Failed');
  //       }
  //     });
  //   } else {
  //     this.toastr.error('Please check your inputs', 'Validation Error');
  //   }
  // }

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (res: any) => {
          if (res.Success === true && res.Result) {
            console.log('JWT Token:', res.Result);  // Log the token to confirm
            this.authService.userlogin(res.Result);  // Use the token
            this.router.navigateByUrl(this.returnUrl);
            this.toastr.success('Successfully logged in!', 'Success');
          } else {
            this.toastr.error('Login failed. Please try again.', 'Error');
          }
        },
        error: (err) => {
          console.log(err);
          this.toastr.error('Sorry, please try again later', 'Login Failed');
        }
      });
    } else {
      this.toastr.error('Please check your inputs', 'Validation Error');
    }
  }

}
