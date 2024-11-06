
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionsComponent } from './sessions/sessions.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import {QuizzesSolvedComponent } from './quizzes-solved/quizzes-solved.component';
import { usersDataComponent } from './users-data/users-data.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { AuthGuard } from '../../core/guards/AuthGuard';
import { QuizzesCreatedComponent } from './quizzes-created/quizzes-created.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { AddquestionsandoptionsComponent } from './addquestionsandoptions/addquestionsandoptions.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {path: 'sessions' , component : SessionsComponent},
      {path: 'usersData' , component: usersDataComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'quizzessolved' , component: QuizzesSolvedComponent},
      {path: 'reviews' , component: ReviewsComponent},
      {path: 'contacts' , component: ContactsComponent},
      {path: 'addskills' , component: AddskillsComponent},
      {path:'quizzescreated',component:QuizzesCreatedComponent},
      {path:'addquiz',component:AddquizComponent},
      {path:'addquestions',component:AddquestionsandoptionsComponent}


    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
