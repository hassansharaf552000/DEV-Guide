import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IQuiz } from '../../../core/enums/Quiz';

@Component({
  selector: 'app-finish-quiz',
  templateUrl: './finish-quiz.component.html',
  styleUrls: ['./finish-quiz.component.css'], // Corrected 'styleUrls'
})
export class FinishQuizComponent {
  selectedRating: number = 0;
  feedbackText: string = '';
  message: string = '';
  score: number = 0;
  quiz:IQuiz


  constructor(private router: Router,private cdr: ChangeDetectorRef) {
    // Retrieve state data from router
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { message: string; score: number };
    if (state) {
      this.message = state.message;
      this.score = state.score;
    }
  }

  ngOnInit(): void {}



  // Method to handle rating selection
  rateExperience(rating: number): void {
    this.selectedRating = rating;
    this.cdr.detectChanges(); // Ensure Angular detects changes
  }

  // Method to handle text change
  onFeedbackTextChange(text: string): void {
    this.feedbackText = text;
    this.cdr.detectChanges(); // Ensure Angular detects changes
  }

  // Method to check if the form is valid
  feedbackFormValid(): boolean {
    return this.selectedRating > 0;
  }

  // Method to handle form submission
  submitFeedback(): void {
    console.log('Form valid:', this.feedbackFormValid());
    if (this.feedbackFormValid()) {
      alert('Thank you for your feedback!');
      // Implement submission logic here
    } else {
      console.log('Form is invalid.');
    }
  }
}
