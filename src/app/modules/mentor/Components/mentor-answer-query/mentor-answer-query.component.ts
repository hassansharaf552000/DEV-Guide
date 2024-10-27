import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentor-answer-query',
  templateUrl: './mentor-answer-query.component.html',
  styleUrl: './mentor-answer-query.component.css'
})
export class MentorAnswerQueryComponent implements OnInit{
  userQueries: any[] = []; 
  constructor(private http: HttpClient , private builder: FormBuilder) {}
   

    ngOnInit() {
      this.getQueries();
    }
  
    // Function to call the backend API and retrieve queries
    getQueries() {
      this.http.get<any>('http://localhost:5164/api/query/MentorQueries').subscribe(
        (data) => {
          console.log('MentorQueryList',data);
          
          this.userQueries = data.Result;
        },
        (error) => {
          console.error('Error fetching user queries:', error);
        }
      );
    }
}