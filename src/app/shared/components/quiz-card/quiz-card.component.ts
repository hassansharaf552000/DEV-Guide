import { Component, Input } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
@Input ()skill!:ISkill

  // Function to get the quiz details

}
