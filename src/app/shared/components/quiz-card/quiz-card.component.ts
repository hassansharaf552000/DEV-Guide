import { Component, Input } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { IQuiz } from '../../../core/enums/Quiz';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.css'
})
export class QuizCardComponent {
  @Input() Quiz!: IQuiz;

  role = "";
  constructor(private auth: AuthService) {
    this.role = `/${this.auth.getStoredRole().toLocaleLowerCase()}/Quiz`
  }
  // Function to get the quiz details

}
