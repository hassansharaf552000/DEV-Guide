import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css',
})
export class StepTwoComponent implements OnInit {
  stepTwoForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.stepTwoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  onNext(): void {
    if (this.stepTwoForm.valid) {
      this.router.navigate(['/step-three']);
    }
  }

  goToPreviousStep(): void {
    this.router.navigate(['/step-one']);
  }
}
