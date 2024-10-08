import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router for navigation
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent implements OnInit {
  loginMethod: string = '';  // Holds either the username or email
  password: string = '';
  rememberMe: boolean = false;  // Flag for Remember Me
  errorMessage: string = '';  // Error message for login failures
  successMessage: string = '';  // Success message for login successes
  passwordVisible: boolean = false;

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
  ngOnInit(): void {
    // Check if localStorage is available in the current environment
    if (this.isBrowser()) {
      const token = localStorage.getItem('authToken');
      if (token) {
        // Handle logged-in state, e.g., redirect or load user data
      }
    }
  }

  constructor(private authService: AuthService, private router: Router) {  // Inject Router
    // Check if credentials are stored in localStorage
    const storedLogin = localStorage.getItem('login');
    const storedPassword = localStorage.getItem('password');
    if (storedLogin && storedPassword) {
      this.loginMethod = storedLogin;
      this.password = storedPassword;
      this.rememberMe = true;  // Pre-check the Remember Me box
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;  // Toggle the visibility
  }

  login() {
    this.authService.login(this.loginMethod, this.password).subscribe({
      next: (response) => {
        if (response && response.token) {
          console.log('Login successful:', response);

          // Handle "Remember Me" functionality
          if (this.rememberMe) {
            localStorage.setItem('login', this.loginMethod);
            localStorage.setItem('password', this.password);
          } else {
            localStorage.removeItem('login');
            localStorage.removeItem('password');
          }

          this.successMessage = 'Login successful! Redirecting to the home page...';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500);
        }
      },
      error: (errorMessage) => {
        console.error('Login failed:', errorMessage);
        this.errorMessage = errorMessage;  // Display the error message
        this.successMessage = '';
      }
    });
  }

}
