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
import { DeveloperModule } from '../developer/developer.module';
import { DeveloperlistComponent } from '../developer/Components/developerlist/developerlist.component';
import { ErrorPageComponent } from '../../shared/components/error-page/error-page.component';




const routes: Routes = [
  {
    path: '',
    component: HrlayoutComponent,
    children: [

      { path: 'profile', component: HrProfileComponent, },
      { path: 'updateprofile', component: Update_ProfileComponent, },
      { path: 'change-password', component: ChangepasswordComponent, },
      { path: 'skills', component: SkillsComponent, },
      { path: 'educations', component: EducationsComponent, },
      { path: 'experiences', component: ExperienceListComponent, },
      { path: 'socialaccounts', component: SocialAccountsListComponent, },
      { path: 'hr-payments', component: HrPaymentsComponent, },
      { path: 'booking', component: BookingHrComponent, },
      { path: 'hr-summry', component: HrSummaryComponent, },
      { path: 'hr-request', component: HrRequestComponent, },
      { path: 'schedule', component: ScheduleComponent, },
      { path: 'contact_admin', component: ContactUsComponent, },
      { path: 'reviews', component: ReviewsListComponent, },
      { path: 'queryanswers', component: HrAnswerQueryComponent, },
      { path: 'session-details/:id', component: SessionDatailsComponent, },
      { path: 'quizzes', component: QuizListComponent, },
      { path: 'Quizzes', component: QuizzesListComponent, },
      { path: 'Quiz/:id', component: QuizzesDetailsComponent, },
      { path: 'developers/:id', component: DeveloperlistComponent, },
      { path: 'home', component: ProfileComponent, },
      { path: 'Sessions', component: BookingHrComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'notfound' },
    ],
  },
  { path: '**', redirectTo: 'notfound' },
  { path: 'errorpage', component: ErrorPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule { }
