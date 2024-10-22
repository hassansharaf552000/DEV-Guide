import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../../../shared/services/Account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clientsfeedbacks = [
    { id: 1, imgURL: '01.jpg', name: 'John Doe', rate: 4, comment: 'This is a great product' },
    { id: 2, imgURL: '10.jpg', name: 'Adham Hamdy', rate: 3, comment: 'This is a great product' },
    { id: 3, imgURL: '05 (1).jpg', name: 'Dina John', rate: 4, comment: 'This is a great product' },
    { id: 4, imgURL: '04.jpg', name: 'Hassan Sharaf', rate: 5, comment: 'This is a great product' },
    { id: 5, imgURL: '06.jpg', name: 'Mirna Alfy', rate: 4, comment: 'This is a great product' },
    // Add more items as needed
  ];

  carouselOptions = {
    loop: true,                  // Enables infinite looping
    margin: 10,                  // Space between items
    nav: true,                   // Show next/prev navigation
    dots: true,                  // Enable dot navigation
    autoplay: true,              // Auto-play enabled
    autoplayTimeout: 3000,       // Auto-slide every 3 seconds
    autoplayHoverPause: true,    // Pause autoplay on hover
    responsive: {
      0: { items: 1 },           // 1 item on smaller screens
      600: { items: 2 },         // 2 items on medium screens
      1000: { items: 3 }         // 3 items on larger screens
    }
  };
  topmen:any[]
  similarMentors:any[]
  constructor(private AccService:AccountService) {
    this.AccService.getall('', 'Mentor',"", 0, 0, null, 1,5).subscribe(mentors => {
      this.similarMentors=mentors.Data;
      console.log("3-mentors",mentors.Data);  // This will return 3 mentors with the required skills and title
      this.topmen=this.similarMentors.sort((a: any, b: any) => b.AverageRate - a.AverageRate).slice(0, 3);
    });
   // this.getTopMentors();

  }
  
  // Call getall and get the top 3 mentors with the highest rate
getTopMentors(): void {
  this.AccService.getall('', '', '', 0, 0, null, 1, 100, [], '')
    .subscribe(response => {
      if (response && response.data) {
        // Sort mentors by their rate in descending order
        const sortedMentors = response.data.sort((a: any, b: any) => b.rate - a.rate);

        // Get the top 3 mentors
        const topMentors = sortedMentors.slice(0, 3);
this.topmen=topMentors
        // Now you have the top 3 mentors with the highest average rate
        console.log('Top 3 Mentors:', topMentors);
      }
    });
}


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

  
}
