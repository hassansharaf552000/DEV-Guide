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
    { id: 1, name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
    { id: 2, name: 'JavaScript', description: 'A versatile programming language primarily used in web development.' },
    { id: 3, name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
    { id: 4, name: 'React', description: 'A platform for building mobile and desktop web applications.' },
    { id: 5, name: 'Flutter', description: 'A versatile programming language primarily used in web development.' },
    { id: 6, name: 'Dart', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch quizId from route parameters
    this.skillid = +this.route.snapshot.paramMap.get('id')!;

    // Find the selected quiz by id
    this.selectedQuiz = this.skills.find(skill => skill.id === this.skillid);
  }
}
