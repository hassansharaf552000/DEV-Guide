import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrl: './edit-skill.component.css'
})
export class EditSkillComponent {
  @Input() skill: any; // Skill to edit
  @Output() skillUpdated = new EventEmitter<any>();

  updateSkill() {
    this.skillUpdated.emit(this.skill);
  }
}
