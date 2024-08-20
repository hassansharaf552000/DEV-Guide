import { Component } from '@angular/core';
import { from } from 'rxjs';
import { Time } from '../../../../shared/types/time';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  list: Array<Time>;

  constructor() {
    this.list = [];
  }
}
