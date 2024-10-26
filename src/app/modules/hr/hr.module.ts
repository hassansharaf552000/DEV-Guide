import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrRoutingModule } from './hr-routing.module';
import { BookingHrComponent } from './Components/booking-hr/booking-hr.component';
import { ContactHrComponent } from './Components/contact-hr/contact-hr.component';
import { HrAnswerQueryComponent } from './Components/hr-answer-query/hr-answer-query.component';
import { HrPaymentsComponent } from './Components/hr-payments/hr-payments.component';
import { HrRequestComponent } from './Components/hr-request/hr-request.component';
import { HrSummaryComponent } from './Components/hr-summary/hr-summary.component';
import { HrlayoutComponent } from './Components/hrlayout/hrlayout.component';
import { ReviewsCardComponent } from './Components/reviews-card/reviews-card.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { SessionDatailsComponent } from './Components/session-details/session-details.component';
import { SidebarlayoutComponent } from './Components/sidebarlayout/sidebarlayout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { DeveloperModule } from '../developer/developer.module';




@NgModule({
  declarations: [
    BookingHrComponent,
    ContactHrComponent,
    HrAnswerQueryComponent,
    HrPaymentsComponent,
    HrRequestComponent,
    HrSummaryComponent,
    HrlayoutComponent,
    ReviewsCardComponent,
    ReviewsListComponent,
    ScheduleComponent,
    SessionDatailsComponent,
    SidebarlayoutComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DeveloperModule
  ]
})
export class HrModule { }
