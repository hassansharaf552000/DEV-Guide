import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HrlayoutComponent } from './Components/hrlayout/hrlayout.component';
import { Update_ProfileComponent } from '../../shared/components/update_profile/update_profile.component';
import { HrPaymentsComponent } from './Components/hr-payments/hr-payments.component';
import { BookingHrComponent } from './Components/booking-hr/booking-hr.component';
import { HrSummaryComponent } from './Components/hr-summary/hr-summary.component';
import { HrRequestComponent } from './Components/hr-request/hr-request.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { ContactHrComponent } from './Components/contact-hr/contact-hr.component';
import { HrAnswerQueryComponent } from './Components/hr-answer-query/hr-answer-query.component';
import { SessionDatailsComponent } from './Components/session-details/session-details.component';
import { HrProfileComponent } from '../developer/Components/hr-profile/hr-profile.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';

const routes: Routes = [
  {
    path: '',
    component: HrlayoutComponent,
    children: [
      { path: 'profile', component:HrProfileComponent },
      { path: 'updateprofile', component: Update_ProfileComponent },
      { path: 'hr-payments', component: HrPaymentsComponent },
      { path: 'booking', component:BookingHrComponent },
      { path: 'hr-summry', component: HrSummaryComponent },
      { path: 'hr-request', component: HrRequestComponent},
      { path: 'schedule', component: ScheduleComponent },
      { path: 'contact-hr', component: ContactHrComponent },
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'queryanswers', component: HrAnswerQueryComponent },
      { path: 'session-details', component: SessionDatailsComponent },
      { path: 'home', component: HrlayoutComponent },
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
export class HrRoutingModule {}
