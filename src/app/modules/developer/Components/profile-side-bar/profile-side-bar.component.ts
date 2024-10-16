import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrl: './profile-side-bar.component.css'
})
export class ProfileSideBarComponent {
  //   profile = {
  //     imageUrl: '01.jpg', // Path to the profile image
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     profileCompletion: 50 // Percentage of profile completion
  //   };
  menuItems = [
    { path: '/developer/profile/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/developer/profile/change-password', label: 'Change Password', icon: 'bi-key' },
    { path: '/developer/profile/skills', label: 'Skills', icon: 'bi-person-check' },
    { path: '/developer/profile/educations', label: 'Education', icon: 'bi-book' },
    { path: '/developer/profile/experiences', label: 'Experience', icon: 'bi-briefcase' },
    { path: '/developer/profile/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },

    { path: '/developer/profile/quizzes', label: 'Quizzes', icon: 'bi bi-question' },
    { path: '/developer/profile/reply', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    { path: '/profile-requests', label: 'Requests', icon: 'bi bi-envelope' },
    { path: '/developer/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
    { path: '/developer/profile/reviews', label: 'Reviews', icon: 'bi bi-star' },

    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  homeItem = { path: '/home', label: 'Back To Home', icon: 'bi bi-house-door-fill' };
  constructor(private router: Router) { }

  logout() {
    this.router.navigate([this.logoutItem.path]);
  }
  backhome() {
    this.router.navigate([this.homeItem.path]);
  }


}
