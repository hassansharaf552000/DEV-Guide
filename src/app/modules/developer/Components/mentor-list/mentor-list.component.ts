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
  }


}

