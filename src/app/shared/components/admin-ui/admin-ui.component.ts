import { Component } from '@angular/core';
import { User } from '../../user';


@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent {
  hrUsers: User[] = [];
  developerUsers: User[] = [];
  monitorUsers: User[] = [];

  // Variables for pagination between models (HR, Developer, Monitor)
  models = ['HR', 'Developer', 'Monitor'];
  currentModel: string = 'HR';
  modelPage: number = 1; // Pagination for switching models

  // Pagination variables for each table
  hrPage: number = 1;
  devPage: number = 1;
  monitorPage: number = 1;

  constructor() {
    // Initialize HR Users
    this.hrUsers = [
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      // Add more HR users here
    ];

    // Initialize Developer Users
    this.developerUsers = [
      { User_Id: 3, Name: 'Dev User 1', Password: 'pass1', Email: 'dev1@example.com' },
      { User_Id: 4, Name: 'Dev User 2', Password: 'pass2', Email: 'dev2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      // Add more Developer users here
    ];

    // Initialize Monitor Users
    this.monitorUsers = [
      { User_Id: 5, Name: 'Monitor User 1', Password: 'pass1', Email: 'monitor1@example.com' },
      { User_Id: 6, Name: 'Monitor User 2', Password: 'pass2', Email: 'monitor2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 1, Name: 'HR User 1', Password: 'pass1', Email: 'hr1@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      { User_Id: 2, Name: 'HR User 2', Password: 'pass2', Email: 'hr2@example.com' },
      // Add more Monitor users here
    ];
  }

  // Method to change the current model (HR, Developer, Monitor)
  switchModel(model: string) {
    this.currentModel = model;
  }
  getTotalPages(users: User[], itemsPerPage: number): number {
    return Math.ceil(users?.length / itemsPerPage);
  }
  
  get totalPagesForHr(): number {
    return this.getTotalPages(this.hrUsers, 5);
  }
  
  get totalPagesForDev(): number {
    return this.getTotalPages(this.developerUsers, 5);
  }
  
  get totalPagesForMonitor(): number {
    return this.getTotalPages(this.monitorUsers, 5);
  }
  
}

