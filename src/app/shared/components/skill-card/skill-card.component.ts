import { Component } from '@angular/core';

import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
// Open Add Skill Modal
skills: ISkill[] = []; // This will hold the list of skills
  selectedSkill: any = null; // Skill selected for editing

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    // Load initial skills from the database
    this.loadSkills();
  }

  loadSkills() {
    this.skillService.getAll().subscribe((data: any[]) => {
      this.skills = data;
    });
  }

  // Open Add Skill Modal
  openAddSkillModal() {
    // Logic to open the add skill modal
  }

  // Add new skill
  addSkill(skill: any) {
    this.skills.push(skill);
  }

  // Open Edit Skill Modal
  openEditSkillModal(skill: any) {
    this.selectedSkill = skill;
    // Logic to open the edit skill modal
  }

  // Update skill in the list
  updateSkill(updatedSkill: any) {
    const index = this.skills.findIndex(s => s.id === updatedSkill.id);
    if (index !== -1) {
      this.skills[index] = updatedSkill;
    }
  }

  // Delete skill
  deleteSkill(id: number) {
    this.skills = this.skills.filter(skill => skill.id !== id);
  }

}
