// import { Component } from '@angular/core';
// import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

// @Component({
//   selector: 'app-messages',
//   templateUrl: './quizzes-solved.component.html',
//   styleUrl: './quizzes-solved.component.css'
// })
// export class QuizzesSolvedComponent {
//   quizzesSolved: any[] = [];
//   filteredQuizzes: any[] = [];
//   searchTerm: string = '';
//   showPassedOnly: boolean = false;
//   userSearchTerm: string = '';  // Checkbox for showing only passed quizzes
// currentPage: number = 1;       // For pagination
// itemsPerPage: number = 5;      // Items per page

//   constructor(private dashboardService: DashboardService) { }

//   ngOnInit(): void {
//     this.dashboardService.getAllQuizzesSolved().subscribe((data) => {
//       this.quizzesSolved = data;
//       this.applyFilters(); // Apply initial filters

//     });
//   }
//   applyFilters(): void {
//     this.filteredQuizzes = this.quizzesSolved.filter(quiz => {
//       const matchesQuizName = quiz.quizName && quiz.quizName.toLowerCase().includes(this.searchTerm.toLowerCase());
//       const matchesUserName = quiz.userName && quiz.userName.toLowerCase().includes(this.userSearchTerm.toLowerCase());
//       const matchesResult = !this.showPassedOnly || quiz.result === 1; // Assuming result: 1 = Pass, 0 = Fail
  
//       return matchesQuizName && matchesUserName && matchesResult;
//     });
//   }
  
// onSearch(): void {
//   this.applyFilters();
// }

// onCheckboxChange(): void {
//   this.applyFilters();
// }
// //   applyFilters(): void {
// //     this.filteredQuizzes = this.quizzesSolved.filter(quiz => {
// //       const matchesSearch = quiz.quizName.toLowerCase().includes(this.searchTerm.toLowerCase());
// //       const matchesResult = !this.showPassedOnly || quiz.result === 1; // Assuming result: 1 = Pass, 0 = Fail

// //       return matchesSearch && matchesResult;
// //     });
// //   }

 

// //   // Triggered when the search button is clicked
// //   onSearch(): void {
// //     this.applyFilters();
// //   }

// //   // Triggered when the checkbox changes
// //   onCheckboxChange(): void {
// //     this.applyFilters();
// //   }
// }

// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

// @Component({
//   selector: 'app-quizzes-solved',
//   templateUrl: './quizzes-solved.component.html',
//   styleUrls: ['./quizzes-solved.component.css']
// })
// export class QuizzesSolvedComponent implements OnInit {
//   quizzesSolved: any[] = [];
//   filteredQuizzes: any[] = [];
//   searchTerm: string = '';      // For quiz name filter
//   userSearchTerm: string = '';  // For user name filter
//   showPassedOnly: boolean = false; // Checkbox for showing only passed quizzes
//   currentPage: number = 1;       // For pagination
//   itemsPerPage: number = 5;      // Items per page

//   constructor(private dashboardService: DashboardService) { }

//   ngOnInit(): void {
//     this.dashboardService.getAllQuizzesSolved().subscribe((data) => {
//       this.quizzesSolved = data;
//       this.applyFilters(); // Apply initial filters
//     });
//   }

//   applyFilters(): void {
//     this.filteredQuizzes = this.quizzesSolved.filter(quiz => {
//       const matchesQuizName = quiz.quizName.toLowerCase().includes(this.searchTerm.toLowerCase());
//       const matchesUserName = quiz.userName.toLowerCase().includes(this.userSearchTerm.toLowerCase());
//       const matchesResult = !this.showPassedOnly || quiz.result === 1; // Assuming result: 1 = Pass, 0 = Fail

//       return matchesQuizName && matchesUserName && matchesResult;
//     });
//   }

//   onSearch(): void {
//     this.applyFilters();
//   }

//   onCheckboxChange(): void {
//     this.applyFilters();
//   }
// }


// last one 
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-quizzes-solved',
  templateUrl: './quizzes-solved.component.html',
  styleUrls: ['./quizzes-solved.component.css']
})
export class QuizzesSolvedComponent implements OnInit {
  quizzesSolved: any[] = [];
  filteredQuizzes: any[] = [];
  searchTerm: string = '';      // For quiz name filter
  userSearchTerm: string = '';  // For user name filter
  showPassedOnly: boolean = false; // Checkbox for showing only passed quizzes
  currentPage: number = 1;       // For pagination
  itemsPerPage: number = 5;      // Items per page

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllQuizzesSolved().subscribe(
      (data) => {
        console.log('Received data:', data); // Log data to verify it is received
        this.quizzesSolved = data;
        this.filteredQuizzes = [...data]; // Initialize filteredQuizzes with all data
      },
      (error) => {
        console.error('Error fetching quizzes:', error); // Log any errors
      }
    );
  }
  
  applyFilters(): void {
    console.log('applyFilters called'); // Log to check if method is executed
  
    this.filteredQuizzes = this.quizzesSolved.filter(quiz => {
      const matchesQuizName = quiz.QuizName  // Make sure to use correct property names
        ? quiz.QuizName.toLowerCase().includes(this.searchTerm.toLowerCase())
        : false;
      const matchesUserName = quiz.UserName
        ? quiz.UserName.toLowerCase().includes(this.userSearchTerm.toLowerCase())
        : false;
      const matchesResult = !this.showPassedOnly || quiz.Passed === true;
  
      return matchesQuizName && matchesUserName && matchesResult;
    });
  }
  

  onSearch(): void {
    this.applyFilters();
  }

  onCheckboxChange(): void {
    this.applyFilters();
  }
}

