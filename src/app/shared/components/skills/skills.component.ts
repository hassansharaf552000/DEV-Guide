// // import { Component } from '@angular/core';
// // import { ISkill } from '../../../core/enums/Skill';

// // @Component({
// //   selector: 'app-skills',
// //   templateUrl: './skills.component.html',
// //   styleUrls: ['./skills.component.css']
// // })
// // export class SkillsComponent {
// //   skills: ISkill[] = []; // This will hold the list of skills
// //   selectedSkill: ISkill | null = null; // Skill selected for editing
// //   showAddSkillModal = false; // Flag to show/hide add skill modal
// //   showEditSkillModal = false; // Flag to show/hide edit skill modal
// //   newSkillName: string = ''; // To hold new skill name for the Add modal
// //   suggestedSkills: ISkill[] = [ // Suggested skills as ISkill objects
// //     { id: 1, name: 'JavaScript' },
// //     { id: 2, name: 'Angular' },
// //     { id: 3, name: 'TypeScript' },
// //     { id: 4, name: 'React' },
// //     { id: 5, name: 'Node.js' }
// //   ];
// //   filteredSuggestions: ISkill[] = []; // Filtered skills based on input

// //   constructor() { }

// //   ngOnInit() {
// //     // Mock static skills data
// //     this.loadSkills();
// //     // Initialize filteredSuggestions with all suggestedSkills
// //     this.filteredSuggestions = this.suggestedSkills;
// //   }

// //   loadSkills() {
// //     this.skills = [
// //       { id: 1, name: 'JavaScript' },
// //       { id: 2, name: 'Angular' },
// //       { id: 3, name: 'TypeScript' }
// //     ];
// //   }

// //   // Open Add Skill Modal
// //   openAddSkillModal() {
// //     this.newSkillName = ''; // Reset input field
// //     this.filteredSuggestions = this.suggestedSkills; // Reset suggestions
// //     this.showAddSkillModal = true;
// //   }

// //   // Filter suggestions based on user input for Add modal
// //   filterSuggestions() {
// //     const inputValue = this.showAddSkillModal ? this.newSkillName : this.selectedSkill?.name || '';

// //     if (inputValue.trim()) {
// //       // Filter suggested skills based on input text
// //       this.filteredSuggestions = this.suggestedSkills.filter(skill =>
// //         skill.name.toLowerCase().includes(inputValue.toLowerCase())
// //       );
// //     } else {
// //       // If input is empty, show all suggestions
// //       this.filteredSuggestions = this.suggestedSkills;
// //     }
// //   }

// //   // Close Add Skill Modal
// //   closeAddSkillModal() {
// //     this.showAddSkillModal = false;
// //     this.filteredSuggestions = []; // Clear suggestions on close
// //   }

// //   // Add new skill
// //   addSkill() {
// //     if (this.newSkillName) {
// //       // Determine the new skill ID
// //       const maxId = this.skills.length > 0
// //         ? Math.max(...this.skills.map(skill => skill.id))
// //         : 0; // If there are no skills, start with 0

// //       const newSkill: ISkill = {
// //         id: maxId + 1, // Use the next ID
// //         name: this.newSkillName
// //       };

// //       this.skills.push(newSkill);
// //       this.closeAddSkillModal(); // Close modal after adding skill
// //     }
// //   }

// //   // Open Edit Skill Modal
// //   openEditSkillModal(skill: ISkill) {
// //     this.selectedSkill = { ...skill }; // Copy the skill for editing
// //     this.filteredSuggestions = this.suggestedSkills; // Reset filtered suggestions
// //     this.showEditSkillModal = true;
// //   }

// //   // Close Edit Skill Modal
// //   closeEditSkillModal() {
// //     this.showEditSkillModal = false;
// //   }

// //   // Update skill in the list
// //   updateSkill() {
// //     if (this.selectedSkill) {
// //       const index = this.skills.findIndex(s => s.id === this.selectedSkill!.id);
// //       if (index !== -1) {
// //         this.skills[index].name = this.selectedSkill.name; // Update the skill name
// //       }
// //       this.closeEditSkillModal(); // Close modal after updating skill
// //     }
// //   }

