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
import { QuizListComponent } from '../../shared/components/quiz-list/quiz-list.component';
import { ChangepasswordComponent } from '../../shared/components/changepassword/changepassword.component';
import { QuizzesListComponent } from '../../shared/components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from '../../shared/components/quizzes-details/quizzes-details.component';

import { ProfileComponent } from './Components/profile/profile.component';
import { PaymentComponent } from '../../shared/components/payment/payment.component';
import { ContactUsComponent } from '../developer/Components/contact-us/contact-us.component';
import { DeveloperModule } from '../developer/developer.module';
import { DeveloperlistComponent } from '../developer/Components/developerlist/developerlist.component';
import { ErrorPageComponent } from '../../shared/components/error-page/error-page.component';
import { StepOneComponent } from '../../shared/components/step-one/step-one.component';
import { StepTwoComponent } from '../../shared/components/step-two/step-two.component';
import { QuizComponent } from '../../shared/components/quiz/quiz.component';
import { FinishQuizComponent } from '../../shared/components/finish-quiz/finish-quiz.component';
import { QueryAnswerComponent } from '../developer/Components/query-answer/query-answer.component';

const routes: Routes = [
  {
    path: '',
    component: MentorlayoutComponent,
    children: [

      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'change-password', component: ChangepasswordComponent },
      { path: 'mentor-payments', component: MentorPaymentsComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'mentor-summry', component: MentorSummryComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'educations', component: EducationsComponent },
      { path: 'experiences', component: ExperienceListComponent },
      { path: 'socialaccounts', component: SocialAccountsListComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'quizzes', component: QuizListComponent },
      { path: 'mentor-request', component: MentorRequestComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact_admin', component: ContactUsComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: MentorAnswerQueryComponent },
      { path: 'session-details', component: SessionDetailsComponent },
      { path: 'Quizzes', component: QuizzesListComponent },
      { path: 'Quiz/:id', component: QuizzesDetailsComponent },
      { path: 'quiz/:id', component: QuizComponent },
      { path: 'finish-quiz/:id', component: FinishQuizComponent, },
      { path: 'developers/:id', component: DeveloperlistComponent },
      { path: 'home', component: ProfileComponent },

      { path: 'answer-query/:id/:queryid/:userid', component: QueryAnswerComponent },
      // { path: 'profile', component:MentorProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'mentor-payments', component: MentorPaymentsComponent },
      { path: 'Sessions', component: BookingComponent },
      { path: 'mentor-summry', component: MentorSummryComponent },
      { path: 'mentor-request', component: MentorRequestComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact_admin', component: ContactUsComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: MentorAnswerQueryComponent },
      { path: 'session-details/:id', component: SessionDetailsComponent },
      { path: 'home', component: MentorlayoutComponent },
      { path: 'paypa', component: PaymentComponent },//////////////////////////////


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
export class MentorRoutingModule { }
