import { Component } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrl: './hr-profile.component.css'
})
export class HrProfileComponent {
  hrProfile: IHR | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadHrProfile(Number(id));
  }

  loadHrProfile(id: number): void {
    // Static data for HR profiles
    const hrList: IHR[] = [
      { id: 1, name: 'John Doe', imageurl: 'https://via.placeholder.com/150', category: 'Employees', title: 'Senior HR', rate: 3, currentprice: 99.99 },
      { id: 2, name: 'Jane Smith', imageurl: 'https://via.placeholder.com/150', category: 'Law', title: 'Senior HR', rate: 2, currentprice: 149.99 },
      {
        id:3,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 1,
        currentprice: 199.99
      },
      {
        id:4,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 5,
        currentprice: 199.99
      },
      {
        id:5,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 2,
        currentprice: 199.99
      },
      {
        id:6,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 3,
        currentprice: 199.99
      }
      // Add more HR profiles as needed
    ];

    this.hrProfile = hrList.find(hr => hr.id === id);
  }
}

