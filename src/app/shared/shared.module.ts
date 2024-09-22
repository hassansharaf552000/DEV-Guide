import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Update_profileComponent } from './components/update_profile/update_profile.component';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Forget_passwordComponent } from './components/forget_password/forget_password.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';

import { AdminUIComponent } from './components/admin-ui/admin-ui.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent,
    Update_profileComponent,
    LoginComponent,
    RegisterComponent,
    Forget_passwordComponent,
    FaqComponent,
    AdminUIComponent,
    CustomPaginationComponent
  ],

  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,NgxPaginationModule],

  exports: [NavbarComponent, FooterComponent],
  providers: [provideClientHydration()],
})
export class SharedModule {}
