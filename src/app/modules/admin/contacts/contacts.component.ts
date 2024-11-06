// import { Component, OnInit } from '@angular/core';
// import { SupportService } from '../../../shared/services/support/support.service';

// @Component({
//   selector: 'app-contacts',
//   templateUrl: './contacts.component.html',
//   styleUrl: './contacts.component.css'
// })
// export class ContactsComponent implements OnInit {
//   contactInfo: any[] = []; // Using any[] instead of interface

//   constructor(private contactInfoService: SupportService) {}

//   ngOnInit(): void {
//     this.contactInfoService.getContactInfo().subscribe(
//       (data) => (this.contactInfo = data),
//       (error) => console.error('Failed to load contact info', error)
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { SupportService } from '../../../shared/services/support/support.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactInfo: any[] = [];
  filteredContactInfo: any[] = []; // Array for displaying filtered data
  searchEmail: string = '';
  searchUsername: string = '';
  searchPhoneNumber: string = '';
  
  currentPage: number = 1; // Current page for pagination
  pageSize: number = 10;   // Number of items per page

  constructor(private contactInfoService: SupportService) {}

  ngOnInit(): void {
    this.contactInfoService.getContactInfo().subscribe(
      (data) => {
        this.contactInfo = data;
        this.filteredContactInfo = data; // Initialize filtered data
      },
      (error) => console.error('Failed to load contact info', error)
    );
  }

  filterContacts(): void {
    this.filteredContactInfo = this.contactInfo.filter(info =>
      (this.searchEmail ? info.Email.toLowerCase().includes(this.searchEmail.toLowerCase()) : true) &&
      (this.searchUsername ? info.Username.toLowerCase().includes(this.searchUsername.toLowerCase()) : true) &&
      (this.searchPhoneNumber ? info.PhoneNumber.includes(this.searchPhoneNumber) : true)
    );
  }
}
