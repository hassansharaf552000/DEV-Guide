import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-developercard',
  templateUrl: './developercard.component.html',
  styleUrl: './developercard.component.css'
})
export class DevelopercardComponent {
  @Input() deve:any = 0
}


