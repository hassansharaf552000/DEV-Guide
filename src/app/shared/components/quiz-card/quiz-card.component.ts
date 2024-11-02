import { Component, Input } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { IQuiz } from '../../../core/enums/Quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
@Input ()Quiz!:IQuiz

  // Function to get the quiz details

}
