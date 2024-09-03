import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorRoutingModule } from './mentor-routing.module';
import { MentorAnswerComponent } from './Components/mentor-answer/mentor-answer.component';



@NgModule({
  declarations: [
    MentorAnswerComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
