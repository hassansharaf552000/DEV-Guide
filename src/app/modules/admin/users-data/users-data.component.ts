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

  constructor(private userService: AccountService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }
}