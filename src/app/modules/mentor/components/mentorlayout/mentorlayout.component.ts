import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mentorlayout',
  templateUrl: './mentorlayout.component.html',
  styleUrls: ['./mentorlayout.component.css']
})
export class MentorlayoutComponent {
  isSidebarOpen = false;  // Sidebar is closed by default for mobile
  isMobile = false;       // Flag to check if it's mobile or tablet view
  menuItems = [
    { path: '/mentor/profile', label: 'Profile', icon: 'bi bi-person-circle' },
    { path: '/mentor/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil' },
    { path: '/mentor/mentor-payments', label: 'Payments', icon: 'bi bi-wallet2' },
    { path: '/mentor/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
    { path: '/mentor/session-details', label: 'Sessions', icon: 'bi bi-calendar-event' },
    { path: '/mentor/contact_admin', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
    { path: '/mentor/schedule', label: 'Schedule', icon: 'bi bi-calendar-check-fill' },
    { path: '/mentor/reviews', label: 'Reviews', icon: 'bi bi-star-fill' }
  ];

  ngOnInit() {
    this.checkScreenWidth();
  }

  // Listener to detect window resizing
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  // Check screen size and handle sidebar behavior
  checkScreenWidth() {
    //this.isMobile = window.innerWidth < 768;  // Detect if screen width is less than 768px (Bootstrap's `md` breakpoint)

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

  // Logout function
  logout() {
    // Implement your logout logic here
  }
}
