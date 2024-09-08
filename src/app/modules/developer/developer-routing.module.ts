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
import { PaymentComponent } from './Components/payment/payment.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
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
import { UserlayoutComponent } from './Components/userlayout/userlayout.component';
import { MentorReplyComponent } from './Components/mentor-reply/mentor-reply.component';
import { QueryAnswerComponent } from './Components/query-answer/query-answer.component';
import { ProfileLayoutComponent } from './Components/profile-layout/profile-layout.component';
import { ReviewsListComponent } from './Components/reviews-list/reviews-list.component';
import { QuizListComponent } from './Components/quiz-list/quiz-list.component';
import { MentorAnswerQueryComponent } from '../mentor/Components/mentor-answer-query/mentor-answer-query.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {path:"",component:UserlayoutComponent,children:
  [
          { path: 'step-one', component: StepOneComponent },
          { path: 'payment', component: PaymentComponent },
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
         
          // { path: 'userlayout', component: UserlayoutComponent },
          { path: 'home', component: HomeComponent },
          { path: 'forgetpassword', component: Forget_passwordComponent },
          { path: 'faq-and-licence', component: FaqComponent },
          // { path: '', redirectTo: 'userlayout', pathMatch: 'full' },
          // { path: '**', redirectTo: 'userlayout' },
          { path: 'booking', component: BookingComponent },
          { path: 'query', component: QueryComponent },
          { path: 'confirmation', component: BookingConfirmationComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: '**', redirectTo: 'notfound' },
          {path:'reply', component:MentorReplyComponent},
          {path:'answer_query', component:QueryAnswerComponent},
          { path: 'mentor-answer', component: MentorAnswerQueryComponent }


         
  ]
},

  {path:'profile',component:ProfileLayoutComponent,children:[
    { path: 'updateprofile', component: Update_profileComponent },
     {path:'reviews',component:ReviewsListComponent},
     {path:'quizzes',component:QuizListComponent}
  


  ]
}

  



];
@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}

