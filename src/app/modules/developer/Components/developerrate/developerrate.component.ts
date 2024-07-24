import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-developerrate',
  templateUrl: './developerrate.component.html',
  styleUrl: './developerrate.component.css'
})
export class DeveloperrateComponent {
  @Input() value:number = 0
}
