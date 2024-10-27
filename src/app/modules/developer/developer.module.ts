import { HRCardComponent } from './Components/hr-card/hr-card.component';
import { RateComponent } from './Components/rate/rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { DevelopercardComponent } from './Components/developercard/developercard.component';
import { DeveloperrateComponent } from './Components/developerrate/developerrate.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { MentorCardComponent } from './Components/mentor-card/mentor-card.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { StepFiveComponent } from '../../shared/components/step-five/step-five.component';
import { StepFourComponent } from '../../shared/components/step-four/step-four.component';
import { StepOneComponent } from '../../shared/components/step-one/step-one.component';
import { StepThreeComponent } from '../../shared/components/step-three/step-three.component';
import { StepTwoComponent } from '../../shared/components/step-two/step-two.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BookingComponent } from './Components/booking/booking.component';
import { BookingConfirmationComponent } from './Components/booking-confirmation/booking-confirmation.component';
import { SkillAssessmentsComponent } from './Components/skill-assessments/skill-assessments.component';
import { SkillInstructionsComponent } from './Components/skill-instructions/skill-instructions.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { FinishQuizComponent } from './Components/finish-quiz/finish-quiz.component';
import { HrProfileComponent } from './Components/hr-profile/hr-profile.component';
import { MentorProfileComponent } from './Components/mentor-profile/mentor-profile.component';
import { ProfileLayoutComponent } from './Components/profile-layout/profile-layout.component';
import { QuizListComponent } from './Components/quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './Components/quiz-details/quiz-details.component';
import { ProfileSideBarComponent } from './Components/profile-side-bar/profile-side-bar.component';
import { ReviewsCardComponent } from './Components/reviews-card/reviews-card.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { ContactAdminComponent } from '../mentor/Components/contact-admin/contact-admin.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QueryComponent } from './Components/query/query.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { QueryAnswerComponent } from './Components/query-answer/query-answer.component';
import { MentorReplyComponent } from './Components/mentor-reply/mentor-reply.component';


import { DeveloperSessionDetailsComponent } from './Components/developer-session-details/developer-session-details.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingListComponent } from './Components/booking-list/booking-list.component';



@NgModule({
  declarations: [
    RateComponent,
    HRCardComponent,
    HRListComponent,
    MentorCardComponent,
    MentorListComponent,
    ContactUsComponent,
    AboutUsComponent,
    UserlayoutComponent,
    DevelopercardComponent,
    DeveloperrateComponent,
    PaymentComponent,
    HomeComponent,
    BookingComponent,
    BookingConfirmationComponent,
    SkillAssessmentsComponent,
    SkillInstructionsComponent,
    QuizComponent,
    FinishQuizComponent,
    HrProfileComponent,
    MentorProfileComponent,
    ProfileLayoutComponent,
    QuizListComponent,
    QuizDetailsComponent,
    ProfileSideBarComponent,
    ReviewsCardComponent,
    ReviewsListComponent,
    ContactAdminComponent,
    ReviewsListComponent,
    QueryComponent,
    QueryAnswerComponent,
    MentorReplyComponent,
    ContactUsComponent,

    DeveloperSessionDetailsComponent

    BookingListComponent

  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule,

    CarouselModule,

    RouterModule,
    NgxPaginationModule,
    NgxSliderModule  ,

    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,

  ],
  exports: [RateComponent]
})
export class DeveloperModule {}
