import { ChangeDetectorRef, Component } from '@angular/core';
import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';
import { IQuiz } from '../../../core/enums/Quiz';
import { QuizService } from '../../services/Quiz/quiz.service';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrl: './quizzes-list.component.css'
})
export class QuizzesListComponent {
  QuizzesList: IQuiz[] = [];
  constructor(
    private quizService: QuizService
    ,private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this.FetchQuizzes();
  }

  // Fetch experiences from the API
  FetchQuizzes(): void {
    this.quizService.getUserQuizzes().subscribe(
      (quizzes: IQuiz[]) => {
        this.QuizzesList = quizzes;
        this.cdr.detectChanges()
      },
      (error) => {
        console.error('Error fetching Skills', error);
      }
    );
  }
}
