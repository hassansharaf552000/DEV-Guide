import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common'

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [];

@NgModule({
  declarations: [],

  imports: [
    CommonModule

  ]

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class GuestRoutingModule {}
