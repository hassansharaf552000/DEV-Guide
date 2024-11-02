import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../shared/services/review/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  displayedColumns: string[] = ['developerName', 'mentorName', 'rating', 'description'];
  reviews: any[] = [];  // Use 'any[]' to store review data without a specific interface

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe((data: any[]) => { // Set type as 'any[]'
      this.reviews = data;
      console.log("data", data);
      
    });
  }
}