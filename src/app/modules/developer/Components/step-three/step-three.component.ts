import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.css',
})
export class StepThreeComponent implements OnInit {
  stepThreeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.stepThreeForm = this.fb.group({
      university: ['', Validators.required],
      country: ['', Validators.required],
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startYear: ['', Validators.required],
      startMonth: ['', Validators.required],
      endYear: ['', Validators.required],
      endMonth: ['', Validators.required],
      currentlyStudying: [false],
    });
  }

  onNext(): void {
    if (this.stepThreeForm.valid) {
      this.router.navigate(['/developer/step-four']);
    }
  }

  goToPreviousStep(): void {
    this.router.navigate(['/developer/step-two']);
  }
}
