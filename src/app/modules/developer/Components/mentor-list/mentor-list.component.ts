import { Component } from '@angular/core';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrl: './mentor-list.component.css'
})
export class MentorListComponent {
  mentors: IMentor[] = []; // Initialize with an empty array4
  ngOnInit(): void {
    // Example data; replace with actual data retrieval logic
    this.mentors = [
      {
        name: 'John Doe',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Web Development',
        title: 'Senior Developer',
        rate: 3,
        currentprice: 99.99
      },
      {
        name: 'Jane Smith',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Data Science',
        title: 'Data Scientist',
        rate: 2,
        currentprice: 149.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 1,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 5,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 2,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 3,
        currentprice: 199.99
      }
    ];
    this.updateRange();
    this.loadMentors();
  }
  priceMin: number = 100;
  priceMax: number = 1000;
  currentPage = 1;
  totalPages = 1;

  get minPercent(): number {
    return ((this.priceMin - 100) / (1000 - 100)) * 100;
  }

  get maxPercent(): number {
    return ((this.priceMax - 100) / (1000 - 100)) * 100;
  }

  updateRange(): void {
    const rangeFill = document.querySelector('.range-fill') as HTMLElement | null;
    const priceMinTooltip = document.getElementById('priceMinTooltip') as HTMLElement | null;
    const priceMaxTooltip = document.getElementById('priceMaxTooltip') as HTMLElement | null;

    const minPercent = this.minPercent;
    const maxPercent = this.maxPercent;

    if (rangeFill) {
      rangeFill.style.left = `${minPercent}%`;
      rangeFill.style.width = `${maxPercent - minPercent}%`;
    }
    if (priceMinTooltip) {
      priceMinTooltip.style.left = `calc(${minPercent}% + 2px)`;
      priceMinTooltip.textContent = `${this.priceMin}`;
    }
    if (priceMaxTooltip) {
      priceMaxTooltip.style.left = `calc(${maxPercent}% - 2px)`;
      priceMaxTooltip.textContent = `${this.priceMax}`;
    }
  }

  onMinValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.priceMin = Number(inputElement.value);
    if (this.priceMin > this.priceMax) {
      this.priceMin = this.priceMax;
    }
    this.updateRange();
  }

  onMaxValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.priceMax = Number(inputElement.value);
    if (this.priceMax < this.priceMin) {
      this.priceMax = this.priceMin;
    }
    this.updateRange();
  }
  loadMentors(): void {
    // Load your mentors here and calculate totalPages
    // Example:
    this.totalPages = Math.ceil(this.mentors.length / 9); // Assuming 9 cards per page
    // Add logic to fetch and slice data for the current page
  }
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMentors(); // Update mentors for the new page
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMentors(); // Update mentors for the new page
    }
  }

}




