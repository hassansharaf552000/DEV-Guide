import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactAdminComponent } from './contact-admin/contact-admin.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class MentorRoutingModule {}

