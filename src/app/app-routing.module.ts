import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
import { ContactUsComponent } from './modules/developer/contact-us/contact-us.component';
>>>>>>> 490544c09936e65d506d43fa2fa0d732848c1a56

const routes: Routes = [
  { path: '', component: ContactUsComponent },

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'developer',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./modules/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./modules/hr/hr.module').then((m) => m.HrModule),
  },
  {
    path: 'mentor',
    loadChildren: () =>
      import('./modules/mentor/mentor.module').then((m) => m.MentorModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
