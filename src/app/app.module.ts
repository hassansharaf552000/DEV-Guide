import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule,RouterModule,ReactiveFormsModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



  bootstrap: [AppComponent],
})
export class AppModule {}
