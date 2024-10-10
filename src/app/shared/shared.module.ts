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
import { Forget_passwordComponent } from './components/forget_password/forget_password.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { AdminUIComponent } from './components/admin-ui/admin-ui.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';
import { Update_ProfileComponent } from './components/update_profile/update_profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { QuizzesDetailsComponent } from './components/quizzes-details/quizzes-details.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent,
    LoginComponent,
    RegisterComponent,
    Forget_passwordComponent,
    FaqComponent,
    CommunicationComponent,
    AdminUIComponent,
    CustomPaginationComponent,
    QuizCardComponent,
    QuizzesDetailsComponent,
    QuizzesListComponent
    CustomPaginationComponent,Update_ProfileComponent
  ],

  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,NgxPaginationModule,],

  exports: [NavbarComponent, FooterComponent, SpinnerComponent],

})
export class SharedModule {}
