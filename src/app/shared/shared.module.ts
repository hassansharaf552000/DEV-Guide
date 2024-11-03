import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forget_password/forget_password.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AdminUIComponent } from './components/admin-ui/admin-ui.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { Update_ProfileComponent } from './components/update_profile/update_profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from './components/quizzes-details/quizzes-details.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationsComponent } from './components/education-list/education-list.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { SocialAccountsListComponent } from './components/social-accounts-list/social-accounts-list.component';
import { AddsocialaccountComponent } from './components/addsocialaccount/addsocialaccount.component';
import { SocialaccountscardComponent } from './components/socialaccountscard/socialaccountscard.component';

import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { StepFiveComponent } from './components/step-five/step-five.component';
import { PaymentComponent } from './components/payment/payment.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { TakenQuizzesCardComponent } from './components/taken-quizzes-card/taken-quizzes-card.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';




@NgModule({
  declarations: [
    NavbarComponent,
    QuizComponent,
    QuizDetailsComponent,
    QuizListComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    FaqComponent,
    CommunicationComponent,
    AdminUIComponent,
    CustomPaginationComponent,
    QuizCardComponent,
    QuizzesDetailsComponent,
    QuizzesListComponent,
    CustomPaginationComponent,
    Update_ProfileComponent,
    ChangepasswordComponent,
    SkillsComponent,
    EducationsComponent,
    EducationCardComponent,
    EditEducationComponent,
    AddEducationComponent,
    ExperienceCardComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    ExperienceListComponent,
    SocialAccountsListComponent,
    AddsocialaccountComponent,
    SocialaccountscardComponent,

    ResetPasswordComponent,

    PaymentComponent,
    TakenQuizzesCardComponent,
    ErrorPageComponent,

  ],

  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgxPaginationModule,
    MatFormFieldModule,        // Material Form field
    MatInputModule,            // Material input field
    MatButtonModule,           // Material button
    MatDialogModule,
    MatOptionModule,          // Material dialog
    MatDatepickerModule,       // Material datepicker
    MatNativeDateModule,       // Native date adapter for datepicker
    MatCheckboxModule,
    MatCardModule,       // Material Card module
    MatIconModule,       // Material Icon module
    MatButtonModule,
  ],

  exports: [NavbarComponent, FooterComponent, SpinnerComponent],

})
export class SharedModule { }