// //   // Delete skill
// //   deleteSkill(id: number) {
// //     this.skills = this.skills.filter(skill => skill.id !== id);
// //   }

// //   // Select suggested skill
// //   selectSuggestion(suggestion: ISkill) {
// //     if (this.showAddSkillModal) {
// //       this.newSkillName = suggestion.name;
// //     } else if (this.showEditSkillModal && this.selectedSkill) {
// //       this.selectedSkill.name = suggestion.name;
// //     }
// //     this.filterSuggestions(); // Update filtered suggestions
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { ISkill } from '../../../core/enums/Skill';
// import { SkillService } from '../../services/Skill/skill.service';

// @Component({
//   selector: 'app-skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })
// export class SkillsComponent implements OnInit {
//   skills: ISkill[] = []; // This will hold the list of user skills
//   suggestedSkills: ISkill[] = []; // Suggested skills from the database
//   selectedSkill: ISkill | null = null; // Skill selected for editing
//   showAddSkillModal = false; // Flag to show/hide add skill modal
//   showEditSkillModal = false; // Flag to show/hide edit skill modal
//   newSkillName: string = ''; // To hold new skill name for the Add modal
//   filteredSuggestions: ISkill[] = []; // Filtered skills based on input

//   constructor(private skillService: SkillService) {} // Inject the service

//   ngOnInit() {
//     // Fetch skills of the logged-in user
//     this.skillService.getUserSkills().subscribe((skills: ISkill[]) => {
//       this.skills = skills;
//     });

//     // Fetch all available skills from the database
//     this.skillService.getAll().subscribe((skills: ISkill[]) => {
//       this.suggestedSkills = skills;
//       this.filteredSuggestions = this.suggestedSkills; // Initialize with all suggestedSkills
//     });

//     console.log(this.skills);
//   }

//   // Open Add Skill Modal
//   openAddSkillModal() {
//     this.newSkillName = ''; // Reset input field
//     this.filteredSuggestions = this.suggestedSkills; // Reset suggestions
//     this.showAddSkillModal = true;
//   }

//   // Filter suggestions based on user input for Add modal
//   filterSuggestions() {
//     const inputValue = this.showAddSkillModal ? this.newSkillName : this.selectedSkill?.Name || '';

//     if (inputValue.trim()) {
//       // Filter suggested skills based on input text
//       this.filteredSuggestions = this.suggestedSkills.filter(skill =>
//         skill.Name.toLowerCase().includes(inputValue.toLowerCase())
//       );
//     } else {
//       // If input is empty, show all suggestions
//       this.filteredSuggestions = this.suggestedSkills;
//     }

//     console.log(this.filteredSuggestions); // Add this line to check data
//   }

//   // Close Add Skill Modal
//   closeAddSkillModal() {
//     this.showAddSkillModal = false;
//     this.filteredSuggestions = []; // Clear suggestions on close
//   }

//   // Add new skill
//   addSkill() {
//     if (this.newSkillName) {
//       // Determine the new skill ID
//       const maxId = this.skills.length > 0
//         ? Math.max(...this.skills.map(skill => skill.id))
//         : 0; // If there are no skills, start with 0

//       const newSkill: ISkill = {
//         id: maxId + 1, // Use the next ID
//         Name: this.newSkillName
//       };

//       this.skills.push(newSkill);
//       this.closeAddSkillModal(); // Close modal after adding skill
//     }
//   }

//   // Open Edit Skill Modal
//   openEditSkillModal(skill: ISkill) {
//     this.selectedSkill = { ...skill }; // Copy the skill for editing
//     this.filteredSuggestions = this.suggestedSkills; // Reset filtered suggestions
//     this.showEditSkillModal = true;
//   }

//   // Close Edit Skill Modal
//   closeEditSkillModal() {
//     this.showEditSkillModal = false;
//   }

