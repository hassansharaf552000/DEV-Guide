import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISkill } from '../../../core/enums/Skill';
import { SkillService } from '../../services/Skill/skill.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quizzes-details.component.html',
  styleUrls: ['./quizzes-details.component.css']
})
export class QuizzesDetailsComponent implements OnInit {
  skillid: number | null = null;
  selectedQuiz: ISkill | undefined;
  loading = true; // To handle the loading state
  errorMessage: string | null = null; // To handle error messages

  constructor(private route: ActivatedRoute, private skillService: SkillService) {}

  ngOnInit() {
    // Get the skill ID from the route parameters
    this.skillid = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the quiz details from the service based on the skill ID
    if (this.skillid) {
      this.fetchQuizDetails(this.skillid);
    }
  }

  // Fetch the quiz details from the SkillService
  fetchQuizDetails(id: number) {
    this.skillService.getUserSkills().subscribe(
      (skills: ISkill[]) => {
        // Find the selected quiz by ID
        this.selectedQuiz = skills.find(skill => skill.Id === id);
        this.loading = false;

        // Handle case where quiz is not found
        if (!this.selectedQuiz) {
          this.errorMessage = 'Quiz not found.';
        }
      },
      (error) => {
        console.error('Error fetching skills:', error);
        this.errorMessage = 'Error fetching quiz details. Please try again later.';
        this.loading = false;
      }
    );
  }
}
