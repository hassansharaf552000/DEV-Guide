// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from '../../shared/services/Auth/auth.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class MentorGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     // if (this.authService.isLoggedIn()) {
//     //   return true;
//     // } else {
//     //   // Redirect to login page if not logged in
//     //   this.router.navigate(['/login']);
//     //   return false;
//     // }
//     return true;
//   }

//   // canActivate(): Observable<boolean> {
//   //   return this.authService.isloggedUserSubject.pipe(
//   //     take(1),
//   //     map(isLoggedIn => {
//   //       if (isLoggedIn) {
//   //         return true;
//   //       } else {
//   //         this.router.navigate(['/login']);
//   //         return false;
//   //       }
//   //     })
//   //   );
//   // }


// }
