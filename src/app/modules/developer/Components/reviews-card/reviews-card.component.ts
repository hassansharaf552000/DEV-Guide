import { Component, Input } from '@angular/core';
import { IReview } from '../../../../core/enums/Review';

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrl: './reviews-card.component.css'
})
export class ReviewsCardComponent {
  @Input() review!:IReview
}
