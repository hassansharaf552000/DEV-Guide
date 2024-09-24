import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SessionDetailsComponent } from './Components/session-details/session-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorRoutingModule } from './mentor-routing.module';
import { ReviewsCardComponent } from './Components/reviews-card/reviews-card.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './Components/booking-mentor/booking.component';
import { MentorPaymentsComponent } from './Components/mentor-payments/mentor-payments.component';
import { MentorlayoutComponent } from './Components/mentorlayout/mentorlayout.component';
import { SidebarlayoutComponent } from './Components/sidebarlayout/sidebarlayout.component';
import { MentorAnswerQueryComponent } from './Components/mentor-answer-query/mentor-answer-query.component';
import { MentorSummryComponent } from './Components/mentor-summry/mentor-summry.component';
import { MentorRequestComponent } from './Components/mentor-request/mentor-request.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    SessionDetailsComponent,
    MentorPaymentsComponent,
    MentorlayoutComponent,
    SidebarlayoutComponent,
    BookingComponent,
    ReviewsCardComponent,
    ReviewsListComponent,
    MentorAnswerQueryComponent,
    MentorSummryComponent,
    MentorRequestComponent,
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MentorRoutingModule,
    SharedModule,
  ],
})
export class MentorModule {}
