import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  SessionsComponent } from './sessions/sessions.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MessagesComponent } from './messages/messages.component';


import { usersDataComponent } from './users-data/users-data.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    MessagesComponent,
    SessionsComponent,
    usersDataComponent,
    AdminsidebarComponent,
    ReviewsComponent,
    ContactsComponent,
    AddskillsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,   
    ReactiveFormsModule, // Add ReactiveFormsModule here
   
  ]
})
export class AdminModule { }
