import { HRCardComponent } from './Components/hr-card/hr-card.component';
import { RateComponent } from './Components/rate/rate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { DevelopercardComponent } from './Components/developercard/developercard.component';
import { DeveloperrateComponent } from './Components/developerrate/developerrate.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { MentorCardComponent } from './Components/mentor-card/mentor-card.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { StepFiveComponent } from './Components/step-five/step-five.component';
import { StepFourComponent } from './Components/step-four/step-four.component';
import { StepOneComponent } from './Components/step-one/step-one.component';
import { StepThreeComponent } from './Components/step-three/step-three.component';
import { StepTwoComponent } from './Components/step-two/step-two.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';


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
    ContactUsComponent,
    AboutUsComponent,
    UserlayoutComponent,
    DevelopercardComponent,
    DeveloperrateComponent,
    PaymentComponent
    

  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule,
    
    
  ],
})
export class DeveloperModule {}
