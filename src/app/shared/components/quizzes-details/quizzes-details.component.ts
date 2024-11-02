import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';
import { IQuiz } from '../../../core/enums/Quiz';
import { QuizService } from '../../services/Quiz/quiz.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quizzes-details.component.html',
  styleUrls: ['./quizzes-details.component.css']
})
export class QuizzesDetailsComponent implements OnInit {
  Quizid: number | null = null;
  selectedQuiz: IQuiz | undefined;
  //loading = true; // To handle the loading state
  errorMessage: string | null = null; // To handle error messages

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit() {
    // Get the skill ID from the route parameters
    this.Quizid = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the quiz details from the service based on the skill ID
    if (this.Quizid) {
      this.fetchQuizDetails(this.Quizid);
    }
  }

  // Fetch the quiz details from the SkillService
  fetchQuizDetails(id: number) {
    this.quizService.getUserQuizzes().subscribe(
      (Quizzes: IQuiz[]) => {
        // Find the selected quiz by ID
        this.selectedQuiz = Quizzes.find(Quiz => Quiz.QuizId === id);
        //this.loading = false;

        // Handle case where quiz is not found
        if (!this.selectedQuiz) {
          this.errorMessage = 'Quiz not found.';
        }
      },
      (error) => {
        console.error('Error fetching Quizzes:', error);
        this.errorMessage = 'Error fetching quiz details. Please try again later.';
        //this.loading = false;
      }
    );
  }
}
