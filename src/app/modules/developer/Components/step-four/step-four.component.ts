import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.css',
})
export class StepFourComponent implements OnInit {
  stepFourForm!: FormGroup;
  skills = [
    { id: 'angular', name: 'Angular' },
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue' },
    { id: 'node', name: 'Node.js' },
    // Add more skills as needed
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.stepFourForm = this.fb.group({
      experience: ['', Validators.required],
      role: ['', Validators.required],
      skills: [[], Validators.required],
    });
  }

  onNext(): void {
    if (this.stepFourForm.valid) {
      this.router.navigate(['/developer/step-five']);
    }
  }

  goToPreviousStep(): void {
    this.router.navigate(['/developer/step-three']);
  }
}
