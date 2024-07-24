import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {
    console.log('Hello From hassan again');
  }
  onclick() {
    this.router.navigate(['/aboutus']);
  }
}
