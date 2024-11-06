
import { AuthService } from '../../../../shared/services/Auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-mentorlayout',
  templateUrl: './mentorlayout.component.html',
  styleUrls: ['./mentorlayout.component.css']
})
export class MentorlayoutComponent {
  isSidebarOpen = false;  // Sidebar is closed by default for mobile
  isMobile = false;       // Flag to check if it's mobile or tablet view
  // menuItems = [
  //   { path: '/mentor/profile', label: 'Profile', icon: 'bi bi-person-circle' },
  //   { path: '/mentor/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil' },
  //   { path: '/mentor/mentor-payments', label: 'Payments', icon: 'bi bi-wallet2' },
  //   { path: '/mentor/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
  //   { path: '/mentor/session-details', label: 'Sessions', icon: 'bi bi-calendar-event' },
  //   { path: '/mentor/contact_admin', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
  //   { path: '/mentor/schedule', label: 'Schedule', icon: 'bi bi-calendar-check-fill' },
  //   { path: '/mentor/reviews', label: 'Reviews', icon: 'bi bi-star-fill' }
  // ];

  // menuItems = [
  //   { path: '/mentor/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
  //   { path: '/mentor/change-password', label: 'Change Password', icon: 'bi-key' },
  //   { path: '/mentor/skills', label: 'Skills', icon: 'bi-person-check' },
  //   { path: '/mentor/educations', label: 'Education', icon: 'bi-book' },
  //   { path: '/mentor/experiences', label: 'Experience', icon: 'bi-briefcase' },
  //   { path: '/mentor/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },

  //   { path: '/mentor/quizzes', label: 'Quizzes', icon: 'bi bi-question' },
  //   { path: '/mentor/reply', label: 'Queries', icon: 'bi bi-chat-square-dots' },
  //   { path: '/profile-requests', label: 'Requests', icon: 'bi bi-envelope' },

  //   { path: '/mentor/answer-query', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },

  //   // { path: '/settings', label: 'Settings', icon: 'bi bi-gear' },

  //   { path: '/mentor/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
  //   { path: '/mentor/reviews', label: 'Reviews', icon: 'bi bi-star' },

  //   //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  // ];

  menuItems = [
    { path: '/hr/home', label: 'Profile', icon: 'bi bi-person' },
    { path: '/mentor/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/mentor/change-password', label: 'Change Password', icon: 'bi-key' },
    { path: '/mentor/skills', label: 'Skills', icon: 'bi-person-check' },
    { path: '/mentor/educations', label: 'Education', icon: 'bi-book' },
    { path: '/mentor/experiences', label: 'Experience', icon: 'bi-briefcase' },
    { path: '/mentor/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },

    { path: '/mentor/quizzes', label: 'Quizzes', icon: 'bi bi-question' },
    { path: '/mentor/mentor-request', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    { path: '/mentor/schedule', label: 'Schedule', icon: 'bi bi-envelope' },

    { path: '/mentor/queryanswers', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },

    // { path: '/settings', label: 'Settings', icon: 'bi bi-gear' },

    { path: '/mentor/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
    { path: '/mentor/reviews', label: 'Reviews', icon: 'bi bi-star' },

    { path: '/mentor/mentor-payments', label: 'Payments', icon: 'bi bi-wallet2' },



    { path: '/mentor/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
    { path: '/mentor/Sessions', label: 'Sessions', icon: 'bi bi-calendar-event' },

    { path: '/mentor/contact_admin', label: 'Contact Admin', icon: 'bi bi-envelope-open' },

    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }
  ];

  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };

  isuserExist:boolean = false
    userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router,private authServ:AuthService,@Inject(PLATFORM_ID) private platformId: any,private cdRef: ChangeDetectorRef){
    this.authServ.userlogin(this.authServ.getToken()??"",this.authServ.getStoredRole())
    this.authServ.isloggedUserSubject.subscribe(value=>{
    this.isuserExist = value
    })
  }

  ngOnInit() {
    this.checkScreenWidth();
    this.checkUserLogin();
      this.subscriptions.add(
          this.authServ.isloggedUserSubject.subscribe(isLoggedIn => {
              this.isuserExist = isLoggedIn;
              if (this.isuserExist) {
                  this.subscriptions.add(
                      this.authServ.userProfileSubject.subscribe(profile => {
                          if (profile) {
                              this.userName = profile.FirstName;
                              this.userImageUrl = profile.ImagePath;
                          }
                      })
                  );
              } else {
                  this.userName = null;
                  this.userImageUrl = null;
              }
          })
      );
      this.cdRef.detectChanges();
    }

  // constructor(@Inject(PLATFORM_ID) private platformId: any,private cdRef: ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.checkScreenWidth();


  // }

  checkUserLogin(): void {
    const token = this.authServ.getToken() // Assuming the token is stored in localStorage
    this.isuserExist = !!token;

    // Set user image and name if user is logged in and data exists
    if (this.isuserExist) {

    }
  }


  // Listener to detect window resizing
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
    this.checkScreenWidth();
    }
  }

  // Check screen size and handle sidebar behavior
  checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;  // Detect if screen width is less than 768px (Bootstrap's `md` breakpoint)

      if (!this.isMobile) {
        this.isSidebarOpen = true;  // Keep the sidebar open on larger screens
      } else {
        this.isSidebarOpen = false;  // Automatically close the sidebar if on mobile
      }
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
    this.authServ.userlogout()
    this.router.navigate([this.logoutItem.path]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}
}
