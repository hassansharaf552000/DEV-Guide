import { Component, Input } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-card',
  templateUrl: './hr-card.component.html',
  styleUrl: './hr-card.component.css'
})
export class HRCardComponent {
  @Input() hr!:IHR

  constructor(private router: Router) {}

  viewProfile(id: number): void {
    this.router.navigate(['/hr', id]); // Navigate to HR profile page with the selected HR's ID
  }
}
