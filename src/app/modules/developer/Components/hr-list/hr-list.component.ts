import { Component } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';

@Component({
  selector: 'app-hr-list',
  templateUrl: './hr-list.component.html',
  styleUrl: './hr-list.component.css'
})
export class HRListComponent {

  Hr: IHR[] = []; // Initialize with an empty array4
  ngOnInit(): void {
    // Example data; replace with actual data retrieval logic
    this.Hr = [
      {
        name: 'John Doe',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Employees',
        title: 'Senior HR',
        rate: 3,
        currentprice: 99.99
      },
      {
        name: 'Jane Smith',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Law',
        title: 'Senior HR',
        rate: 2,
        currentprice: 149.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 1,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 5,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 2,
        currentprice: 199.99
      },
      {
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Accountant',
        title: 'Senior HR ',
        rate: 3,
        currentprice: 199.99
      }
    ];
  }

}
