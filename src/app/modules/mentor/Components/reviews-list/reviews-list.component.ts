import { Component } from '@angular/core';
import { IReview } from '../../../../core/enums/Review';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css'
})
export class ReviewsListComponent {
  Reviews:IReview[]=[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Reviews=[
      {
        id: 1,
        userimage: '01.jpg',
        username: 'Alice',
        reviewDate: new Date('2024-08-20'),
        description: 'Great product, highly recommend!',
        rate: 5
      },
      {
        id: 2,
        userimage: '05 (1).jpg',
        username: 'Bob',
        reviewDate: new Date('2024-08-21'),
        description: 'Satisfactory experience, but could be improved.',
        rate: 3
      },
      {
        id: 3,
        userimage: '04.jpg',
        username: 'Charlie',
        reviewDate: new Date('2024-08-22'),
        description: 'Excellent quality and fast delivery.',
        rate: 4
      },
      {
        id: 4,
        userimage: '06.jpg',
        username: 'Diana',
        reviewDate: new Date('2024-08-23'),
        description: 'The item did not meet my expectations.',
        rate: 2
      },
      {
        id: 5,
        userimage: '10.jpg',
        username: 'Evan',
        reviewDate: new Date('2024-08-24'),
        description: 'Value for money, would buy again.',
        rate: 4
      },
      {
        id: 6,
        userimage: '11.jpg',
        username: 'Fiona',
        reviewDate: new Date('2024-08-25'),
        description: 'Fantastic service and product quality.',
        rate: 5
      }
    ]
  }

}
