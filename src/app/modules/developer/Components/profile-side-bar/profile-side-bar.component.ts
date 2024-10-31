import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/Auth/auth.service';

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
    { path: '/developer/profile/reviews', label: 'Feedbacks', icon: 'fa-regular fa-comment' },

    { path: '/developer/profile/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },

    { path: '/developer/profile/quizzes', label: 'Quizzes', icon: 'bi bi-question' },
    { path: '/developer/profile/reply', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    // { path: '/profile-requests', label: 'Requests', icon: 'bi bi-envelope' },

    // { path: '/developer/profile/answer-query', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },

    // { path: '/settings', label: 'Settings', icon: 'bi bi-gear' },

    { path: '/developer/profile/Sessions', label: 'Sessions', icon: 'bi bi-calendar-check' },
    // { path: '/developer/profile/reviews', label: 'Reviews', icon: 'bi bi-star' },

    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  homeItem = { path: '/home', label: 'Back To Home', icon: 'bi bi-house-door-fill' };
  constructor(private router: Router,private authServ:AuthService ) { }

  logout(){
    this.authServ.userlogout()
    this.router.navigate([this.logoutItem.path]);
  }
  backhome() {
    this.router.navigate([this.homeItem.path]);
  }


}
