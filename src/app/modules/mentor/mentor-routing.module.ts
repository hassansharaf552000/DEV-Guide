import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorRoutingModule {}
