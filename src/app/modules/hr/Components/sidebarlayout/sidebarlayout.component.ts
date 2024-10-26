import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebarlayout',
  templateUrl: './sidebarlayout.component.html',
  styleUrl: './sidebarlayout.component.css'
})
export class SidebarlayoutComponent {
  profile = {
    imageUrl: '01.jpg', // Path to the profile image
    name: 'John Doe',
    email: 'johndoe@example.com',
    profileCompletion: 50 // Percentage of profile completion
  };
  menuItems = [
    // here
    { path: '/hr/profile', label: 'Profile', icon: 'bi bi-person-circle' },
    { path: '/hr/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil' },
    { path: '/hr/hr-payments', label: 'Payments', icon: 'bi bi-wallet2' },
    { path: '/hr/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
    { path: '/hr/Sessions', label: 'Sessions', icon: 'bi bi-calendar-event' },
    { path: '/hr/contact-hr', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
    { path: '/hr/schedule', label: 'Schedule', icon: 'bi bi-calendar-check-fill' },
    { path: '/hr/reviews', label: 'Reviews', icon: 'bi bi-star-fill' }
  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  isSidebarOpen = false;  // Sidebar is closed by default

  constructor(private router: Router) {}

  // Function to toggle sidebar on button click
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Function to close sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  // Logout function
  logout() {
    this.router.navigate([this.logoutItem.path]);
  }
}

