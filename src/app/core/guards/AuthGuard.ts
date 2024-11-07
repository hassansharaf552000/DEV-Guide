import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';

export const AdminGuard: CanActivateFn = (route, state) => {
  console.log(state.url);
  const toaster = inject(ToastrService)
  const serv = inject(AuthService)
  const router = inject(Router)
  let role = serv.getStoredRole()
  let token = serv.getToken()
  console.log(role, token);
  if (token != null && role != null && role == "Admin") {
    return true;
  }
  else {
    router.navigate(['/login', state.url])
    alert('Sorry You Can NOT See This Page')

    return false;
  }
};
export const DeveloperGuard: CanActivateFn = (route, state) => {
  console.log(state.url);
  const serv = inject(AuthService)
  const router = inject(Router)
  const toaster = inject(ToastrService)
  let role = serv.getStoredRole()
  let token = serv.getToken()
  console.log(role, token);
  if (token != null && role != null && role == "Developer") {
    return true;
  }
  else {

    router.navigate(['/login', state.url])
    alert('Sorry You Can NOT See This Page')
    return false;
  }
};

export const MentorGuard: CanActivateFn = (route, state) => {
  console.log(state.url);
  const serv = inject(AuthService)
  const toaster = inject(ToastrService)

  const router = inject(Router)
  let role = serv.getStoredRole()
  let token = serv.getToken()
  console.log(role, token);
  if (token != null && role != null && role == "Mentor") {
    return true;
  }
  else {

    router.navigate(['/login', state.url])
    alert('Sorry You Can NOT See This Page')

    return false;
  }
};

export const HRGuard: CanActivateFn = (route, state) => {
  console.log(state.url);
  const toaster = inject(ToastrService)
  const serv = inject(AuthService)
  const router = inject(Router)
  let role = serv.getStoredRole()
  let token = serv.getToken()
  console.log(role, token);
  if (token != null && role != null && role == "HR") {
    return true;
  }
  else {

    router.navigate(['/login', state.url])
    alert('Sorry You Can NOT See This Page')
    return false;

  }

};


export const TokenGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  // Define routes that should be accessible without a token
  const publicRoutes = ['/login', '/register'];

  // Check if the requested route is in the list of public routes
  if (publicRoutes.some(publicRoute => state.url.startsWith(publicRoute))) {
    // Allow access to public routes without a token
    return true;
  }

  // Redirect to the developer module if no token is found for other routes
  if (!token) {
    router.navigate(['/developer']);
    return false;
  }

  // Allow navigation if token exists
  return true;


};


