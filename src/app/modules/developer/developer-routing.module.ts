import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { StepFiveComponent } from '../../shared/components/step-five/step-five.component';
import { StepFourComponent } from '../../shared/components/step-four/step-four.component';
import { StepOneComponent } from '../../shared/components/step-one/step-one.component';
import { StepThreeComponent } from '../../shared/components/step-three/step-three.component';
import { StepTwoComponent } from '../../shared/components/step-two/step-two.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from '../../shared/components/login/login.component';
import { RegisterComponent } from '../../shared/components/register/register.component';

import { PaymentComponent } from './Components/payment/payment.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingComponent } from './Components/booking/booking.component';
import { QueryComponent } from './Components/query/query.component';
import { BookingConfirmationComponent } from './Components/booking-confirmation/booking-confirmation.component';
import { SkillAssessmentsComponent } from './Components/skill-assessments/skill-assessments.component';
import { SkillInstructionsComponent } from './Components/skill-instructions/skill-instructions.component';
import { QuizComponent } from '../../shared/components/quiz/quiz.component';
import { FinishQuizComponent } from '../../shared/components/finish-quiz/finish-quiz.component';
import { HrProfileComponent } from './Components/hr-profile/hr-profile.component';
import { MentorProfileComponent } from './Components/mentor-profile/mentor-profile.component';
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { QuizDetailsComponent } from '../../shared/components/quiz-details/quiz-details.component';
import { ProfileSideBarComponent } from './Components/profile-side-bar/profile-side-bar.component';
import path from 'path';
import { scheduled } from 'rxjs';
import { ContactAdminComponent } from '../mentor/Components/contact-admin/contact-admin.component';
import { MentorReplyComponent } from './Components/mentor-reply/mentor-reply.component';
import { QueryAnswerComponent } from './Components/query-answer/query-answer.component';
import { ProfileLayoutComponent } from './Components/profile-layout/profile-layout.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { QuizListComponent } from '../../shared/components/quiz-list/quiz-list.component';
import { MentorAnswerQueryComponent } from '../mentor/Components/mentor-answer-query/mentor-answer-query.component';
import { CommunicationComponent } from '../../shared/components/communication/communication.component';
import { AdminUIComponent } from '../../shared/components/admin-ui/admin-ui.component';

import { QuizzesListComponent } from '../../shared/components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from '../../shared/components/quizzes-details/quizzes-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { Update_ProfileComponent } from '../../shared/components/update_profile/update_profile.component';
import { ChangepasswordComponent } from '../../shared/components/changepassword/changepassword.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { EducationsComponent } from '../../shared/components/education-list/education-list.component';
import { ExperienceListComponent } from '../../shared/components/experience-list/experience-list.component';
import { SocialAccountsListComponent } from '../../shared/components/social-accounts-list/social-accounts-list.component';

import { ForgotPasswordComponent } from '../../shared/components/forget_password/forget_password.component';

import { ResetPasswordComponent } from '../../shared/components/reset-password/reset-password.component';

import { DeveloperSessionDetailsComponent } from './Components/developer-session-details/developer-session-details.component';

import { BookingListComponent } from './Components/booking-list/booking-list.component';


import { CustomCalendarComponent } from './Components/custom-calendar/custom-calendar.component';
import { DeveloperProfileComponent } from './Components/developer-profile/developer-profile.component';
import { RequestComponent } from '../../shared/components/request/request.component';
import { ErrorPageComponent } from '../../shared/components/error-page/error-page.component';




const routes: Routes = [
  {
    path: '',
    component: UserlayoutComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'paypal/:id', component: PaymentComponent, },
      { path: 'mentors', component: MentorListComponent },
      { path: 'mentors/:id', component: MentorProfileComponent, },

      { path: 'hrs', component: HRListComponent },
      { path: 'hrs/:id', component: HrProfileComponent, },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'skill-assessments', component: SkillAssessmentsComponent, },
      { path: 'skill-instructions', component: SkillInstructionsComponent, },

      { path: 'aboutus', component: AboutUsComponent },

      { path: 'faq-and-licence', component: FaqComponent },
      //       { path: 'booking', component: BookingComponent },
      //       { path: 'query', component: QueryComponent },
      //       { path: 'confirmation', component: BookingConfirmationComponent },
      //       {path:'Quizzes',component:QuizzesListComponent},
      //       {path:'Quiz/:id',component:QuizzesDetailsComponent},
      { path: 'calender', component: CustomCalendarComponent },
      { path: 'booking', component: BookingComponent, },
      { path: 'query', component: QueryComponent, },
      { path: 'confirmation', component: BookingConfirmationComponent, },
      { path: 'quiz/:id', component: QuizComponent, },
      { path: 'finish-quiz/:id', component: FinishQuizComponent, },
      { path: 'Quizzes', component: QuizzesListComponent, },
      { path: 'Quiz/:id', component: QuizzesDetailsComponent, },


      { path: '**', redirectTo: 'notfound' },



      //{ path: '**', component:NotFoundComponent},

      //{ path: 'AdminUi', component: AdminUIComponent }
    ],
  },

  {
    path: 'profile',
    component: ProfileLayoutComponent,

    children: [
      { path: 'Developer', component: DeveloperProfileComponent },
      { path: 'profile', component: MentorProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'change-password', component: ChangepasswordComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'educations', component: EducationsComponent },
      { path: 'experiences', component: ExperienceListComponent },
      { path: 'socialaccounts', component: SocialAccountsListComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'quizzes', component: QuizListComponent, },
      { path: 'reply', component: MentorReplyComponent },
      { path: 'answer-query/:id', component: QueryAnswerComponent },
      { path: 'AdminUi', component: AdminUIComponent },
      //{ path: '**', redirectTo: 'notfound' },
      { path: '', redirectTo: 'updateprofile', pathMatch: 'full' },
      // { path: 'answer-query/:id/:queryid/:userid', component: QueryAnswerComponent },
      { path: 'answer-query/:id/:queryid/:userid', component: QueryAnswerComponent },
      { path: 'AdminUi', component: AdminUIComponent },
      { path: 'session-details/:id', component: DeveloperSessionDetailsComponent },
      { path: 'Sessions', component: BookingListComponent },
      { path: 'request', component:RequestComponent },

    ],
  },
  { path: 'login/:url', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking/:id', component: BookingComponent, },
  { path: 'query/:id', component: QueryComponent, },
  { path: 'confirmation', component: BookingConfirmationComponent, },
  { path: 'communication', component: CommunicationComponent, },
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'step-four', component: StepFourComponent },
  { path: 'step-five', component: StepFiveComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cancel', component: PaymentComponent, },
  { path: 'confirm/:id', component: BookingConfirmationComponent, },
  { path: 'cancel', component: PaymentComponent },
  { path: 'forgetpassword', component: ForgotPasswordComponent },
  { path: 'request', component: RequestComponent }, // إضافة المسار الجديد
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'errorpage', component: ErrorPageComponent }
  // { path: 'hr-payment', component: HrPaymentsComponent },
  //{ path: '**', redirectTo: 'notfound' },
];
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class DeveloperRoutingModule { }
