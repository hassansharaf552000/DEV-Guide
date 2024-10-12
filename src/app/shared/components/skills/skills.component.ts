import { Component } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: ISkill[] = []; // This will hold the list of skills
  selectedSkill: ISkill | null = null; // Skill selected for editing
  showAddSkillModal = false; // Flag to show/hide add skill modal
  showEditSkillModal = false; // Flag to show/hide edit skill modal
  newSkillName: string = ''; // To hold new skill name for the Add modal
  suggestedSkills: ISkill[] = [ // Suggested skills as ISkill objects
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'TypeScript' },
    { id: 4, name: 'React' },
    { id: 5, name: 'Node.js' }
  ];
  filteredSuggestions: ISkill[] = []; // Filtered skills based on input

  constructor() { }

  ngOnInit() {
    // Mock static skills data
    this.loadSkills();
    // Initialize filteredSuggestions with all suggestedSkills
    this.filteredSuggestions = this.suggestedSkills;
  }

  loadSkills() {
    this.skills = [
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Angular' },
      { id: 3, name: 'TypeScript' }
    ];
  }

  // Open Add Skill Modal
  openAddSkillModal() {
    this.newSkillName = ''; // Reset input field
    this.filteredSuggestions = this.suggestedSkills; // Reset suggestions
    this.showAddSkillModal = true;
  }

  // Filter suggestions based on user input for Add modal
  filterSuggestions() {
    const inputValue = this.showAddSkillModal ? this.newSkillName : this.selectedSkill?.name || '';

    if (inputValue.trim()) {
      // Filter suggested skills based on input text
      this.filteredSuggestions = this.suggestedSkills.filter(skill =>
        skill.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      // If input is empty, show all suggestions
      this.filteredSuggestions = this.suggestedSkills;
    }
  }

  // Close Add Skill Modal
  closeAddSkillModal() {
    this.showAddSkillModal = false;
    this.filteredSuggestions = []; // Clear suggestions on close
  }

  // Add new skill
  addSkill() {
    if (this.newSkillName) {
      // Determine the new skill ID
      const maxId = this.skills.length > 0
        ? Math.max(...this.skills.map(skill => skill.id))
        : 0; // If there are no skills, start with 0

      const newSkill: ISkill = {
        id: maxId + 1, // Use the next ID
        name: this.newSkillName
      };

      this.skills.push(newSkill);
      this.closeAddSkillModal(); // Close modal after adding skill
    }
  }

  // Open Edit Skill Modal
  openEditSkillModal(skill: ISkill) {
    this.selectedSkill = { ...skill }; // Copy the skill for editing
    this.filteredSuggestions = this.suggestedSkills; // Reset filtered suggestions
    this.showEditSkillModal = true;
  }

  // Close Edit Skill Modal
  closeEditSkillModal() {
    this.showEditSkillModal = false;
  }

  // Update skill in the list
  updateSkill() {
    if (this.selectedSkill) {
      const index = this.skills.findIndex(s => s.id === this.selectedSkill!.id);
      if (index !== -1) {
        this.skills[index].name = this.selectedSkill.name; // Update the skill name
      }
      this.closeEditSkillModal(); // Close modal after updating skill
    }
  }

  // Delete skill
  deleteSkill(id: number) {
    this.skills = this.skills.filter(skill => skill.id !== id);
  }

  // Select suggested skill
  selectSuggestion(suggestion: ISkill) {
    if (this.showAddSkillModal) {
      this.newSkillName = suggestion.name;
    } else if (this.showEditSkillModal && this.selectedSkill) {
      this.selectedSkill.name = suggestion.name;
    }
    this.filterSuggestions(); // Update filtered suggestions
  }
}
