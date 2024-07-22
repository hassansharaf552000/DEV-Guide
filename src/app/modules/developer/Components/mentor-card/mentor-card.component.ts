import { Component, Input, input } from '@angular/core';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrl: './mentor-card.component.css'
})
export class MentorCardComponent {
  @Input() mentor!:IMentor

  getStars(rate: number): string[] {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return [
      ...Array(fullStars).fill('fa-star'),
      ...Array(halfStar).fill('fa-star-half-o'),
      ...Array(emptyStars).fill('fa-star-o')
    ];
  }

  constructor() { }

  ngOnInit(): void { }

}
