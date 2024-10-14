import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-reply',
  templateUrl: './mentor-reply.component.html',
  styleUrl: './mentor-reply.component.css'
})
export class MentorReplyComponent implements OnInit {
  userQueries: any[] = []; // To store the queries fetched from the backend

  

  // Method to return the badge class based on query answers
  getBadgeClass(queryAnswerCount: number): string {
    return queryAnswerCount > 0 ? 'badge bg-success' : 'badge bg-danger';
  }

  // Method to return the badge text based on query answers
  getBadgeText(queryAnswerCount: number): string {
    return queryAnswerCount > 0 ? 'Answered' : 'No Answer yet';
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getQueries();
  }

  // Function to call the backend API and retrieve queries
  getQueries() {
    this.http.get<any[]>('http://localhost:5164/api/account/UserQueries').subscribe(
      (data) => {
        this.userQueries = data;
      },
      (error) => {
        console.error('Error fetching user queries:', error);
      }
    );
  }
}