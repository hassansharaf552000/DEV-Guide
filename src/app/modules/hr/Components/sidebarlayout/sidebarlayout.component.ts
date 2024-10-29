import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/services/Auth/auth.service';
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
    { path: '/hr/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/hr/change-password', label: 'Change Password', icon: 'bi-key' },
    { path: '/hr/skills', label: 'Skills', icon: 'bi-person-check' },
    { path: '/hr/educations', label: 'Education', icon: 'bi-book' },
    { path: '/hr/experiences', label: 'Experience', icon: 'bi-briefcase' },
    { path: '/hr/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },

    { path: '/hr/quizzes', label: 'Completed Quizzes', icon: 'bi bi-question' },

    { path: '/hr/Quizzes', label: ' Quizzes List', icon: 'bi bi-question' },
    // { path: '/hr/hr-request', label: 'Queries', icon: 'bi bi-chat-square-dots' },
    { path: '/hr/schedule', label: 'Schedule', icon: 'bi bi-envelope' },

    // { path: '/hr/queryanswers', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },

    // { path: '/settings', label: 'Settings', icon: 'bi bi-gear' },

    { path: '/hr/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
    { path: '/hr/reviews', label: 'Reviews', icon: 'bi bi-star' },

    { path: '/hr/hr-payments', label: 'Payments', icon: 'bi bi-wallet2' },


    { path: '/hr/contact_admin', label: 'Contact Admin', icon: 'bi bi-envelope-open' },

    //{ path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' }

    // { path: '/hr/queryanswers', label: 'Queries Answers', icon: 'bi bi-chat-dots' },
    { path: '/hr/Sessions', label: 'Sessions', icon: 'bi bi-calendar-event' },
    { path: '/hr/contact-hr', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
    { path: '/hr/schedule', label: 'Schedule', icon: 'bi bi-calendar-check-fill' },
    { path: '/hr/reviews', label: 'Reviews', icon: 'bi bi-star-fill' }

  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  homeItem = { path: '/home', label: 'Back To Home', icon: 'bi bi-house-door-fill' };
  isSidebarOpen = false;  // Sidebar is closed by default
  isuserExist:boolean = false
  userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router,private authServ:AuthService) {
    this.authServ.userlogin(this.authServ.getToken()??"")
    this.authServ.isloggedUserSubject.subscribe(value=>{
    this.isuserExist = value
    })
  }

  ngOnInit() {
    //this.checkScreenWidth();
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
  }

  // Function to toggle sidebar on button click
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Function to close sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  checkUserLogin(): void {
    const token = this.authServ.getToken() // Assuming the token is stored in localStorage
    this.isuserExist = !!token;

    // Set user image and name if user is logged in and data exists
    if (this.isuserExist) {

    }
  }
  backhome(){
    this.router.navigate([this.homeItem.path]);
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

