import { AuthService } from './../../../../shared/services/Auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  getTopratedmentorURL = "http://localhost:5164/api/Account/Mentors"
  getTopratedhrURL = "http://localhost:5164/api/Account/HRs"

  mentors: any[] = [];
  HRs: any[] = [];

  constructor(private http: HttpClient, private authServe: AuthService, private router: Router) {
    let role = this.authServe.getStoredRole();
    let token = this.authServe.getToken();
    console.log(role, token);

    if (token != null && role == "Mentor") {
      this.router.navigateByUrl("/mentor")
    }
    else if (token != null && role == "Admin") {
      this.router.navigateByUrl("/admin")
    }
    else if (token != null && role == "HR") {
      this.router.navigateByUrl("/hr")
    } else {
      this.getMentors();
      this.getHRs();
    }

  }

  // ngOnInit() {
  //   this.getMentors();
  //   this.getHRs();

  // }

  // Function to call the backend API and retrieve queries
  getMentors() {
    this.http.get<any>(this.getTopratedmentorURL).subscribe(
      (data) => {
        console.log('mentors', data[0]);

        this.mentors = data;
        console.log('mentors', data[0]);
      },
      (error) => {
        console.error('Error fetching user queries:', error);
      }
    );
  }
  getHRs() {
    this.http.get<any>(this.getTopratedhrURL).subscribe(
      (data) => {
        console.log('HRs', data);

        this.HRs = data;
      },
      (error) => {
        console.error('Error fetching user queries:', error);
      }
    );
  }
}















// clientsfeedbacks = [
//   { id: 1, imgURL: '01.jpg', name: 'John Doe', rate: 4, comment: 'This is a great product' },
//   { id: 2, imgURL: '10.jpg', name: 'Adham Hamdy', rate: 3, comment: 'This is a great product' },
//   { id: 3, imgURL: '05 (1).jpg', name: 'Dina John', rate: 4, comment: 'This is a great product' },
//   { id: 4, imgURL: '04.jpg', name: 'Hassan Sharaf', rate: 5, comment: 'This is a great product' },
//   { id: 5, imgURL: '06.jpg', name: 'Mirna Alfy', rate: 4, comment: 'This is a great product' },
//   // Add more items as needed
// ];

// carouselOptions = {
//   loop: true,                  // Enables infinite looping
//   margin: 10,                  // Space between items
//   nav: true,                   // Show next/prev navigation
//   dots: true,                  // Enable dot navigation
//   autoplay: true,              // Auto-play enabled
//   autoplayTimeout: 3000,       // Auto-slide every 3 seconds
//   autoplayHoverPause: true,    // Pause autoplay on hover
//   responsive: {
//     0: { items: 1 },           // 1 item on smaller screens
//     600: { items: 2 },         // 2 items on medium screens
//     1000: { items: 3 }         // 3 items on larger screens
//   }
// };



// currentSlide = 0;
// intervalId: any;
// Math=Math;

// ngOnInit() {
//   // Start auto-slide every 3 seconds
//   this.intervalId = setInterval(() => {
//     this.nextSlide();
//   }, 3000);
// }

// ngOnDestroy() {
//   // Clear the interval when the component is destroyed
//   if (this.intervalId) {
//     clearInterval(this.intervalId);
//   }
// }

// nextSlide() {
//   // Move one card at a time, check if it's the last item
//   if (this.currentSlide < this.clientsfeedbacks.length - 3) {
//     this.currentSlide++;
//   } else {
//     this.currentSlide = 0; // Loop back to the first set of items
//   }
// }

// prevSlide() {
//   // Move backward
//   if (this.currentSlide > 0) {
//     this.currentSlide--;
//   } else {
//     this.currentSlide = this.clientsfeedbacks.length - 3; // Loop to the last set
//   }
// }

// goToSlide(index: number) {
//   this.currentSlide = index;
// }

// getSlide() {
//   return this.clientsfeedbacks[this.i];
// }

// getPrev() {
//   this.i == 0 ? (this.i = this.clientsfeedbacks.length - 1) : this.i--;
// }

// getNext() {
//   this.i < this.clientsfeedbacks.length - 1 ? this.i++ : (this.i = 0);
// }

