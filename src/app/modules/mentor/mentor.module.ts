import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MentorRoutingModule } from './mentor-routing.module';
import { SessionDetailsComponent } from './session-details/session-details.component';



 
 


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


