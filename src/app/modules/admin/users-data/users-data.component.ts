// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AccountService } from '../../../shared/services/Account/account.service';

// @Component({
//   selector: 'app-all-users',
//   templateUrl: './users-data.component.html',
//   styleUrl: './users-data.component.css'
// })
// export class usersDataComponent implements OnInit {
//   users: any[] = [];

//   constructor(private userService: AccountService) {}

//   ngOnInit(): void {
//     this.userService.getUsers().subscribe({
//       next: (data) => {
//         this.users = data;
//       },
//       error: (err) => {
//         console.error('Error fetching users:', err);
//       }
//     });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../../shared/services/Account/account.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './users-data.component.html',
  styleUrl: './users-data.component.css'
})
export class usersDataComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = []; // To store the filtered results
  searchName: string = '';
  selectedRole: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;
  constructor(private userService: AccountService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data; // Initially, display all users
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user => {
      const matchesName = 
        user.FirstName.toLowerCase().includes(this.searchName.toLowerCase()) ||
        user.LastName.toLowerCase().includes(this.searchName.toLowerCase());
      const matchesRole = this.selectedRole ? user.Roles.includes(this.selectedRole) : true;

      return matchesName && matchesRole;
    });
  }

  onSearchClick(): void {
    this.filterUsers();
  }
  // onEnterKey(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.filterUsers();
  //   }
  // }
  onEnterKey(): void {
    this.filterUsers();
  }

  // onEnterKey(event: KeyboardEvent): void {
  //   if (event.key === 'Enter') {
  //     this.filterUsers();
  //   }
  // }

  onRoleSelect(role: string): void {
    this.selectedRole = role;
    this.filterUsers();
  }

}
