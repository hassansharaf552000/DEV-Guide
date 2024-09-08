import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorRoutingModule } from './mentor-routing.module';
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
  imports: [CommonModule, MentorRoutingModule, SharedModule],
})
export class MentorModule {}
