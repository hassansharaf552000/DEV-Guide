import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Update_profileComponent } from './components/update_profile/update_profile.component';
import { provideClientHydration } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent,
    Update_profileComponent
  ],
  imports: [
   // CommonModule
   
  ],providers: [
    provideClientHydration()
  ]
})

export class SharedModule { }
