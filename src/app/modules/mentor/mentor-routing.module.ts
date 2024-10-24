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
import { ProfileComponent } from './Components/profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: MentorlayoutComponent,
    children: [
      // { path: 'profile', component:MentorProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'mentor-payments', component: MentorPaymentsComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'mentor-summry', component: MentorSummryComponent },
      { path: 'mentor-request', component: MentorRequestComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact_admin', component: ContactAdminComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: MentorAnswerQueryComponent },
      { path: 'session-details', component: SessionDetailsComponent },
      { path: 'home', component: MentorlayoutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'notfound' },
    ],
  },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorRoutingModule {}