//   // Update skill in the list
//   // updateSkill() {
//   //   if (this.selectedSkill) {
//   //     const index = this.skills.findIndex(s => s.id === this.selectedSkill!.id);
//   //     if (index !== -1) {
//   //       this.skills[index].Name = this.selectedSkill.Name; // Update the skill name
//   //     }
//   //     this.closeEditSkillModal(); // Close modal after updating skill
//   //   }
//   // }

//   // Delete skill
//   deleteSkill(id: number) {
//     this.skills = this.skills.filter(skill => skill.id !== id);
//   }

//   // Select suggested skill
//   selectSuggestion(suggestion: ISkill) {
//     if (this.showAddSkillModal) {
//       this.newSkillName = suggestion.Name;
//     } else if (this.showEditSkillModal && this.selectedSkill) {
//       this.selectedSkill.Name = suggestion.Name;
//     }
//     this.filterSuggestions(); // Update filtered suggestions
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: ISkill[] = []; // This will hold the list of user skills
  suggestedSkills: ISkill[] = []; // Suggested skills from the database
  selectedSkill: ISkill | null = null; // Skill selected for editing
  showAddSkillModal = false; // Flag to show/hide add skill modal
  showEditSkillModal = false; // Flag to show/hide edit skill modal
  newSkillName: string = ''; // To hold new skill name for the Add modal
  filteredSuggestions: ISkill[] = []; // Filtered skills based on input

  constructor(private skillService: SkillService) {} // Inject the service

  ngOnInit() {
    // Fetch skills of the logged-in user
    this.loadUserSkills();

    // Fetch all available skills from the database
    this.loadSuggestedSkills();
  }

  loadUserSkills() {
    this.skillService.getUserSkills().subscribe(
      (skills: ISkill[]) => {
        this.skills = skills;
        console.log('Loaded skills:', this.skills);
      },
      (error) => {
        console.error('Error fetching user skills:', error);  // Log any errors
      }
    );
  }


  loadSuggestedSkills() {
    this.skillService.getAll().subscribe((skills: ISkill[]) => {
      this.suggestedSkills = skills;
      this.filteredSuggestions = this.suggestedSkills; // Initialize with all suggestedSkills
    });
  }

  // Open Add Skill Modal
  openAddSkillModal() {
    this.newSkillName = ''; // Reset input field
    this.filteredSuggestions = this.suggestedSkills; // Reset suggestions
    this.showAddSkillModal = true;
  }

  // Filter suggestions based on user input for Add modal
  filterSuggestions() {
    const inputValue = this.showAddSkillModal ? this.newSkillName : this.selectedSkill?.Name || '';

    if (inputValue.trim()) {
      // Filter suggested skills based on input text
      this.filteredSuggestions = this.suggestedSkills.filter(skill =>
        skill.Name.toLowerCase().includes(inputValue.toLowerCase())
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

  // Add new skill using the service
  addSkill() {
    if (this.newSkillName.trim()) {
      const newSkill: ISkill = {
        Id: 0,  // ID will be set by the backend, so it's 0 for now
        Name: this.newSkillName
      };

      // Use the service to add the skill
      this.skillService.addSkill(newSkill).subscribe(
        (response: ISkill) => {
          // Push the response skill to the local skills array
          this.skills.push(response);
          this.closeAddSkillModal(); // Close modal after adding skill
        },
        (error) => {
          console.error('Error adding skill', error);
        }
      );
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

  // Delete skill using the service
  deleteSkill(skillId: number) {
    if (!skillId) {
      console.error('Skill ID is undefined or null');
      return;
    }

    this.skillService.deleteSkill(skillId).subscribe(
      () => {
        this.skills = this.skills.filter(skill => skill.Id !== skillId);
        console.log('Skill deleted successfully');
      },
      (error) => {
        console.error('Error deleting skill', error);
      }
    );
  }

  // Select suggested skill
  selectSuggestion(suggestion: ISkill) {
    if (this.showAddSkillModal) {
      this.newSkillName = suggestion.Name;
    } else if (this.showEditSkillModal && this.selectedSkill) {
      this.selectedSkill.Name = suggestion.Name;
    }
    this.filterSuggestions(); // Update filtered suggestions
  }
}
