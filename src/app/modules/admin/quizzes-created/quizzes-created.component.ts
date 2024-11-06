// import { Component } from '@angular/core';
// import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

// @Component({
//   selector: 'app-quizzes-created',
//   templateUrl: './quizzes-created.component.html',
//   styleUrl: './quizzes-created.component.css'
// })
// export class QuizzesCreatedComponent {
//   quizzes: any[] = [];
//   filteredQuizzes: any[] = [];
//   searchTerm: string = '';

//   constructor(private dashboardService: DashboardService) { }

//   ngOnInit(): void {
//     this.dashboardService.getAllQuizzes().subscribe((data) => {
//       this.quizzes = data;
//       this.filteredQuizzes = data; // Initialize filteredQuizzes with all data
//     });
//   }


//   onSearch(): void {
//     console.log(this.quizzes); // Log quizzes to inspect data structure

//     this.filteredQuizzes = this.quizzes.filter(quiz =>
//       quiz.SkillName && quiz.SkillName.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-quizzes-created',
  templateUrl: './quizzes-created.component.html',
  styleUrls: ['./quizzes-created.component.css']
})
export class QuizzesCreatedComponent implements OnInit {
  quizzes: any[] = [];
  filteredQuizzes: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllQuizzes().subscribe((data) => {
      this.quizzes = data;
      this.filteredQuizzes = data; // Initialize filteredQuizzes with all data
    });
  }

  // Automatically filter quizzes when searchTerm changes
  ngOnChanges(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredQuizzes = this.quizzes.filter(quiz =>
      quiz.SkillName && quiz.SkillName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
