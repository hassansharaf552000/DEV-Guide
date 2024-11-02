import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    isuserExist:boolean = false
    userName: string | null = null;
  userImageUrl: string | null = null;
  private subscriptions: Subscription = new Subscription();
  private tokenKey = 'authToken';
  constructor(private router: Router,private authServ:AuthService) {
      this.authServ.userlogin(this.authServ.getToken()??"")
      this.authServ.isloggedUserSubject.subscribe(value=>{
      this.isuserExist = value
      })
    }

    ngOnInit(): void {
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



  onclick() {
    this.router.navigate(['/aboutus']);
  }
  logout(){
    this.authServ.userlogout()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}




}
