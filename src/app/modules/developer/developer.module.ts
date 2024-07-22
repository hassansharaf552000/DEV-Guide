import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { DevelopercardComponent } from './developercard/developercard.component';
import { DeveloperrateComponent } from './developerrate/developerrate.component';



@NgModule({
  declarations: [
    UserlayoutComponent,
    DevelopercardComponent,
    DeveloperrateComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
