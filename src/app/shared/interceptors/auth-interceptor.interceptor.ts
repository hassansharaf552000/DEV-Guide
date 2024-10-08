import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable()
export class authInterceptorInterceptor implements HttpInterceptor   {





  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('authToken');

    // Clone the request and add the Authorization header if the token exists
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pass the request to the next handler and catch any errors
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error globally, e.g., log out the user or show an alert
        if (error.status === 401) {
          console.error('Unauthorized request!');
          // Redirect to login page or refresh token logic can go here
        }
        return throwError(error);
      })
    );
  }


};
