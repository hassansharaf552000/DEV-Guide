import { Component, OnInit } from '@angular/core';
import { SupportService } from '../../../shared/services/support/support.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  contactInfo: any[] = []; // Using any[] instead of interface

  constructor(private contactInfoService: SupportService) {}

  ngOnInit(): void {
    this.contactInfoService.getContactInfo().subscribe(
      (data) => (this.contactInfo = data),
      (error) => console.error('Failed to load contact info', error)
    );
  }
}