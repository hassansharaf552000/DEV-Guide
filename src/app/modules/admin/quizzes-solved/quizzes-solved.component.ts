import { Component } from '@angular/core';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-messages',
  templateUrl: './quizzes-solved.component.html',
  styleUrl: './quizzes-solved.component.css'
})
export class QuizzesSolvedComponent {
  quizzesSolved: any[] = [];
  filteredQuizzes: any[] = [];
  searchTerm: string = '';
  showPassedOnly: boolean = false; // Checkbox for showing only passed quizzes

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllQuizzesSolved().subscribe((data) => {
      this.quizzesSolved = data;
      this.applyFilters(); // Apply initial filters

    });
  }

  applyFilters(): void {
    this.filteredQuizzes = this.quizzesSolved.filter(quiz => {
      const matchesSearch = quiz.quizName.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesResult = !this.showPassedOnly || quiz.result === 1; // Assuming result: 1 = Pass, 0 = Fail

      return matchesSearch && matchesResult;
    });
  }

 

  // Triggered when the search button is clicked
  onSearch(): void {
    this.applyFilters();
  }

  // Triggered when the checkbox changes
  onCheckboxChange(): void {
    this.applyFilters();
  }
}
