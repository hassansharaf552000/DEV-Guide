import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-skill-instructions',
  templateUrl: './skill-instructions.component.html',
  styleUrl: './skill-instructions.component.css',
})
export class SkillInstructionsComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
