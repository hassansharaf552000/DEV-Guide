import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { SharedModule } from '../../shared/shared.module';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';

const routes: Routes = [
  {path:"reviews",component:ReviewsListComponent}
import { MentorlayoutComponent } from './components/mentorlayout/mentorlayout.component';
import { SidebarlayoutComponent } from './components/sidebarlayout/sidebarlayout.component';
import { MentorPaymentsComponent } from './components/mentor-payments/mentor-payments.component';
import { BookingComponent } from './components/booking/booking.component';

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

