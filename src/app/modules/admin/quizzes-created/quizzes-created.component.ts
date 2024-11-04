import { Component } from '@angular/core';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-quizzes-created',
  templateUrl: './quizzes-created.component.html',
  styleUrl: './quizzes-created.component.css'
})
export class QuizzesCreatedComponent {
  quizzes: any[] = [];
  filteredQuizzes: any[] = [];
  searchTerm: string = '';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllQuizzes().subscribe((data) => {
      this.quizzes = data;
      this.filteredQuizzes = data; // Initialize filteredQuizzes with all data
    });
  }


  onSearch(): void {
    console.log(this.quizzes); // Log quizzes to inspect data structure

    this.filteredQuizzes = this.quizzes.filter(quiz =>
      quiz.SkillName && quiz.SkillName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
