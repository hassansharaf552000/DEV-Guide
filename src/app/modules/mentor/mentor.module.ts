import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorRoutingModule } from '../developer/Components/mentor/mentor-routing.module';









@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
