import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  SessionsComponent } from './sessions/sessions.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MessagesComponent } from './messages/messages.component';


import { usersDataComponent } from './users-data/users-data.component';






@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    MessagesComponent,
    SessionsComponent,
    usersDataComponent,
    AdminsidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
