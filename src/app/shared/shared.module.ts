import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Update_profileComponent } from './components/update_profile/update_profile.component';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent,
    Update_profileComponent,
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    CommonModule
   
  ],providers: [
    provideClientHydration()
  ]
})

export class SharedModule { }

  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}

