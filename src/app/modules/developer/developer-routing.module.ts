import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepFiveComponent } from './Components/step-five/step-five.component';
import { StepFourComponent } from './Components/step-four/step-four.component';
import { StepOneComponent } from './Components/step-one/step-one.component';
import { StepThreeComponent } from './Components/step-three/step-three.component';
import { StepTwoComponent } from './Components/step-two/step-two.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'step-four', component: StepFourComponent },
  { path: 'step-five', component: StepFiveComponent },
  { path: 'mentors', component: MentorListComponent },
  { path: 'hr-s', component: HRListComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '', redirectTo: 'step-one', pathMatch: 'full' },
  { path: '**', redirectTo: 'step-one' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
