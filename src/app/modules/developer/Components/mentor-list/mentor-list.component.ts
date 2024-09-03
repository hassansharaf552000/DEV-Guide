import { Component } from '@angular/core';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrl: './mentor-list.component.css'
})
export class MentorListComponent {
  price: number = 10;
  mentors: IMentor[] = []; // Initialize with an empty array4
  ngOnInit(): void {
    // Example data; replace with actual data retrieval logic
    this.mentors = [
      {
        id: 1,
        name: 'John Doe',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Web Development',
        title: 'Senior Developer',
        rate: 3,
        currentprice: 99.99
      },
      {
        id: 2,
        name: 'Jane Smith',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Data Science',
        title: 'Data Scientist',
        rate: 2,
        currentprice: 149.99
      },
      {
        id: 3,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 1,
        currentprice: 199.99
      },
      {
        id:4,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 5,
        currentprice: 199.99
      },
      {
        id:5,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 2,
        currentprice: 199.99
      },
      {
        id:6,
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

  currentPage = 1;
  totalPages = 1;

  priceMin: number = 100;
  priceMax: number = 10000;

  updateRange(): void {
    if (this.priceMin > this.priceMax) {
      const temp = this.priceMin;
      this.priceMin = this.priceMax;
      this.priceMax = temp;
    }
  }

  getRangeMinPercent(): number {
    return ((this.priceMin - 100) / (10000 - 100)) * 100;
  }

  getRangeMaxPercent(): number {
    return ((this.priceMax - 100) / (10000 - 100)) * 100;
  }

  getRangeWidthPercent(): number {
    return this.getRangeMaxPercent() - this.getRangeMinPercent();
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




