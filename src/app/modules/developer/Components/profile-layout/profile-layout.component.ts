import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css'
})
export class ProfileLayoutComponent {
  isSidebarOpen = false;  // Sidebar is closed by default for mobile
  isMobile = false;       // Flag to check if it's mobile or tablet view
  menuItems = [
    { path: '/developer/profile/Developer', label: 'Profile', icon: 'bi bi-person' },
    { path: '/developer/profile/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/developer/profile/quizzes', label: 'Quizzes', icon: 'bi bi-question' },
    { path: '/developer/profile/reply', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    // { path: '/profile-requests', label: 'Requests', icon: 'bi bi-envelope' },
    // { path: '/developer/profile/answer-query', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },
    { path: '/developer/profile/Sessions', label: 'Sessions', icon: 'bi bi-calendar-check' },
    // { path: '/developer/profile/reviews', label: 'Reviews', icon: 'bi bi-star' },

    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  ];
  logoutItem = { path: '/login/home', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  homeItem = { path: '/home', label: 'Back To Home', icon: 'bi bi-house-door-fill' };

  ngOnInit() {
    this.checkScreenWidth();
  }

 //Listener to detect window resizing
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  // Check screen size and handle sidebar behavior
  checkScreenWidth() {
     this.isMobile = window.innerWidth < 768;  // Detect if screen width is less than 768px (Bootstrap's `md` breakpoint)

    if (!this.isMobile) {
      this.isSidebarOpen = true;  // Keep the sidebar open on larger screens
    } else {
      this.isSidebarOpen = false;  // Automatically close the sidebar if on mobile
    }
  }

  // Function to toggle sidebar on button click
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Close sidebar after navigation in mobile view
  closeSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
  constructor(private router: Router) {}
  // Logout function
  logout(){
    this.router.navigate([this.logoutItem.path]);
  }
  backhome(){
    this.router.navigate([this.homeItem.path]);
  }
}
