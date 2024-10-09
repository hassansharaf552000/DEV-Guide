import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
     // Retrieve the token from localStorage
     const token = localStorage.getItem('bxmnczxhcv');

     // Clone the request and add the Authorization header if the token exists
     let authReq = req;
     console.log("token",token);
     
     if (token) {
       authReq = req.clone({
         setHeaders: {
           Authorization: `Bearer ${token}`
         }
       });
     }
     console.log("in iterceptor",authReq);
     
 
     // Pass the request to the next handler and catch any errors
     return next(authReq).pipe(
       catchError((error: HttpErrorResponse) => {
         // Handle error globally, e.g., log out the user or show an alert
         if (error.status === 401) {
           console.error('Unauthorized request!');
           // Redirect to login page or refresh token logic can go here
         }
         return throwError(error);
       })
     );

};
