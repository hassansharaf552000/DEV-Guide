import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-assessments',
  templateUrl: './skill-assessments.component.html',
  styleUrl: './skill-assessments.component.css',
})
export class SkillAssessmentsComponent {
  cards = [
    {
      title: 'Computer Fundamentals',
      description: 'Put your tech skills to the test!',
      image: 'skill 1.jpg',
      link: '/computer-fundamentals',
      category: 'computer-fundamentals',
    },
    {
      title: 'CN (Computer Network)',
      description: 'Test your fundamentals first!',
      image: 'skill 2.jpg',
      link: '/cn',
      category: 'cn',
    },
    {
      title: 'DSA (Data Structures & Algorithms)',
      description: 'Analyze & improve your coding knowledge!',
      image: 'skill 3.jpg',
      link: '/dsa',
      category: 'dsa',
    },
    {
      title: 'OOPS (Object Oriented Programming)',
      description: 'Review your OOP prep with this mock test.',
      image: 'skill 4.jpg',
      link: '/oops',
      category: 'oops',
    },
    {
      title: 'Machine Learning',
      description: 'Brush up your basics in a flash!',
      image: 'skill 5.jpg',
      link: '/machine-learning',
      category: 'machine-learning',
    },
    {
      title: 'DBMS (Database Management System)',
      description: 'Assess your data-base for better prep!',
      image: 'skill 6.jpg',
      link: '/dbms',
      category: 'dbms',
    },
  ];

  filteredCards = [...this.cards]; // Initially show all cards

  constructor(private router: Router) {}

  onCardClick(card: any): void {
    this.router.navigate([card.link]);
  }

  filterCards(category: string): void {
    if (category === 'all') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter(
        (card) => card.category === category
      );
    }
  }
}
