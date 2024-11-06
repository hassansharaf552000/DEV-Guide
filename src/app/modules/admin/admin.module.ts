import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  SessionsComponent } from './sessions/sessions.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { QuizzesSolvedComponent } from './quizzes-solved/quizzes-solved.component';
import { usersDataComponent } from './users-data/users-data.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuizzesCreatedComponent } from './quizzes-created/quizzes-created.component';
import { ProfileComponent } from './profile/profile.component';
import { DeveloperModule } from "../developer/developer.module";
import { AddquizComponent } from './addquiz/addquiz.component';
import { AddquestionsandoptionsComponent } from './addquestionsandoptions/addquestionsandoptions.component';







@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    QuizzesSolvedComponent,

    SessionsComponent,
    usersDataComponent,
    AdminsidebarComponent,
    ReviewsComponent,
    ContactsComponent,
    AddskillsComponent,
    QuizzesCreatedComponent,
    ProfileComponent,
    AddquizComponent,
    AddquestionsandoptionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    DeveloperModule,
    FormsModule ,
    NgxPaginationModule,// Add ReactiveFormsModule here


  ]
})
export class AdminModule { }
