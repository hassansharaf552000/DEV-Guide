import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/Auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrl: './adminsidebar.component.css'
})
export class AdminsidebarComponent {

  isSidebarOpen = false;  // Sidebar is closed by default

  isuserExist:boolean = false
  userName:string
    // userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();
  logoutItem = { path: '/login', label: 'Logout', icon: 'bi bi-box-arrow-right' };
  constructor(private router: Router,private authServ:AuthService ) {

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
  checkUserLogin(): void {
    const token = this.authServ.getToken() // Assuming the token is stored in localStorage
    this.isuserExist = !!token;

    // Set user image and name if user is logged in and data exists
    if (this.isuserExist) {

    }
  }

  logout(){
    this.authServ.userlogout()
    this.router.navigate([this.logoutItem.path]);
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}
}
