import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MentorRoutingModule } from './mentor-routing.module';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorRoutingModule } from '../developer/Components/mentor/mentor-routing.module';
import { MentorRoutingModule } from './mentor-routing.module';
import { ReviewsCardComponent } from './Components/reviews-card/reviews-card.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';



 
 


@NgModule({
  declarations: [
    ScheduleComponent,
    SessionDetailsComponent,
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
      
  ]

})
export class MentorModule { }


    

    ReviewsCardComponent,
    ReviewsListComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    MentorRoutingModule
  ]
import { MentorPaymentsComponent } from './components/mentor-payments/mentor-payments.component';
import { MentorlayoutComponent } from './components/mentorlayout/mentorlayout.component';
import { SidebarlayoutComponent } from './components/sidebarlayout/sidebarlayout.component';
import { SharedModule } from '../../shared/shared.module';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    MentorPaymentsComponent,
    MentorlayoutComponent,
    SidebarlayoutComponent,
    BookingComponent,
  ],

})
export class MentorModule {}
