import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrl: './step-five.component.css',
})
export class StepFiveComponent implements OnInit {
  basicInfo: any;
  education: any;
  technicalSkills: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the data from previous steps (using a service or directly from storage)
    this.basicInfo = {
      firstName: 'John',
      lastName: 'Doe',
      country: 'USA',
      city: 'New York',
      phone: '1234567890',
    };

    this.education = {
      university: 'Harvard University',
      country: 'USA',
      degree: 'Bachelor',
      fieldOfStudy: 'Computer Science',
      startYear: '2015',
      startMonth: 'September',
      endYear: '2019',
      endMonth: 'June',
      currentlyStudying: false,
    };

    this.technicalSkills = {
      experience: 5,
      role: 'Developer',
      skills: ['Angular', 'React', 'Node.js'],
    };
  }

  editSection(step: string): void {
    this.router.navigate([`/${step}`]);
  }

  goToPreviousStep(): void {
    this.router.navigate(['/step-four']);
  }

  submitProfile(): void {
    // Handle form submission
    console.log('Profile submitted:', {
      basicInfo: this.basicInfo,
      education: this.education,
      technicalSkills: this.technicalSkills,
    });
    // Redirect to a success page or perform further actions
  }
}
