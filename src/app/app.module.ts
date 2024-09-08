import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],

  bootstrap: [AppComponent],
})
export class AppModule {}
