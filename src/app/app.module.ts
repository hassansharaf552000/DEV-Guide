// import { AppRoutingModule } from './app-routing.module';
// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import {
//   BrowserModule,
//   provideClientHydration,
// } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
// import { RouterModule } from '@angular/router';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { CarouselModule } from 'ngx-owl-carousel-o'; 
// import { CommonModule } from '@angular/common';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ToastrModule } from 'ngx-toastr';

// import { ReactiveFormsModule } from '@angular/forms';
// import { authInterceptor } from './shared/interceptors/auth.interceptor';
// import { loaderInterceptor } from './shared/interceptors/loader.interceptor';
// import { SharedModule } from './shared/shared.module';



// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     RouterModule,
//     CommonModule,
//     NgxPaginationModule,
//     BrowserAnimationsModule, 
//     ToastrModule.forRoot({ 
//       timeOut: 3000, 
//       positionClass: 'toast-top-right', 
//       preventDuplicates: true,
//       progressBar: true,
//     }),

//     CarouselModule,
//     ReactiveFormsModule,
//     SharedModule,

//   ],
//   providers: [
//     CookieService,
//     provideClientHydration(), 
//     provideHttpClient(withFetch(), withInterceptors([authInterceptor,loaderInterceptor]))],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o'; // Correct import
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ // ToastrModule added
      timeOut: 3000, // duration for toast notifications
      positionClass: 'toast-top-right', // position for toast notifications
      preventDuplicates: true, // prevent duplicate notifications
      progressBar: true,
    }),

    CarouselModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

  ],
  providers: [
    CookieService,
    MatDatepickerModule,
    provideClientHydration(), 
    provideHttpClient(withFetch(), withInterceptors([authInterceptor,loaderInterceptor])), provideAnimationsAsync()],
  bootstrap: [AppComponent],
  
})
export class AppModule {}