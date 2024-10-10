import { Component } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrl: './quizzes-list.component.css'
})
export class QuizzesListComponent {
  skills: ISkill[] = [
    { id: 1, name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
    { id: 2, name: 'JavaScript', description: 'A versatile programming language primarily used in web development.' },
    { id: 3, name: 'TypeScript', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
    { id: 4, name: 'React', description: 'A platform for building mobile and desktop web applications.' },
    { id: 5, name: 'Flutter', description: 'A versatile programming language primarily used in web development.' },
    { id: 6, name: 'Dart', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' }
  ];
}
