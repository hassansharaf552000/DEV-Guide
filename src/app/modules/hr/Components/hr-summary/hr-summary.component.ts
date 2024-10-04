import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-summary',
  templateUrl: './hr-summary.component.html',
  styleUrl: './hr-summary.component.css'
})
export class HrSummaryComponent {
  hr = {
    name: 'Jitu Chauhan',
    title: 'Software Engineer at Apple',
    rating: 5.0,
    reviews: 16,
    mentees: 40,
    location: 'Gujarat, India',
    price: 125.0,
    skills: [
      'Frontend',
      'HTML',
      'CSS',
      'React',
      'JavaScript',
      'Vue.js',
      'Next.js',
    ],
    profileImage: '04.jpg',
    nextAvailableDate: 'Tuesday, June 05, 2025',
    about: `An award-winning designer with 7+ years of experience in UX design, product design, and branding.
            I've mentored and placed students in design jobs in the US, Europe, Japan, and India. I'm on a mission
            to unleash design maestros, fueling their creative superpowers, unlocking awesome full-time gigs, and
            igniting their industry influence through mind-blowing creative adventures!`,
  };

  similarHRs = [
    {
      name: 'Jessica Abney',
      title: 'Frontend Engineer',
      experience: '2 yrs',
      rating: 5.0,
      reviews: 34,
      price: 65,
      profileImage: '04.jpg',
    },
    {
      name: 'James Anderson',
      title: 'UI/UX Designer',
      experience: '3 yrs',
      rating: 4.5,
      reviews: 3,
      price: 35,
      profileImage: '02.jpg',
    },
    {
      name: 'Cathy Diehl',
      title: 'Software Engineer',
      experience: '5 yrs',
      rating: 5.0,
      reviews: 112,
      price: 215,
      profileImage: '01.jpg',
    },
    {
      name: 'Patrice Long',
      title: 'Software Engineer',
      experience: '5 yrs',
      rating: 5.0,
      reviews: 44,
      price: 25,
      profileImage: '06.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
