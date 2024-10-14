import { Component, EventEmitter, Output } from '@angular/core';
import { SkillService } from '../../services/Skill/skill.service';
import { ISkill } from '../../../core/enums/Skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css'
})
export class AddSkillComponent {
  suggestedSkills: ISkill[] = []; // List of suggested skills from the database
  selectedSuggestedSkill: any;

  @Output() skillAdded = new EventEmitter<any>();

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.loadSuggestedSkills();
  }

  loadSuggestedSkills() {
    this.suggestedSkills = [
      { id: 1, name: 'Angular' ,description:''},
      { id: 2, name: 'React' ,description:''},
      { id: 3, name: 'Node.js',description:'' },
      { id: 4, name: 'C#',description:'' },
      { id: 5, name: 'Python',description:'' }
    ];
  }

  addSkill() {
    const skillToAdd = this.suggestedSkills.find(skill => skill.id === this.selectedSuggestedSkill);
    if (skillToAdd) {
      this.skillAdded.emit(skillToAdd);
    }
  }
}
