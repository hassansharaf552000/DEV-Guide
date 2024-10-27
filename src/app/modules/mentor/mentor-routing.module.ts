import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactAdminComponent } from './Components/contact-admin/contact-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { BookingComponent } from './Components/booking-mentor/booking.component';
import { MentorlayoutComponent } from './Components/mentorlayout/mentorlayout.component';
import { MentorPaymentsComponent } from './Components/mentor-payments/mentor-payments.component';
import { SidebarlayoutComponent } from './Components/sidebarlayout/sidebarlayout.component';
import { MentorAnswerQueryComponent } from './Components/mentor-answer-query/mentor-answer-query.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { SessionDetailsComponent } from './Components/session-details/session-details.component';
import { Update_ProfileComponent } from '../../shared/components/update_profile/update_profile.component';
import { MentorSummryComponent } from './Components/mentor-summry/mentor-summry.component';
import { MentorRequestComponent } from './Components/mentor-request/mentor-request.component';

import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { EducationsComponent } from '../../shared/components/education-list/education-list.component';
import { ExperienceListComponent } from '../../shared/components/experience-list/experience-list.component';
import { SocialAccountsListComponent } from '../../shared/components/social-accounts-list/social-accounts-list.component';
import { QuizListComponent } from '../developer/Components/quiz-list/quiz-list.component';
import { AuthGuard } from '../../core/guards/AuthGuard';
import { ChangepasswordComponent } from '../../shared/components/changepassword/changepassword.component';
import { QuizzesListComponent } from '../../shared/components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from '../../shared/components/quizzes-details/quizzes-details.component';

import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MentorlayoutComponent,
    children: [

      { path: 'updateprofile', component: Update_ProfileComponent, canActivate: [AuthGuard], },
      { path: 'change-password', component: ChangepasswordComponent, canActivate: [AuthGuard], },
      { path: 'mentor-payments', component: MentorPaymentsComponent, canActivate: [AuthGuard], },
      { path: 'booking', component: BookingComponent, canActivate: [AuthGuard], },
      { path: 'mentor-summry', component: MentorSummryComponent, canActivate: [AuthGuard], },
      { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard], },
      { path: 'educations', component: EducationsComponent,canActivate: [AuthGuard], },
      { path: 'experiences', component: ExperienceListComponent,canActivate: [AuthGuard], },
      { path: 'socialaccounts', component: SocialAccountsListComponent,canActivate: [AuthGuard], },
      { path: 'reviews', component: ReviewsListComponent,canActivate: [AuthGuard], },
      { path: 'quizzes', component: QuizListComponent, canActivate: [AuthGuard], },
      { path: 'mentor-request', component: MentorRequestComponent,canActivate: [AuthGuard], },
      { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard], },
      { path: 'contact_admin', component: ContactAdminComponent,canActivate: [AuthGuard], },
      { path: 'reviews', component: ReviewsListComponent,canActivate: [AuthGuard], },
      { path: 'queryanswers', component: MentorAnswerQueryComponent,canActivate: [AuthGuard], },
      { path: 'session-details', component: SessionDetailsComponent,canActivate: [AuthGuard], },
      {path:'Quizzes',component:QuizzesListComponent,canActivate: [AuthGuard],},
      {path:'Quiz/:id',component:QuizzesDetailsComponent,canActivate: [AuthGuard],},
      { path: 'home', component: MentorlayoutComponent,canActivate: [AuthGuard], },

      // { path: 'profile', component:MentorProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'mentor-payments', component: MentorPaymentsComponent },
      { path: 'Sessions', component: BookingComponent },
      { path: 'mentor-summry', component: MentorSummryComponent },
      { path: 'mentor-request', component: MentorRequestComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact_admin', component: ContactAdminComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: MentorAnswerQueryComponent },
      { path: 'session-details/:id', component: SessionDetailsComponent },
      { path: 'home', component: MentorlayoutComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'notfound' },
    ],
  },

  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorRoutingModule { }
