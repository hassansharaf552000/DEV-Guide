import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module'; // Correct import path
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { MentorCardComponent } from './Components/mentor-card/mentor-card.component';
import { RateComponent } from './Components/rate/rate.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { HRCardComponent } from './Components/hr-card/hr-card.component';


@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
  ],
  declarations: [

  ]
})
export class DeveloperModule { }
