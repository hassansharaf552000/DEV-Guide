
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SessionsComponent } from './sessions/sessions.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { MessagesComponent } from './messages/messages.component';
import { usersDataComponent } from './users-data/users-data.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddskillsComponent } from './addskills/addskills.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[
      {path: 'sessions' , component : SessionsComponent},
      {path: 'usersData' , component: usersDataComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'messages' , component: MessagesComponent},
      {path: 'reviews' , component: ReviewsComponent},
      {path: 'contacts' , component: ContactsComponent},
      {path: 'addskills' , component: AddskillsComponent},


    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
