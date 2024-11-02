import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/Session/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent implements OnInit {
    sessions: any[] = []; // Use any[] for sessions
  
    constructor(private sessionService: SessionService) {}
  
    ngOnInit(): void {
      this.loadSessions();
    }
  
    loadSessions(): void {
      this.sessionService.getSessions().subscribe(
        (data) => {
          this.sessions = data; // Assign the raw data directly
        },
        (error) => {
          console.error('Error fetching sessions', error);
        }
      );
    }
  }