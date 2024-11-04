// import { Component, OnInit } from '@angular/core';
// import { ReviewService } from '../../../shared/services/review/review.service';

// @Component({
//   selector: 'app-reviews',
//   templateUrl: './reviews.component.html',
//   styleUrl: './reviews.component.css'
// })
// export class ReviewsComponent implements OnInit {
//   displayedColumns: string[] = ['developerName', 'mentorName', 'rating', 'description'];
//   reviews: any[] = [];  // Use 'any[]' to store review data without a specific interface

//   constructor(private reviewService: ReviewService) {}

//   ngOnInit(): void {
//     this.reviewService.getReviews().subscribe((data: any[]) => { // Set type as 'any[]'
//       this.reviews = data;
//       console.log("data", data);
      
//     });
//   }
// }
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ReviewService } from '../../../shared/services/review/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @ViewChild('starRatingContainer', { static: true }) starRatingContainer!: ElementRef;
  displayedColumns: string[] = ['developerName', 'mentorName', 'rating', 'description'];
  reviews: any[] = [];
  filteredReviews: any[] = [];

  developerFilter: string = '';
  mentorFilter: string = '';
  ratingFilter: number | null = null;
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private reviewService: ReviewService,private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe((data: any[]) => {
      this.reviews = data;
      this.filteredReviews = data;
    });
  }

  

  // applyFilter(): void {
  //   this.filteredReviews = this.reviews.filter(review => {
  //     const matchesDeveloper = this.developerFilter
  //       ? `${review.DeveloperFirstName} ${review.DeveloperLastName}`
  //           .toLowerCase()
  //           .includes(this.developerFilter.toLowerCase())
  //       : true;
  //     const matchesMentor = this.mentorFilter
  //       ? `${review.MentorFirstName} ${review.MentorLastName}`
  //           .toLowerCase()
  //           .includes(this.mentorFilter.toLowerCase())
  //       : true;
  //     const matchesRating = this.ratingFilter
  //       ? review.Rating === this.ratingFilter
  //       : true;

  //     return matchesDeveloper && matchesMentor && matchesRating;
  //   });
  // }


  applyFilter(): void {
    const ratingFilterValue = this.ratingFilter ? +this.ratingFilter : null; // Convert to number if set
  
    this.filteredReviews = this.reviews.filter(review => {
      const matchesDeveloper = this.developerFilter
        ? `${review.DeveloperFirstName} ${review.DeveloperLastName}`
            .toLowerCase()
            .includes(this.developerFilter.toLowerCase())
        : true;
      const matchesMentor = this.mentorFilter
        ? `${review.MentorFirstName} ${review.MentorLastName}`
            .toLowerCase()
            .includes(this.mentorFilter.toLowerCase())
        : true;
      const matchesRating = ratingFilterValue !== null
        ? review.Rating === ratingFilterValue
        : true;
  
      return matchesDeveloper && matchesMentor && matchesRating;
    });
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.starRatingContainer.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.ratingFilter = null; // Reset the rating filter
      this.applyFilter(); // Reapply filter to update displayed results
    }
  }
  
}
