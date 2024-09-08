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

const routes: Routes = [
  {
    path: 'mentorlayout',
    component: MentorlayoutComponent,
    children: [
      { path: 'mentor-payments', component: MentorPaymentsComponent },
      { path: 'booking', component: BookingComponent },
    ],
  },

  {
    path: 'SidebarlayoutComponent',
    component: SidebarlayoutComponent,
    children: [],
  },
  { path: '', redirectTo: 'mentorlayout', pathMatch: 'full' },

  { path: '**', redirectTo: 'mentorlayout' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class MentorRoutingModule {}
