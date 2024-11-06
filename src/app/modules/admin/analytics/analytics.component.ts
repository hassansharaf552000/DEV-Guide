import { Component } from '@angular/core';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  // Define properties to hold each count
  developersCount = 0;
  mentorsCount = 0;
  hrCount = 0;
  totalSessions = 0;
  totalQuizzesTaken = 0;

  // Define the cards array to dynamically display each card
  cards = [
    { title: 'Developers', count: 0 },
    { title: 'Mentors', count: 0 },
    { title: 'HR-S', count: 0 },
    { title: 'Total Sessions', count: 0 },
    { title: 'Total Quizzes Taken', count: 0 }
  ];

  // public barChartOptions: ChartConfiguration['options'] = {
  //   responsive: true,
  //   scales: { x: {}, y: { min: 0 } },
  //   plugins: { legend: { display: true } }
  // };
  // public barChartType: ChartType = 'bar';
  // public barChartData: ChartConfiguration['data'] = {
  //   labels: ['Developers', 'Mentors', 'HR-S', 'Total Sessions', 'Total Quizzes Taken'],
  //   datasets: [
  //     {
  //       data: [],
  //       label: 'Counts',
  //       backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8']
  //     }
  //   ]
  // };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {
    this.dashboardService.getDevelopersCount().subscribe(count => {
      this.developersCount = count;
      this.cards[0].count = count; // Update the cards array with the fetched count
      //this.updateChart();
    });

    this.dashboardService.getMentorsCount().subscribe(count => {
      this.mentorsCount = count;
      this.cards[1].count = count;
      //this.updateChart();
    });

    this.dashboardService.getHRCount().subscribe(count => {
      this.hrCount = count;
      this.cards[2].count = count;
      //this.updateChart();
    });

    this.dashboardService.getTotalSessions().subscribe(count => {
      this.totalSessions = count;
      this.cards[3].count = count;
      //this.updateChart();
    });

    this.dashboardService.getTotalQuizzesTaken().subscribe(count => {
      this.totalQuizzesTaken = count;
      this.cards[4].count = count;
      //this.updateChart();
    });
  }

  // updateChart(): void {
  //   this.barChartData.datasets[0].data = [
  //     this.developersCount,
  //     this.mentorsCount,
  //     this.hrCount,
  //     this.totalSessions,
  //     this.totalQuizzesTaken
  //   ];
  // }
}


