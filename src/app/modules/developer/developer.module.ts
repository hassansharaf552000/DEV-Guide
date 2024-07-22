import { HRCardComponent } from './Components/hr-card/hr-card.component';
import { RateComponent } from './Components/rate/rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { StepFiveComponent } from './Components/step-five/step-five.component';
import { StepFourComponent } from './Components/step-four/step-four.component';
import { StepOneComponent } from './Components/step-one/step-one.component';
import { StepThreeComponent } from './Components/step-three/step-three.component';
import { StepTwoComponent } from './Components/step-two/step-two.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { MentorCardComponent } from './Components/mentor-card/mentor-card.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';

@NgModule({
  declarations: [
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    RateComponent,
    HRCardComponent,
    HRListComponent,
    MentorCardComponent,
    MentorListComponent,
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class DeveloperModule {}
