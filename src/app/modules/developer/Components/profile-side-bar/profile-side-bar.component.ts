import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrl: './profile-side-bar.component.css'
})
export class ProfileSideBarComponent {
  profile = {
    imageUrl: '01.jpg', // Path to the profile image
    name: 'John Doe',
    email: 'johndoe@example.com',
    profileCompletion: 50 // Percentage of profile completion
  };
  menuItems = [
    { path: '/profile', label: 'Profile', icon: 'bi bi-person' },
    { path: '/developer/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/developer/quiz', label: 'Quizzes', icon: 'bi bi-question-circle' },
    { path: '/developer/query', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    { path: '/profile-requests', label: 'Requests', icon: 'bi bi-envelope' },
    { path: '/settings', label: 'Settings', icon: 'bi bi-gear' },
    { path: '/developer/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
    { path: '/developer/reviews', label: 'Reviews', icon: 'bi bi-star' },
    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  constructor(private router: Router) {}

logout(){
  this.router.navigate([this.logoutItem.path]);
}


}
