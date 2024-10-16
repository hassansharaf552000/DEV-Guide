import { Component } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrl: './quizzes-list.component.css'
})
export class QuizzesListComponent {
  // skills: ISkill[] = [
  //   { Id: 1, Name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
  //   { Id: 2, Name: 'JavaScript', description: 'A versatile programming language primarily used in web development.' },
  //   { Id: 3, Name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
  //   { Id: 4, Name: 'React', description: 'A platform for building mobile and desktop web applications.' },
  //   { Id: 5, Name: 'Flutter', description: 'A versatile programming language primarily used in web development.' },
  //   { Id: 6, Name: 'Dart', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' }
  // ];
  skillslist: ISkill[] = [];
  constructor(
    private skillService: SkillService
  ){}
  ngOnInit(): void {
    this.fetchExperiences();
  }

  // Fetch experiences from the API
  fetchExperiences(): void {
    this.skillService.getUserSkills().subscribe(
      (skills: ISkill[]) => {
        this.skillslist = skills;
      },
      (error) => {
        console.error('Error fetching Skills', error);
      }
    );
  }
}
