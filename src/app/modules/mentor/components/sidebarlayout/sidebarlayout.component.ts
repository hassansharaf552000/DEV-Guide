import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/services/Auth/auth.service';

@Component({
  selector: 'app-mentorsidebarlayout',
  templateUrl: './sidebarlayout.component.html',
  styleUrls: ['./sidebarlayout.component.css']
})
export class SidebarlayoutComponent {
  profile = {
    imageUrl: '01.jpg', // Path to the profile image
    name: 'John Doe',
    email: 'johndoe@example.com',
    profileCompletion: 50 // Percentage of profile completion
  };
  menuItems = [
    { path: '/mentor/home', label: 'Profile', icon: 'bi bi-person' },
    { path: '/mentor/updateprofile', label: 'Edit Profile', icon: 'bi bi-pencil-square' },
    { path: '/mentor/change-password', label: 'Change Password', icon: 'bi-key' },
    { path: '/mentor/skills', label: 'Skills', icon: 'bi-person-check' },
    { path: '/mentor/educations', label: 'Education', icon: 'bi-book' },
    { path: '/mentor/experiences', label: 'Experience', icon: 'bi-briefcase' },
    { path: '/mentor/socialaccounts', label: 'Social Accounts', icon: 'bi-share' },
    { path: '/mentor/quizzes', label: 'Completed Quizzes', icon: 'bi bi-question' },
    { path: '/mentor/Quizzes', label: ' Quizzes List', icon: 'bi bi-question' },
    { path: '/mentor/schedule', label: 'Schedule', icon: 'bi bi-envelope' },
    { path: '/mentor/queryanswers', label: 'Answers of Query', icon: 'fa-regular fa-comment-dots' },
    { path: '/mentor/booking', label: 'Sessions', icon: 'bi bi-calendar-check' },
    { path: '/mentor/reviews', label: 'Reviews', icon: 'bi bi-star' },
    { path: '/mentor/mentor-payments', label: 'Payments', icon: 'bi bi-wallet2' },
    // { path: '/mentor/profile', label: 'Profile', icon: 'bi bi-person-circle' },
    { path: '/mentor/queryanswers', label: 'Queries', icon: 'bi bi-chat-dots' },
    // { path: '/mentor/Sessions', label: 'Sessions', icon: 'bi bi-calendar-event' },
    { path: '/mentor/contact_admin', label: 'Contact Admin', icon: 'bi bi-envelope-open' },
  ];
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };

  isSidebarOpen = false;  // Sidebar is closed by default

  isuserExist: boolean = false
  userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private authServ: AuthService) {
    this.authServ.userlogin(this.authServ.getToken() ?? "",this.authServ.getStoredRole()??"")
    this.authServ.isloggedUserSubject.subscribe(value => {
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
  checkUserLogin(): void {
    const token = this.authServ.getToken() // Assuming the token is stored in localStorage
    this.isuserExist = !!token;

    // Set user image and name if user is logged in and data exists
    if (this.isuserExist) {

    }
  }

  // Function to toggle sidebar on button click
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // backhome(){
  //   this.router.navigate([this.homeItem.path]);
  // }
  // Function to close sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  logout() {
    this.authServ.userlogout()
    this.router.navigate([this.logoutItem.path]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
