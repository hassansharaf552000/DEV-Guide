import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hrlayout',
  templateUrl: './hrlayout.component.html',
  styleUrl: './hrlayout.component.css'
})
export class HrlayoutComponent {
  isSidebarOpen = false;  // Sidebar is closed by default for mobile
  isMobile = false;       // Flag to check if it's mobile or tablet view
  menuItems = [
    { path: '/hr/profile', label: 'Profile', icon: 'bi bi-person-circle' },
    { path: '/hr/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil' },
    { path: '/hr/hr-payments', label: 'Payments', icon: 'bi bi-wallet2' },
    { path: '/hr/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
    { path: '/hr/session-details', label: 'Sessions', icon: 'bi bi-calendar-event' },
    { path: '/hr/contact-hr', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
    { path: '/hr/schedule', label: 'Schedule', icon: 'bi bi-calendar-check-fill' },
    { path: '/hr/reviews', label: 'Reviews', icon: 'bi bi-star-fill' }
  ];

  ngOnInit() {
    this.checkScreenWidth();
  }

  // Listener to detect window resizing
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.checkScreenWidth();
  // }

  // Check screen size and handle sidebar behavior
  checkScreenWidth() {
    // this.isMobile = window.innerWidth < 768;  // Detect if screen width is less than 768px (Bootstrap's `md` breakpoint)

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
