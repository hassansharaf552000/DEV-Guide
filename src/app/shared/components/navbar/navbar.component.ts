import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    isuserExist:boolean = false
  // isloggedUserSubject: BehaviorSubject<boolean>
  constructor(private router: Router) {
    console.log('Hello From hassan again');
    
      // this.isloggedUserSubject = new BehaviorSubject<boolean>(this.isloggedUser())
      // this.isloggedUserSubject.subscribe(value=>{
      // this.isuserExist = value
        
      // })
    }
  
    // isloggedUser(): boolean {
    //   return (localStorage.getItem('bxmnczxhcv') == null) ? false : true
    // }
    // getToken():string{
    //   return localStorage.getItem('bxmnczxhcv') ?? ""
    // }
  
    // userlogin(token: string) {
    //   localStorage.setItem('bxmnczxhcv', token)
    //   this.isloggedUserSubject.next(true)
    // }
    // userlogout() {
    //   localStorage.removeItem('bxmnczxhcv')
    //   this.isloggedUserSubject.next(false)
    // }
  
  onclick() {
    this.router.navigate(['/aboutus']);
  }
  // logout(){
  //   this.userlogout()
  // }
  

  

}
