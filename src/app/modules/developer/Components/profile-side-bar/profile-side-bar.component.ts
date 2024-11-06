import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/services/Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-side-bar',
  templateUrl: './profile-side-bar.component.html',
  styleUrl: './profile-side-bar.component.css'
})
export class ProfileSideBarComponent {
  //   profile = {
      imageUrl: '01.jpg'// Path to the profile image
      userName:string
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     profileCompletion: 50 // Percentage of profile completion
  //   };
  menuItems = [
    { path: '/developer/profile/Developer', label: 'Profile', icon: 'bi bi-person' },
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

  isSidebarOpen = false;  // Sidebar is closed by default

  isuserExist:boolean = false
    // userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router,private authServ:AuthService ) {
    this.authServ.userlogin(this.authServ.getToken()??"",this.authServ.getStoredRole()??"")
    this.authServ.isloggedUserSubject.subscribe(value=>{
    this.isuserExist = value
    })
   }

  logout(){
    this.authServ.userlogout()
    this.router.navigate([this.logoutItem.path]);
  }
  backhome() {
    this.router.navigate([this.homeItem.path]);
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

  // Function to close sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  }



  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}



}
