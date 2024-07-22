import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css',
})
export class StepOneComponent {
  constructor(private router: Router) {}

  goToNextStep() {
    this.router.navigate(['/step-two']);
  }
}
