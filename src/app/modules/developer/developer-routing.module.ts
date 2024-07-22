import { RateComponent } from './Components/rate/rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { MentorCardComponent } from './Components/mentor-card/mentor-card.component';
import { HRCardComponent } from './Components/hr-card/hr-card.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';

const routes: Routes = [
  { path: 'mentors', component: MentorListComponent},
  {path: 'HR-S', component: HRListComponent}
];

@NgModule({
  declarations: [
    MentorListComponent,
    MentorCardComponent,
    RateComponent,
    HRListComponent,
    HRCardComponent
  ],
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DeveloperRoutingModule { }
