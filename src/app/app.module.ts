import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],

  bootstrap: [AppComponent],
})
export class AppModule {}
