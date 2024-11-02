import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrlayoutComponent } from './Components/hrlayout/hrlayout.component';
import { Update_ProfileComponent } from '../../shared/components/update_profile/update_profile.component';
import { HrPaymentsComponent } from './Components/hr-payments/hr-payments.component';
import { BookingHrComponent } from './Components/booking-hr/booking-hr.component';
import { HrSummaryComponent } from './Components/hr-summary/hr-summary.component';
import { HrRequestComponent } from './Components/hr-request/hr-request.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { ContactHrComponent } from './Components/contact-hr/contact-hr.component';
import { HrAnswerQueryComponent } from './Components/hr-answer-query/hr-answer-query.component';
import { SessionDatailsComponent } from './Components/session-details/session-details.component';
import { HrProfileComponent } from '../developer/Components/hr-profile/hr-profile.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';

import { ChangepasswordComponent } from '../../shared/components/changepassword/changepassword.component';
import { AuthGuard } from '../../core/guards/AuthGuard';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { EducationsComponent } from '../../shared/components/education-list/education-list.component';
import { ExperienceListComponent } from '../../shared/components/experience-list/experience-list.component';
import { SocialAccountsListComponent } from '../../shared/components/social-accounts-list/social-accounts-list.component';
import { QuizListComponent } from '../../shared/components/quiz-list/quiz-list.component';
import { ContactAdminComponent } from '../mentor/Components/contact-admin/contact-admin.component';
import { QuizzesListComponent } from '../../shared/components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from '../../shared/components/quizzes-details/quizzes-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ContactUsComponent } from '../developer/Components/contact-us/contact-us.component';




const routes: Routes = [
  {
    path: '',
    component: HrlayoutComponent,
    children: [

      { path: 'profile', component:HrProfileComponent,canActivate: [AuthGuard] },
      { path: 'updateprofile', component: Update_ProfileComponent , canActivate: [AuthGuard]  },
      { path: 'change-password', component: ChangepasswordComponent, canActivate: [AuthGuard], },
      { path: 'skills', component: SkillsComponent, canActivate: [AuthGuard], },
      { path: 'educations', component: EducationsComponent,canActivate: [AuthGuard], },
      { path: 'experiences', component: ExperienceListComponent,canActivate: [AuthGuard], },
      { path: 'socialaccounts', component: SocialAccountsListComponent,canActivate: [AuthGuard], },
      { path: 'hr-payments', component: HrPaymentsComponent,canActivate: [AuthGuard], },
      { path: 'booking', component:BookingHrComponent,canActivate: [AuthGuard] },
      { path: 'hr-summry', component: HrSummaryComponent,canActivate: [AuthGuard] },
      { path: 'hr-request', component: HrRequestComponent,canActivate: [AuthGuard]},
      { path: 'schedule', component: ScheduleComponent,canActivate: [AuthGuard] },
      { path: 'contact_admin', component: ContactUsComponent,canActivate: [AuthGuard], },
      { path: 'reviews', component: ReviewsListComponent,canActivate: [AuthGuard] },
      { path: 'queryanswers', component: HrAnswerQueryComponent,canActivate: [AuthGuard] },
      { path: 'session-details/:id', component: SessionDatailsComponent,canActivate: [AuthGuard] },
      { path: 'quizzes', component: QuizListComponent, canActivate: [AuthGuard], },
      {path:'Quizzes',component:QuizzesListComponent,canActivate: [AuthGuard],},
      {path:'Quiz/:id',component:QuizzesDetailsComponent,canActivate: [AuthGuard],},
      { path: 'home', component: ProfileComponent,canActivate: [AuthGuard] },

      { path: 'profile', component: ProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'hr-payments', component: HrPaymentsComponent },
      { path: 'Sessions', component:BookingHrComponent },
      { path: 'hr-summry', component: HrSummaryComponent },
      { path: 'hr-request', component: HrRequestComponent},
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact-hr', component: ContactUsComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: HrAnswerQueryComponent },
      { path: 'session-details', component: SessionDatailsComponent },
      { path: 'home', component: HrlayoutComponent },

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
export class HrRoutingModule {}
