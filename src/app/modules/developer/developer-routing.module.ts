import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HRListComponent } from './Components/hr-list/hr-list.component';
import { MentorListComponent } from './Components/mentor-list/mentor-list.component';
import { StepFiveComponent } from './Components/step-five/step-five.component';
import { StepFourComponent } from './Components/step-four/step-four.component';
import { StepOneComponent } from './Components/step-one/step-one.component';
import { StepThreeComponent } from './Components/step-three/step-three.component';
import { StepTwoComponent } from './Components/step-two/step-two.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { SharedModule } from '../../shared/shared.module';
import { Update_profileComponent } from '../../shared/components/update_profile/update_profile.component';
import { LoginComponent } from '../../shared/components/login/login.component';
import { RegisterComponent } from '../../shared/components/register/register.component';
import { Forget_passwordComponent } from '../../shared/components/forget_password/forget_password.component';
import { HomeComponent } from './Components/home/home.component';
import { BookingComponent } from './Components/booking/booking.component';
import { QueryComponent } from './Components/query/query.component';
import { BookingConfirmationComponent } from './Components/booking-confirmation/booking-confirmation.component';
import { SkillAssessmentsComponent } from './Components/skill-assessments/skill-assessments.component';
import { SkillInstructionsComponent } from './Components/skill-instructions/skill-instructions.component';
import { QuizComponent } from './Components/quiz/quiz.component';
import { FinishQuizComponent } from './Components/finish-quiz/finish-quiz.component';
import { HrProfileComponent } from './Components/hr-profile/hr-profile.component';
import { MentorProfileComponent } from './Components/mentor-profile/mentor-profile.component';
const routes: Routes = [
  { path: 'step-one', component: StepOneComponent },
  { path: 'step-two', component: StepTwoComponent },
  { path: 'step-three', component: StepThreeComponent },
  { path: 'step-four', component: StepFourComponent },
  { path: 'step-five', component: StepFiveComponent },
  { path: 'mentors', component: MentorListComponent },
  { path: 'mentors/:id', component: MentorProfileComponent }, // Updated route
  { path: 'hr', component: HRListComponent },
  { path: 'hr/:id', component: HrProfileComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'skill-assessments', component: SkillAssessmentsComponent },
  { path: 'skill-instructions', component: SkillInstructionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'finish-quiz', component: FinishQuizComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'updateprofile', component: Update_profileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgetpassword', component: Forget_passwordComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'query', component: QueryComponent },
  { path: 'confirmation', component: BookingConfirmationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
