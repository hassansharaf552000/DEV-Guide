import { Component, Input } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';

@Component({
  selector: 'app-hr-card',
  templateUrl: './hr-card.component.html',
  styleUrl: './hr-card.component.css'
})
export class HRCardComponent {
  @Input() hr!:IHR
}
