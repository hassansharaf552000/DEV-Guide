import { Component } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quizzes-details.component.html',
  styleUrl: './quizzes-details.component.css'
})
export class QuizzesDetailsComponent {
  skillid: number | null = null;
  selectedQuiz: any;

  // Static quiz data
  skills: ISkill[] = [
    { Id: 1, Name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
    { Id: 2, Name: 'JavaScript', description: 'A versatile programming language primarily used in web development.' },
    { Id: 3, Name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
    { Id: 4, Name: 'React', description: 'A platform for building mobile and desktop web applications.' },
    { Id: 5, Name: 'Flutter', description: 'A versatile programming language primarily used in web development.' },
    { Id: 6, Name: 'Dart', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch quizId from route parameters
    this.skillid = +this.route.snapshot.paramMap.get('id')!;

    // Find the selected quiz by id
    this.selectedQuiz = this.skills.find(skill => skill.Id === this.skillid);
  }
}
