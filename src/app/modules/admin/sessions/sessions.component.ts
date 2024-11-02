import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/Session/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent implements OnInit {
  //   sessions: any[] = []; // Use any[] for sessions
  
  //   constructor(private sessionService: SessionService) {}
  
  //   ngOnInit(): void {
  //     this.loadSessions();
  //   }
  
  //   loadSessions(): void {
  //     this.sessionService.getSessions().subscribe(
  //       (data) => {
  //         this.sessions = data; // Assign the raw data directly
  //       },
  //       (error) => {
  //         console.error('Error fetching sessions', error);
  //       }
  //     );
  //   }
  // }



//   sessions: any[] = []; // Original sessions data
//   filteredSessions: any[] = []; // Filtered sessions to display

//   // Filter fields
//   topic: string = '';
//   developerName: string = '';
//   instructorName: string = '';
//   dateFrom: string = '';
//   dateTo: string = '';

//   constructor(private sessionService: SessionService) {}

//   ngOnInit(): void {
//     this.loadSessions();
//   }

//   loadSessions(): void {
//     this.sessionService.getSessions().subscribe(
//       (data) => {
//         this.sessions = data; // Assign the raw data
//         this.filteredSessions = data; // Initialize filtered data
//       },
//       (error) => {
//         console.error('Error fetching sessions', error);
//       }
//     );
//   }

//   // Filter sessions based on input fields
//   filterSessions(): void {
//     this.filteredSessions = this.sessions.filter((session) => {
//       // Filter by topic
//       const matchesTopic = this.topic
//         ? session.Topic.toLowerCase().includes(this.topic.toLowerCase())
//         : true;

//       // Filter by developer name
//       const matchesDeveloper = this.developerName
//         ? (session.UserFirstName + ' ' + session.UserLastName)
//             .toLowerCase()
//             .includes(this.developerName.toLowerCase())
//         : true;

//       // Filter by instructor name
//       const matchesInstructor = this.instructorName
//         ? (session.InstructorFirstName + ' ' + session.InstructorLastName)
//             .toLowerCase()
//             .includes(this.instructorName.toLowerCase())
//         : true;

//       // Filter by date range
//       const sessionDate = new Date(session.DateTime);
//       const matchesDateFrom = this.dateFrom ? sessionDate >= new Date(this.dateFrom) : true;
//       const matchesDateTo = this.dateTo ? sessionDate <= new Date(this.dateTo) : true;

//       // Return true if all criteria match
//       return matchesTopic && matchesDeveloper && matchesInstructor && matchesDateFrom && matchesDateTo;
//     });
//   }
// }

sessions: any[] = []; // All sessions
filteredSessions: any[] = []; // Filtered sessions based on criteria
topic: string = '';
developerName: string = '';
instructorName: string = '';
dateFrom: string | null = null;
dateTo: string | null = null;

constructor(private sessionService: SessionService) {}

ngOnInit(): void {
  this.loadSessions();
}

loadSessions(): void {
  this.sessionService.getSessions().subscribe(
    (data) => {
      this.sessions = data;
      this.filteredSessions = data; // Initialize filteredSessions with all data
    },
    (error) => {
      console.error('Error fetching sessions', error);
    }
  );
}

filterSessions(): void {
  this.filteredSessions = this.sessions.filter(session => {
    // Check topic filter
    const matchesTopic = this.topic ? session.Topic.toLowerCase().includes(this.topic.toLowerCase()) : true;

    // Check developer name filter
    const matchesDeveloperName = this.developerName 
      ? `${session.UserFirstName} ${session.UserLastName}`.toLowerCase().includes(this.developerName.toLowerCase())
      : true;

    // Check instructor name filter
    const matchesInstructorName = this.instructorName 
      ? `${session.InstructorFirstName} ${session.InstructorLastName}`.toLowerCase().includes(this.instructorName.toLowerCase())
      : true;

    // Check date range filter
    const sessionDate = new Date(session.DateTime);
    const fromDate = this.dateFrom ? new Date(this.dateFrom) : null;
    const toDate = this.dateTo ? new Date(this.dateTo) : null;
    const matchesDateRange = (!fromDate || sessionDate >= fromDate) && (!toDate || sessionDate <= toDate);

    return matchesTopic && matchesDeveloperName && matchesInstructorName && matchesDateRange;
  });
}
}